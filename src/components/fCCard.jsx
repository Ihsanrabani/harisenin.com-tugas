import React, {useEffect} from "react";
import classes from "../styles/home.module.css";
import "../index.css";
import plusIco from "../assets/icons/plus.png"
import addPlIco from "../assets/icons/addPL.png"
import useApi from "../store/useApi";
import useDataFilm from "../store/useDataFilm";
import usePlaylistData from "../store/usePlaylistData";



const fCCard = ({id, imgUrl, WTB, WTR}) => {

    const { filmDatas, setFilmDatas } = useApi();

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

    if (WTB === true && WTR === false) {
        return (
            <div className="shrink-0 relative">
                
                <p className={`text-white absolute ml-2 ${classes.text2xs} rounded-full mt-2 ${classes.latoBold} p-1 ${classes.bgBlue901}`}>Episode Baru</p>
                <button className={`absolute xl:mt-80 xl:ml-48 mt-28 ml-14`} onClick={upDataFilm}><img src={plusIco} alt="Plus icon" className="w-7 xl:w-10"/></button>
                <button className={`absolute xl:mt-80 xl:ml-2 mt-28 ml-2`} onClick={upPlaylistData}><img src={addPlIco} alt="Plus icon" className="w-7 xl:w-10"/></button>
                <img src={imgUrl} alt="Film cover gagal" className="text-white rounded-lg w-24 h-36 xl:h-96 xl:w-60"/>
            </div>
        );  
    } else if (WTB === false && WTR === true) {
        return (
        <div className="shrink-0 relative">
            <p className={`absolute text-white ${classes.text2xs} xl:text-sm ${classes.bgRed901} p-0.5 xl:p-1 rounded-tr rounded-bl ${classes.mlCust} text-center`}>Top <br/>10</p>
            <button className={`absolute xl:mt-80 xl:ml-48 mt-28 ml-14`} onClick={upDataFilm}><img src={plusIco} alt="Plus icon" className="w-7 xl:w-10"/></button>
            <button className={`absolute xl:mt-80 xl:ml-2 mt-28 ml-2`} onClick={upPlaylistData}><img src={addPlIco} alt="Plus icon" className="w-7 xl:w-10"/></button>
            <img src={imgUrl} alt="Film cover gagal"  className="text-white rounded-lg w-24 h-36 xl:h-96 xl:w-60"/>
        </div>
        );  
    } else {
        return (
            <div className="shrink-0 relative">
                <button className={`absolute xl:mt-80 xl:ml-48 mt-28 ml-14`} onClick={upDataFilm}><img src={plusIco} alt="Plus icon" className="w-7 xl:w-10"/></button>
                <button className={`absolute xl:mt-80 xl:ml-2 mt-28 ml-2`} onClick={upPlaylistData}><img src={addPlIco} alt="Plus icon" className="w-7 xl:w-10"/></button>
                <img src={imgUrl} alt="Film cover gagal"  className="text-white rounded-lg w-24 h-36 xl:h-96 xl:w-60"/>
            </div>
        );  
    }

};

export default fCCard;  