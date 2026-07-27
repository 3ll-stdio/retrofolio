<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, watch } from "vue";
import { NOISE_PRESETS } from "@domain";
import { useNoisePreset } from "../../composables/useNoisePreset";

type NoiseStyle = "grain" | "speckle";

interface NoiseRenderConfig {
  alpha: number;
  minLuma: number;
  maxLuma: number;
  fps: number;
  flickerBoost: number;
  style: NoiseStyle;
  density: number;
  vignetteStrength: number;
  patchContrast: number;
}

const NOISE_CONFIG: Record<NOISE_PRESETS, NoiseRenderConfig> = {
  [NOISE_PRESETS.SOFT]: {
    alpha: 0.11,
    minLuma: 108,
    maxLuma: 184,
    fps: 8,
    flickerBoost: 0.01,
    style: "grain",
    density: 1,
    vignetteStrength: 0,
    patchContrast: 0,
  },
  [NOISE_PRESETS.MEDIUM]: {
    alpha: 0.17,
    minLuma: 92,
    maxLuma: 196,
    fps: 14,
    flickerBoost: 0.03,
    style: "grain",
    density: 1,
    vignetteStrength: 0,
    patchContrast: 0,
  },
  [NOISE_PRESETS.STRONG]: {
    alpha: 0.24,
    minLuma: 72,
    maxLuma: 215,
    fps: 22,
    flickerBoost: 0.05,
    style: "grain",
    density: 1,
    vignetteStrength: 0,
    patchContrast: 0,
  },
  [NOISE_PRESETS.FLICKER]: {
    alpha: 0.2,
    minLuma: 64,
    maxLuma: 224,
    fps: 28,
    flickerBoost: 0.09,
    style: "grain",
    density: 1,
    vignetteStrength: 0,
    patchContrast: 0,
  },
  [NOISE_PRESETS.SPECKLE]: {
    alpha: 0.22,
    minLuma: 48,
    maxLuma: 236,
    fps: 12,
    flickerBoost: 0.025,
    style: "speckle",
    density: 0.22,
    vignetteStrength: 0.55,
    patchContrast: 0.7,
  },
};

const NOISE_SIZE = 128;
const PATCH_SIZE = 16;
const PATCH_REFRESH_FRAMES = 18;

const { activeNoisePreset } = useNoisePreset();
const currentConfig = computed(() => NOISE_CONFIG[activeNoisePreset.value]);

let canvas: HTMLCanvasElement | null = null;
let context: CanvasRenderingContext2D | null = null;
let noiseCanvas: HTMLCanvasElement | null = null;
let noiseContext: CanvasRenderingContext2D | null = null;
let noisePixels: Uint8ClampedArray | null = null;

let patchField = new Float32Array(PATCH_SIZE * PATCH_SIZE);
let framesSincePatchRefresh = PATCH_REFRESH_FRAMES;

let frameId = 0;
let lastFrameTime = 0;
let isReducedMotion = false;
let mediaQuery: MediaQueryList | null = null;

const setupCanvas = () => {
  canvas = document.getElementById("noise") as HTMLCanvasElement | null;
  if (!canvas) return;

  context = canvas.getContext("2d", { alpha: true });
  if (!context) return;

  noiseCanvas = document.createElement("canvas");
  noiseCanvas.width = NOISE_SIZE;
  noiseCanvas.height = NOISE_SIZE;
  noiseContext = noiseCanvas.getContext("2d", { alpha: true });
  noisePixels = new Uint8ClampedArray(NOISE_SIZE * NOISE_SIZE * 4);
};

const resizeCanvas = () => {
  if (!canvas || !context) return;

  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
};

const refreshPatchField = () => {
  for (let i = 0; i < patchField.length; i += 1) {
    // Soft, uneven density patches (biased toward mid-range).
    patchField[i] = 0.35 + Math.random() * 0.9;
  }
  framesSincePatchRefresh = 0;
};

const samplePatch = (x: number, y: number) => {
  const scale = PATCH_SIZE / NOISE_SIZE;
  const fx = x * scale;
  const fy = y * scale;
  const x0 = Math.floor(fx);
  const y0 = Math.floor(fy);
  const x1 = Math.min(x0 + 1, PATCH_SIZE - 1);
  const y1 = Math.min(y0 + 1, PATCH_SIZE - 1);
  const tx = fx - x0;
  const ty = fy - y0;

  const i00 = y0 * PATCH_SIZE + x0;
  const i10 = y0 * PATCH_SIZE + x1;
  const i01 = y1 * PATCH_SIZE + x0;
  const i11 = y1 * PATCH_SIZE + x1;

  const a = patchField[i00] * (1 - tx) + patchField[i10] * tx;
  const b = patchField[i01] * (1 - tx) + patchField[i11] * tx;
  return a * (1 - ty) + b * ty;
};

