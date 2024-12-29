import React, {useEffect, useState} from "react";
import axios from "axios";
import classes from "../styles/home.module.css";
import "../index.css";
import plusIco from "../assets/icons/plus.png"
import addPlIco from "../assets/icons/addPL.png"
import vdotIco from "../assets/icons/Vdot.png"
import useApi from "../store/useApi";
import useDataFilm from "../store/useDataFilm";
import usePlaylistData from "../store/usePlaylistData";
import useInfoStatus from "../store/useInfoStatus";
import { use } from "react";



const fCCard = ({id, imgUrl, WTB, WTR}) => {

    const { filmDatas, setFilmDatas } = useApi();
    const [ genreDatas, setGenreDatas] = useState([]);
    const { setIsDisplay } = useInfoStatus();

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await getApi();
            setFilmDatas(data);
            console.log("Fetching Berhasil");
        } catch (err){
            
        }
        };

        fetchData();
    }, [setFilmDatas]);

    const getId = (idKey) => {
        const posterData = filmDatas[idKey]; // Akses elemen ke-id
        return posterData;
    }

    const idData = getId(id)

    const { dataFilm, setDataFilm } = useDataFilm();
    const { playlistData ,setPlaylistData} = usePlaylistData();
    const { genreDisplay, setGenreDisplay } = useState([])

    const upDataFilm = () => {
        try {
            setDataFilm(idData)
            console.log("Data berhasil ditambahkan ke favorit")
        } catch{
            console.log("Daya gagal ditambahkan ke favorit")
        }
    }

    const upPlaylistData = () => {
        try {
            setPlaylistData(idData)
            console.log("Data berhasil ditambahkan ke Playlist")

        } catch (error){
            console.log("Data gagal ditambahkan ke Playlist ", error)
        }
    }

    const handleGenreInput = async (id, newGenre) => {
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const res = await axios.put(`${apiUrl}/${id}`, {genre: newGenre}) // Mengubah value data genre menjadi newGenre   
            if (res.status === 200) {
                setIsDisplay(true)
                setFilmDatas(   
                    filmDatas.map((film) => film.id === id ? { ...film, genre: newGenre } : film )
                )
                if (filmDatas.length > 0) {
                    setGenreDatas(filmDatas[0].genre)
                }
            } else {
                console.error(`Gagal memperbarui film: ${res.statusText}`);
            }
        }

        catch (error) {
            console.error(`Error saat memperbarui film ${id}:`, error);
        }


    }

    const [isVisible, setIsVisible] = useState("hidden")

    const Ontrigger =() => {
        setIsVisible(isVisible === "hidden" ? "block" : "hidden")
    }

    // {filmDatas.map((films) => ())}
    //     <div key={films.id} className="shrink-0 relative">
                
    //             <p className={`text-white absolute ml-2 ${classes.text2xs} rounded-full mt-2 ${classes.latoBold} p-1 ${classes.bgBlue901}`}>Episode Baru</p>
    //             <p className="absolute text-sm mt-28 ml-1 bg-red-400 p-0.5 rounded border border-red-600 xl:mt-80 xl:ml-5 xl:text-xl xl:px-5">{films.genre}</p>
    //             <button className={`absolute xl:mt-80 xl:ml-48 mt-28 ml-14`} onClick={upDataFilm}><img src={plusIco} alt="Plus icon" className="w-7 xl:w-10"/></button>
    //             <button onClick={() => {console.log(filmDatas)}}>CEK DATA</button>
    //             <select value={() => {e.target.value}} onChange={(e) => handleGenreInput(films.id, e.target.value)} id="" className="text-black absolute xl:mt-72 xl:ml-3 mt-28 appearance-none text-sm p-0.5 rounded ml-1">
    //                 <option value="">Genres</option>
    //                 <option value="aksi">Aksi</option>
    //                 <option value="anak-anak">Anak-anak</option>
    //                 <option value="anime">Anime</option>
    //                 <option value="britania">Britania</option>
    //                 <option value="drama">Drama</option>
    //                 <option value="fantasi">Fantasi</option>
    //                 <option value="kejahatan">Kejahatan</option>
    //                 <option value="kdrama">KDrama</option>
    //                 <option value="komedi">Komedi</option>
    //                 <option value="petualangan">Petualangan</option>
    //                 <option value="perang">Perang</option>
    //                 <option value="romantis">Romantis</option>
    //                 <option value="sains">Sains</option>
    //             </select>
    //         <img src={imgUrl} alt="Film cover gagal" className="text-white rounded-lg w-24 h-36 xl:h-96 xl:w-60"/>
    //     </div>



    if (WTB === true && WTR === false) {
        return (
            <div className="shrink-0 relative">
                <p className={`text-white absolute ml-2 ${classes.text2xs} rounded-full mt-2 ${classes.latoBold} p-1 ${classes.bgBlue901}`}>Episode Baru</p>
                <button className="absolute xl:mt-80 xl:ml-48 mt-28 ml-14" onClick={Ontrigger}><img src={vdotIco} alt="3dot" className=""/></button>
                <select onChange={(e) => handleGenreInput(id, e.target.value)} id="" className={`text-black border xl:px-1.5 flex items-center gap-2 absolute xl:mt-80 xl:ml-3 mt-28 appearance-none xl:text-xl rounded ml-1 ${classes.text2xs}`}>
                    <option value="">-Genres-</option>
                    <option value="aksi">Aksi</option>
                    <option value="anak-anak">Anak-anak</option>
                    <option value="anime">Anime</option>
                    <option value="britania">Britania</option>
                    <option value="drama">Drama</option>
                    <option value="fantasi">Fantasi</option>
                    <option value="kejahatan">Kejahatan</option>
                    <option value="kdrama">KDrama</option>
                    <option value="komedi">Komedi</option>
                    <option value="petualangan">Petualangan</option>
                    <option value="perang">Perang</option>
                    <option value="romantis">Romantis</option>
                    <option value="sains">Sains</option>
                </select>

                <div className={isVisible}>
                    <div className={`absolute ${classes.bgGray902} border xl:px-2 flex items-center gap-2 mt-24 ml-6 xl:mt-72 xl:ml-28 rounded`}>
                        <button className={`text-white xl:text-xl text-xs xl:p-0.5`} onClick={upDataFilm}>Add Favorit</button>
                    </div>
                </div>

                <img src={imgUrl} alt="Film cover gagal"  className="text-white rounded-lg w-24 h-36 xl:h-96 xl:w-60"/>
            </div>
            );  
        } else if (WTB === false && WTR === true) {
            return (
            <>
                <div className="shrink-0 relative">
                    <p className={`absolute text-white ${classes.text2xs} xl:text-sm ${classes.bgRed901} p-0.5 xl:p-1 rounded-tr rounded-bl ${classes.mlCust} text-center`}>Top <br/>10</p>
                    <button className="absolute xl:mt-80 xl:ml-48 mt-28 ml-14" onClick={Ontrigger}><img src={vdotIco} alt="3dot" className=""/></button>
                    <select onChange={(e) => handleGenreInput(id, e.target.value)} id="" className={`text-black border xl:px-1.5 flex items-center gap-2 absolute xl:mt-80 xl:ml-3 mt-28 appearance-none xl:text-xl rounded ml-1 ${classes.text2xs}`}>
                        <option value="">-Genres-</option>
                        <option value="aksi">Aksi</option>
                        <option value="anak-anak">Anak-anak</option>
                        <option value="anime">Anime</option>
                        <option value="britania">Britania</option>
                        <option value="drama">Drama</option>
                        <option value="fantasi">Fantasi</option>
                        <option value="kejahatan">Kejahatan</option>
                        <option value="kdrama">KDrama</option>
                        <option value="komedi">Komedi</option>
                        <option value="petualangan">Petualangan</option>
                        <option value="perang">Perang</option>
                        <option value="romantis">Romantis</option>
                        <option value="sains">Sains</option>

                    </select>

                    <div className={isVisible}>
                        <div className={`absolute ${classes.bgGray902} border xl:px-2 flex items-center gap-2 mt-24 ml-6 xl:mt-72 xl:ml-28 rounded`}>
                            <button className={`text-white xl:text-xl text-xs xl:p-0.5`} onClick={upDataFilm}>Add Favorit</button>
                        </div>
                    </div>

                    <img src={imgUrl} alt="Film cover gagal"  className="text-white rounded-lg w-24 h-36 xl:h-96 xl:w-60"/>
                </div>
            </>
        );  
    } else {
        return (
            // <>
            //         <div className="shrink-0 relative">
            //             <p className={`absolute text-white ${classes.text2xs} xl:text-sm ${classes.bgRed901} p-0.5 xl:p-1 rounded-tr rounded-bl ${classes.mlCust} text-center`}>Top <br/>10</p>
            //             <button className="absolute xl:mt-80 xl:ml-48 mt-28 ml-14" onClick={Ontrigger}><img src={vdotIco} alt="3dot" className=""/></button>
            //             <p className="absolute text-sm mt-28 ml-1 bg-red-400 p-0.5 rounded border border-red-600 xl:mt-80 xl:ml-5 xl:text-xl xl:px-5">{films.genre}</p>

            //             <div className={isVisible}>
            //                 <div className={`absolute ${classes.bgGray902} border xl:px-2 flex items-center gap-2 mt-24 ml-6 xl:mt-72 xl:ml-28 rounded`}>
            //                     <button className={`text-white xl:text-xl text-xs xl:p-0.5`} onClick={upDataFilm}>Add Favorit</button>
            //                 </div>
            //                 <select value={() => {e.target.value}} onChange={(e) => handleGenreInput(films.id, e.target.value)} id="" className="text-black border xl:px-1.5 flex items-center gap-2 absolute xl:mt-64 xl:ml-28 mt-16 ml-5 appearance-none xl:text-xl rounded ml-1 text-xs">
            //                     <option value="">Genres</option>
            //                     <option value="aksi">Aksi</option>
            //                     <option value="anak-anak">Anak-anak</option>
            //                     <option value="anime">Anime</option>
            //                     <option value="britania">Britania</option>
            //                     <option value="drama">Drama</option>
            //                     <option value="fantasi">Fantasi</option>
            //                     <option value="kejahatan">Kejahatan</option>
            //                     <option value="kdrama">KDrama</option>
            //                     <option value="komedi">Komedi</option>
            //                     <option value="petualangan">Petualangan</option>
            //                     <option value="perang">Perang</option>
            //                     <option value="romantis">Romantis</option>
            //                     <option value="sains">Sains</option>
            //                 </select>
            //             </div>

            //             <img src={imgUrl} alt="Film cover gagal"  className="text-white rounded-lg w-24 h-36 xl:h-96 xl:w-60"/>
            //         </div>
            // </>
            <div className="shrink-0 relative">
                <button className="absolute xl:mt-80 xl:ml-48 mt-28 ml-14" onClick={Ontrigger}><img src={vdotIco} alt="3dot" className=""/></button>
                <select id="" className={`text-black border xl:px-1.5 flex items-center gap-2 absolute xl:mt-80 xl:ml-3 mt-28 appearance-none xl:text-xl rounded ml-1 ${classes.text2xs}`}>
                    <option value="">-Genres-</option>
                    <option value="aksi">Aksi</option>
                    <option value="anak-anak">Anak-anak</option>
                    <option value="anime">Anime</option>
                    <option value="britania">Britania</option>
                    <option value="drama">Drama</option>
                    <option value="fantasi">Fantasi</option>
                    <option value="kejahatan">Kejahatan</option>
                    <option value="kdrama">KDrama</option>
                    <option value="komedi">Komedi</option>
                    <option value="petualangan">Petualangan</option>
                    <option value="perang">Perang</option>
                    <option value="romantis">Romantis</option>
                    <option value="sains">Sains</option>
                </select>

                <div className={isVisible}>
                    <div className={`absolute ${classes.bgGray902} border xl:px-2 flex items-center gap-2 mt-24 ml-6 xl:mt-72 xl:ml-28 rounded`}>
                        <button className={`text-white xl:text-xl text-xs xl:p-0.5`} onClick={upDataFilm}>Add Favorit</button>
                    </div>
                </div>
                <img src={imgUrl} alt="Film cover gagal"  className="text-white rounded-lg w-24 h-36 xl:h-96 xl:w-60"/>
            </div>
        );  
    }

};

export default fCCard;  