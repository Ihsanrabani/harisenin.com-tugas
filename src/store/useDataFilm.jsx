import { create } from "zustand";

const useDataFilm = create((set, get) => ({
    dataFilm: [],
    setDataFilm: (resData) => {
        const updatedData = [...get().dataFilm, resData];
        set({ dataFilm: updatedData });
    }
}))

export default useDataFilm;