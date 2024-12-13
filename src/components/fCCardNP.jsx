import React, {useEffect} from "react";
import classes from "../styles/home.module.css";
import "../index.css";
import minusIco from "../assets/icons/minus.png"
import useApi from "../store/useApi";
import useDataFilm from "../store/useDataFilm";



const fCCardNP = ({id, imgUrl, WTB, WTR}) => {

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

    const { dataFilm, setDataFilm, clearDataFilm } = useDataFilm();

    const delData = () => {
        clearDataFilm()
    } 

    if (WTB === true && WTR === false) {
        return (
            <div className="shrink-0 relative">
                <p className={`text-white absolute ml-2 ${classes.text2xs} rounded-full mt-2 ${classes.latoBold} p-1 ${classes.bgBlue901}`}>Episode Baru</p>
                <img src={imgUrl} alt="Film cover gagal" className="text-white rounded-lg w-24 h-36 xl:h-96 xl:w-60"/>
            </div>
        );  
    } else if (WTB === false && WTR === true) {
        return (
        <div className="shrink-0 relative">
            <p className={`absolute text-white ${classes.text2xs} xl:text-sm ${classes.bgRed901} p-0.5 xl:p-1 rounded-tr rounded-bl ${classes.mlCust} text-center`}>Top <br/>10</p>
            <img src={imgUrl} alt="Film cover gagal"  className="text-white rounded-lg w-24 h-36 xl:h-96 xl:w-60"/>
        </div>
        );  
    } else {
        return (
            <div className="shrink-0 relative">
                <img src={imgUrl} alt="Film cover gagal"  className="text-white rounded-lg w-24 h-36 xl:h-96 xl:w-60"/>
            </div>
        );  
    }

};

export default fCCardNP;  