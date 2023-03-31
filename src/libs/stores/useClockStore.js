import { create } from "zustand";

export const useClockStore = create((set) => ({
  hands: {
    hour: `rotate(0deg)`,
    minute: `rotate(0deg)`,
    second: `rotate(0deg)`,
  },
  setHands: (hands) => set({ hands: hands }),
}));
