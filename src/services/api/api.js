import axios from "axios";

// Ambil data dari mockAPI
const getApi = async () => {
    try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const res = await axios.get(apiUrl);
        console.log("Fetching Berhasil");
        return res.data;
    } catch {
        console.error("Fetching gagal");
    }
};

export default getApi;