import { create } from "zustand";

const useInfoStatus = create((set) => ({
  isDisplay: false,
  setIsDisplay: () => set((newStatus) => ({ isDisplay: newStatus })),
}))

export default useInfoStatus;