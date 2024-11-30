import React from "react";
import classes from "../styles/home.module.css";
import "../index.css";

// FILM COVER
import image4 from "../pages/homePage/filmCover/Mobile/film_cover4_m.png";
import image5 from "../pages/homePage/filmCover/Mobile/film_cover5_m.png";
import image6 from "../pages/homePage/filmCover/Mobile/film_cover6_m.png";
import image7 from "../pages/homePage/filmCover/Mobile/film_cover7_m.png";
import image8 from "../pages/homePage/filmCover/Mobile/film_cover8_m.png";
import image9 from "../pages/homePage/filmCover/Mobile/film_cover9_m.png";
import image10 from "../pages/homePage/filmCover/Mobile/film_cover10_m.png";
import image11 from "../pages/homePage/filmCover/Mobile/film_cover11_m.png";
import image12 from "../pages/homePage/filmCover/Mobile/film_cover12_m.png";
import image13 from "../pages/homePage/filmCover/Mobile/film_cover13_m.png";
import image14 from "../pages/homePage/filmCover/Mobile/film_cover14_m.png";
import image15 from "../pages/homePage/filmCover/Mobile/film_cover15_m.png";
import image16 from "../pages/homePage/filmCover/Mobile/film_cover16_m.png";
import image17 from "../pages/homePage/filmCover/Mobile/film_cover17_m.png";
import image18 from "../pages/homePage/filmCover/Mobile/film_cover18_m.png";
import image19 from "../pages/homePage/filmCover/Mobile/film_cover19_m.png";
import image20 from "../pages/homePage/filmCover/Mobile/film_cover20_m.png";
import image21 from "../pages/homePage/filmCover/Mobile/film_cover21_m.png";
import image22 from "../pages/homePage/filmCover/Mobile/film_cover22_m.png";
import image23 from "../pages/homePage/filmCover/Mobile/film_cover23_m.png";
import image24 from "../pages/homePage/filmCover/Mobile/film_cover24_m.png";

const images = {
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
};


const FilmCoverCard = ({imgUrl}) => {

    let imageSrc = images[imgUrl]

    return (
        

        <div className="shrink-0 relative">
            <img src={imageSrc} alt="Film cover gagal"  className="text-white rounded-lg w-24 h-auto xl:h-96 xl:w-60"/>
        </div>
    );  
};

export default FilmCoverCard;