export enum NOISE_PRESETS {
  SOFT = "soft",
  MEDIUM = "medium",
  STRONG = "strong",
  FLICKER = "flicker",
  SPECKLE = "speckle",
}

export interface NoisePresetOption {
  value: NOISE_PRESETS;
  label: string;
}

export const NOISE_PRESET_OPTIONS: NoisePresetOption[] = [
  { value: NOISE_PRESETS.SOFT, label: "Soft" },
  { value: NOISE_PRESETS.MEDIUM, label: "Medium" },
  { value: NOISE_PRESETS.STRONG, label: "Strong" },
  { value: NOISE_PRESETS.FLICKER, label: "Flicker" },
  { value: NOISE_PRESETS.SPECKLE, label: "Speckle" },
];
