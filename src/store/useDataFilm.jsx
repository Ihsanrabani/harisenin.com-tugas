import { create } from "zustand";

const useDataFilm = create((set, get) => ({
    dataFilm: [],
    setDataFilm: (resData) => {
        const updatedData = [...get().dataFilm, resData];
        set({ dataFilm: updatedData });
    },
        clearDataFilm: () => set({ dataFilm: [] }),
}))

export default useDataFilm;