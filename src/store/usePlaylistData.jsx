import { create } from "zustand";

const usePlaylistData = create((set, get) => ({
    playlistData: [],
    setPlaylistData: (resData) => {
        const updatedData = [...get().playlistData, resData];
        set({ playlistData: updatedData });
    }
}))

export default usePlaylistData;