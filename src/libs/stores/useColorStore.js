import { create } from "zustand";

export const useColorStore = create((set) => ({
  color: "orange",
  setColor: (color) => set((state) => ({ ...state, color })),
}));
