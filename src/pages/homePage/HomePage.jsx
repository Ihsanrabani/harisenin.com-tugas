import React, {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom";
import useApi from "../../store/useApi";
import getApi from "../../services/api/api.js"

// style
import "../../index.css";
import classes from "../../styles/home.module.css";
// img
import CHILL_logo from "../../assets/icons/CHILL_logo.png"
import avatar from "../../assets/icons/Avatar.png"
import infoIc from "../../assets/icons/info_ic.png"
import volumeIc from "../../assets/icons/volume_ic.png"

// components
import FCT from "../../components/fCCard.jsx"
import { use } from "react";


const HomePage = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));
    if (!userLoggedIn) {
      navigate('/masuk');
    }
  }, []);

  const [isVisible, setIsVisible] = useState("hidden")

  const Ontrigger =() => {
    setIsVisible(isVisible === "hidden" ? "block" : "hidden")
  }

  const logout = () => {
    console.log(JSON.stringify(localStorage.getItem("userLoggedIn")))
    localStorage.removeItem("userLoggedIn");
    navigate('/masuk');
  };

  const { filmDatas, setFilmDatas } = useApi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("sblm")
        const data = await getApi();
        setFilmDatas(data);
        console.log("Fetching Berhasil");
      } catch {
        console.error("Fetching gagalll");
      }
    };

    fetchData();
  }, [setFilmDatas]);
  
  // useEffect(() => {
  //   const apiDatas = getApi()
    
  //   try {
  //     const [filmDatas, setFilmDatas] = useApi()
  //     console.log("Fetched!")
  //     setFilmDatas(apiDatas)
  //   } catch {
  //     console.log("UnFetched!")
  //   }
  
  // })

  return (
    <div className={`${classes.bodyBg} box-border overflow-x-hidden`}>
      {/* Navbar */}
      <nav className={`${classes.bgGray902} h-16 flex py-1.5 flex items-center px-5`}>
        <div className="flex items-center xl:ml-16 gap-2">
          <img src={CHILL_logo} alt="Logo chill" width="17" className="h-5 w-auto" />
          <h1 className={`${classes.lsRegular} text-white text-2xl hidden xl:block xl:text-3xl`}>CHILL</h1>
        </div>

        <div className="flex text-center gap-4 m-4 mr-auto xl:ml-16 xl:gap-16">
          <a href="#" className={`text-white ${classes.latoRegular} text-sm xl:text-xl`}>Series</a>
          <a href="#" className={`text-white ${classes.latoRegular} text-sm xl:text-xl`}>Film</a>
          <a href="#" className={`text-white ${classes.latoRegular} text-sm xl:text-xl`}>Daftar Saya</a>
        </div>

        <div className="flex items-center gap-1 xl:mr-8 flex-col mt-4 self-start">
          <div className="flex">
            <img src={avatar} alt="avatar" className=" border rounded-full h-7 xl:h-10 mr-2" />
            <button onClick={Ontrigger}><svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-33 -33 396.00 396.00" xmlSpace="preserve" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="6.6"></g><g id="SVGRepo_iconCarrier"><path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path></g></svg></button>
          </div>
        
          <div className={isVisible}>
            <div className={`${classes.bgGray902} px-2 py-3 flex items-center gap-2`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z" fill="#3254FF"/>
              </svg>

              <h1 className={`${classes.textBlue9000}`}>Profil saya</h1>
            </div>

            <div className={`${classes.bgGray902} px-2 py-3 flex items-center gap-2`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27Z" fill="white"/>
              </svg>

              <h1 className="text-white">Ubah premium</h1>
            </div>

            <div className={`${classes.bgGray902} px-2 py-3 flex items-center gap-2 rounded`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5C3.89 3 3 3.89 3 5V9H5V5H19V19H5V15H3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 3.89 20.1 3 19 3ZM10.08 15.58L11.5 17L16.5 12L11.5 7L10.08 8.41L12.67 11H3V13H12.67L10.08 15.58Z" fill="white"/>
              </svg>


              <button className="text-white" onClick={logout}>Keluar</button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className={`${classes.bgImage1} xl:h-587 w-full flex items-end px-5 `}>
        <div className={`flex-col gap-3 ml-3 mb-5 `}>
          <div className={`${classes.maxWidthTexthero} mt-28`}>
            <h3 className={`${classes.latoBold} text-white text-2xl md:text-4xl`}>Duty After School</h3>
            <p className={`${classes.latoMedium} text-lg text-white overflow-hidden text-ellipsis line-clamp-2`}>
              Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
            </p>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex items-center">
              <button className={`text-white ${classes.bgMulai} py-1 px-3 rounded-full ${classes.latoBold}`}>Mulai</button>

              <div className={`${classes.bgGray903} flex items-center py-1 px-3 rounded-full gap-2`}>
                <img src={infoIc} alt="Info icon" width="20" height="20" />
                <p className={`text-white ${classes.latoBold}`}>Selengkapnya</p>
              </div>

              <p className={`${classes.latoBold} ${classes.textGray901} border p-1 rounded-full`}>18+</p>
            </div>

            <div className={`flex items-center p-1.5 rounded-full ${classes.borderGray901}`}>
              <img src={volumeIc} alt="Volume icon" width="20" height="20" />
            </div>
          </div>
        </div>
      </section>  


      {/*Melanjutkan tonton film*/}
      <section className="mt-4 ml-5 xl:mr-5">
          <h2 className={`mb-5 ${classes.latoBold} text-xl text-white xl:text-2xl gap-4 md:gap-6`}>Melanjutkan Tonton Film</h2>
          
          <div className={`flex gap-3 ${classes.horizontalScroll}`}>
            {/* JADIIN COMPONEN YG CARD FILM COVER!!! */}
              <div className={`${classes.bgSect2for1} rounded-lg flex items-end justify-between`}>
                  <h1 className={`${classes.latoBold} text-white text-xl ml-3 mb-2`}>Don't Look Up</h1>
                  <p className={`text-md ${classes.latoBold} mb-2 mr-2 text-white`}>★ 4.5/5</p>
              </div>                

              <div className={`${classes.bgSect2for2} rounded-lg flex items-end justify-between`}>  
                  <h1 className={`${classes.latoBold} text-white text-xl ml-3 mb-2`}>Doctor strange</h1>
                  <p className={`text-md ${classes.latoBold} mb-2 mr-2 text-white`}>★ 4.3/5</p>
              </div>

              <div className={`${classes.bgSect2for3} rounded-lg flex items-end justify-between`}>  
                  <h1 className={`${classes.latoBold} text-white text-xl ml-3 mb-2`}>Blue Lock</h1>
                  <p className={`text-md ${classes.latoBold} mb-2 mr-2 text-white`}>★ 4.6/5</p>
              </div>

              <div className={`${classes.bgSect2for4} rounded-lg flex items-end justify-between`}>  
                  <h1 className={`${classes.latoBold} text-white text-xl ml-3 mb-2`}>A Man Called Otto</h1>
                  <p className={`text-md ${classes.latoBold} mb-2 mr-2 text-white`}>★ 4.4/5</p>
              </div>

              <div className={`${classes.bgSect2for5} rounded-lg flex items-end justify-between`}>  
                  <h1 className={`${classes.latoBold} text-white text-xl ml-3 mb-2`}>The Batman</h1>
                  <p className={`text-md ${classes.latoBold} mb-2 mr-2 text-white`}>★ 4.2/5</p>
              </div>
          </div>
      </section>


      {/*Top Rating Film dan Series Hari ini*/}
      <section className="mt-3 ml-5">
          <h2 className={`${classes.latoBold} text-xl text-white mb-5 xl:text-2xl`}>Top Rating Film dan Series Hari ini</h2>
          
          <div className={`flex gap-3 ${classes.horizontalScroll} items-center`}>
            {filmDatas.slice(0, 8).map((poster) => (
              <FCT imgUrl={poster.filmPoster} WTB={poster.WTB} WTR={poster.WTR}/>
            ))}
            
          </div>
        </section>


      {/*Film Trending*/}
      <section className="mt-3 ml-5">
          <h2 className={`${classes.latoBold} text-xl text-white mb-5 xl:text-2xl`}>Film Trending</h2>
          
          <div className={`flex gap-3 ${classes.horizontalScroll} items-center`}>

            {filmDatas.slice(9, 17).map((poster) => (
              <FCT imgUrl={poster.filmPoster} WTB={poster.WTB} WTR={poster.WTR}/>
            ))}

          </div>
          
      </section>


      {/* Rilis Baru */}
      <section className="mt-3 ml-5">
          <h2 className={`${classes.latoBold} text-xl text-white mb-5 xl:text-2xl`}>Rilis Baru</h2>
          
          <div className={`flex gap-3 ${classes.horizontalScroll} items-center`}>
            {filmDatas.slice(18, 26).map((poster) => (
              <FCT imgUrl={poster.filmPoster} WTB={poster.WTB} WTR={poster.WTR}/>
            ))}
          </div>
          
      </section>

      <footer className={`${classes.borderTFooter} mt-10 h-auto`}>
        <div className="ml-5 mt-4 xl:py-5 xl:flex xl:justify-center xl:px-20">
            <div className="hidden xl:flex xl:justify-between xl:w-full">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1">
                    <img src={CHILL_logo} alt="Chill Logo" className="shrink-0 w-6 xl:w-8" width="23" height="auto" />
                    <h1 className={`text-white ${classes.londrinaSolidFont} text-2xl xl:text-3xl`}>Chill</h1>
                </div>

                <div className="mt-3">
                    <p className="text-gray-901 text-sm mb-8">&copy;2023 Chill All Rights Reserved</p>
                </div>
             </div>

             {/* ===================================== */}

              <div className="hidden xl:block">
                <div>
                    <p className={`${classes.latoBold} text-white text-base`}>Genre</p>
                    <div className="flex gap-5 mt-2">
                        <ul>
                            <li className={`${classes.textGray901} ${classes.latoMedium}`}>Aksi</li>
                            <li className={`mt-2 ${classes.textGray901} ${classes.latoMedium}`}>Anak-anak</li>
                            <li className={`mt-2 ${classes.textGray901} ${classes.latoMedium}`}>Anime</li>
                            <li className={`mt-2 ${classes.textGray901} ${classes.latoMedium}`}>Britania</li>
                        </ul>

                        <ul>
                            <li className={`${classes.textGray901} ${classes.latoMedium}`}>Drama</li>
                            <li className={`mt-2 ${classes.textGray901} ${classes.latoMedium}`}>
                                Fantasi Ilmiah & Fantasi
                            </li>
                            <li className={`mt-2 ${classes.textGray901} ${classes.latoMedium}`}>Kejahatan</li>
                            <li className={`mt-2 ${classes.textGray901} ${classes.latoMedium}`}>KDrama</li>
                        </ul>

                        <ul>
                            <li className={`${classes.textGray901} ${classes.latoMedium}`}>Komedi</li>
                            <li className={`mt-2 ${classes.textGray901} ${classes.latoMedium}`}>Petualangan</li>
                            <li className={`mt-2 ${classes.textGray901} ${classes.latoMedium}`}>Perang</li>
                            <li className={`mt-2 ${classes.textGray901} ${classes.latoMedium}`}>Romantis</li>
                        </ul>

                        <ul>
                            <li className={`${classes.textGray901} ${classes.latoMedium}`}>Sains & Alam</li>
                            <li className={`mt-2 ${classes.textGray901} ${classes.latoMedium}`}>Thriller</li>
                        </ul>
                    </div>
                </div>
              </div>

              <div>
                <p className={`${classes.latoBold} text-white text-base`}>Bantuan</p>
                <ul>
                    <li className={`${classes.textGray901} ${classes.latoMedium}`}>FAQ</li>
                    <li className={`mt-2 ${classes.textGray901} ${classes.latoMedium}`}>Kontak Kami</li>
                    <li className={`mt-2 ${classes.textGray901} ${classes.latoMedium}`}>Privasi</li>
                    <li className={`mt-2 ${classes.textGray901} ${classes.latoMedium}`}>Syarat & Ketentuan</li>
                </ul>
            </div>

            </div>
            <div className="flex flex-col xl:hidden">
              <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                      <img
                          src={CHILL_logo}
                          alt="Chill Logo"
                          className={`shrink-0 w-6 xl:w-8`}
                          width="23"
                          height="auto"
                      />
                      <h1 className={`text-white ${classes.londrinaSolidFont} text-2xl xl:text-3xl`}>Chill</h1>
                  </div>

                  <div className="mt-3">
                      <p className={`${classes.textGray901} text-sm mb-8`}>&copy;2023 Chill All Rights Reserved</p>
                  </div>
              </div>

              <div className="xl:hidden">
                  <div className="flex justify-between pr-5">
                      <p className={`${classes.latoMedium} text-white`}>Genre</p>
                      <span className={`${classes.latoBold} text-white text-xl`}>&gt;</span>
                  </div>

                  <div className="flex justify-between mt-1 pr-5">
                      <p className={`${classes.latoMedium} text-white`}>Bantuan</p>
                      <span className={`${classes.latoBold} text-white text-xl`}>&gt;</span>
                  </div>
              </div>
          </div>
        </div>
      </footer>                

    </div>
  );
};

export default HomePage;
