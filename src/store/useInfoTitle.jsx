import { create } from "zustand";

const useInfoTitle = create((set) => ({
  infoTitle: "",
  isDisplay: false,
  setInfoTitle: (newTitle) => set(() => ({ infoTitle: newTitle })),
  setIsDisplay: (newStatus) => set(() => ({ isDisplay: newStatus })),
}))

export default useInfoTitle;