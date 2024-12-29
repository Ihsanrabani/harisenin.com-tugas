import axios from "axios";

const updateFilmGenre = async  (id, newGenre) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const res = await axios.put(`${apiUrl}/${id}`, {genre: newGenre})
}