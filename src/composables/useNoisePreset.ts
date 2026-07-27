import { ref } from "vue";
import { NOISE_PRESETS } from "@domain";

const activeNoisePreset = ref<NOISE_PRESETS>(NOISE_PRESETS.SOFT);

export const useNoisePreset = () => {
  const setNoisePreset = (preset: NOISE_PRESETS) => {
    activeNoisePreset.value = preset;
  };

  return {
    activeNoisePreset,
    setNoisePreset,
  };
};