const renderGrainFrame = (config: NoiseRenderConfig, alphaChannel: number) => {
  if (!noisePixels) return;

  for (let i = 0; i < noisePixels.length; i += 4) {
    const luma =
      Math.floor(Math.random() * (config.maxLuma - config.minLuma + 1)) +
      config.minLuma;
    noisePixels[i] = luma;
    noisePixels[i + 1] = luma;
    noisePixels[i + 2] = luma;
    noisePixels[i + 3] = alphaChannel;
  }
};

const renderSpeckleFrame = (config: NoiseRenderConfig, alphaChannel: number) => {
  if (!noisePixels) return;

  if (framesSincePatchRefresh >= PATCH_REFRESH_FRAMES) {
    refreshPatchField();
  } else {
    framesSincePatchRefresh += 1;
  }

  const midLuma = Math.floor((config.minLuma + config.maxLuma) / 2);
  const gapLuma = config.maxLuma - config.minLuma;
  const invSize = 1 / (NOISE_SIZE - 1);

  for (let y = 0; y < NOISE_SIZE; y += 1) {
    for (let x = 0; x < NOISE_SIZE; x += 1) {
      const i = (y * NOISE_SIZE + x) * 4;
      const nx = x * invSize * 2 - 1;
      const ny = y * invSize * 2 - 1;
      const radius = Math.sqrt(nx * nx + ny * ny);

      // Soft vignette: slightly denser toward the edges (CRT dust feel).
      const vignette = 1 + (radius - 0.35) * config.vignetteStrength;
      const patch =
        1 + (samplePatch(x, y) - 0.8) * config.patchContrast;
      const localDensity = Math.max(
        0.02,
        Math.min(0.72, config.density * vignette * patch),
      );

      if (Math.random() < localDensity) {
        // High-contrast dotted speckles with uneven brightness.
        const speckBias = Math.random();
        const luma =
          speckBias > 0.55
            ? config.maxLuma - Math.floor(Math.random() * (gapLuma * 0.25))
            : config.minLuma + Math.floor(Math.random() * (gapLuma * 0.2));
        const speckAlpha = Math.min(
          255,
          alphaChannel + Math.floor(Math.random() * 40),
        );
        noisePixels[i] = luma;
        noisePixels[i + 1] = luma;
        noisePixels[i + 2] = luma;
        noisePixels[i + 3] = speckAlpha;
      } else {
        noisePixels[i] = midLuma;
        noisePixels[i + 1] = midLuma;
        noisePixels[i + 2] = midLuma;
        noisePixels[i + 3] = Math.floor(alphaChannel * 0.12);
      }
    }
  }
};

const renderFrame = () => {
  if (!context || !noiseContext || !noisePixels || !canvas || !noiseCanvas) return;

  const config = currentConfig.value;
  const alphaJitter = (Math.random() - 0.5) * config.flickerBoost;
  const alpha = Math.max(0.03, Math.min(0.35, config.alpha + alphaJitter));
  const alphaChannel = Math.floor(alpha * 255);

  if (config.style === "speckle") {
    renderSpeckleFrame(config, alphaChannel);
  } else {
    renderGrainFrame(config, alphaChannel);
  }

  const imageData = noiseContext.createImageData(NOISE_SIZE, NOISE_SIZE);
  imageData.data.set(noisePixels);
  noiseContext.putImageData(imageData, 0, 0);

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.imageSmoothingEnabled = false;
  context.drawImage(noiseCanvas, 0, 0, canvas.width, canvas.height);
};

const animate = (timestamp: number) => {
  const frameDuration = 1000 / currentConfig.value.fps;
  if (timestamp - lastFrameTime >= frameDuration) {
    lastFrameTime = timestamp;
    renderFrame();
  }
  frameId = requestAnimationFrame(animate);
};

const stopAnimation = () => {
  if (!frameId) return;
  cancelAnimationFrame(frameId);
  frameId = 0;
};

const startAnimation = () => {
  stopAnimation();
  framesSincePatchRefresh = PATCH_REFRESH_FRAMES;
  renderFrame();
  if (isReducedMotion) return;
  frameId = requestAnimationFrame(animate);
};

const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
  isReducedMotion = event.matches;
  startAnimation();
};

onMounted(() => {
  setupCanvas();
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  isReducedMotion = mediaQuery.matches;
  mediaQuery.addEventListener("change", handleMotionPreferenceChange);

  startAnimation();
});

watch(activeNoisePreset, () => {
  lastFrameTime = 0;
  startAnimation();
});

onBeforeUnmount(() => {
  stopAnimation();
  window.removeEventListener("resize", resizeCanvas);
  mediaQuery?.removeEventListener("change", handleMotionPreferenceChange);
});
</script>

<template>
  <canvas id="noise" aria-hidden="true"></canvas>
</template>

<style scoped>
#noise {
  height: 100%;
  width: 100%;
  mix-blend-mode: soft-light;
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
}
</style>
