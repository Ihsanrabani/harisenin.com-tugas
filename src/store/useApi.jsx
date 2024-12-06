import { create } from "zustand";

const useApi = create((set) => ({
  filmDatas: [],
  setFilmDatas: (apiRes) => set(() => ({ filmDatas: apiRes })),
}))

export default useApi;