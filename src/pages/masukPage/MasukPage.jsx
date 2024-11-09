import classes from "../../styles/daftar.module.css";
import React from "react";
import "../../index.css";
import SBm from "../../styles/SolidButton.module.css";
import { Link } from "react-router-dom";

// components
import LogoText from "../../components/LogoText.jsx";
import TitleText from "../../components/TitleText.jsx";
import Input from "../../components/input.jsx";
import SSOButton from "../../components/SSOButton.jsx";

const MasukPage = () => {
  return (
    <div className={classes.bgDaftar}>
      <div className={`container h-screen flex justify-center items-center`}>
        <div
          className={` ${classes.bgBlackDaftar} h-auto ${classes.wmin} ${classes.wmax}   px-8 py-7 flex flex-col justify-center items-center `}
        >
          <LogoText />
          <TitleText title={"Masuk"} subtitle={"Selamat datang kembali!"} />
          <Input type="text" placeHolder="Masukkan Username" label="Username" />
          <Input
            type="password"
            placeHolder="Masukkan Kata Sandi"
            label="Kata Sandi"
          />

          <div className="w-full mt-2 flex justify-between">
            <p className="text-white">
              Belum punya akun? <b>Daftar</b>
            </p>
            <p className="text-white">Lupa kata sandi?</p>
          </div>

          <Link
            to="/home"
            className={`border border-white ${SBm.bgGrayBTN} ${SBm.borderGrayBTN} text-center text-white w-full py-3 rounded-full mt-10`}
          >
            Masuk
          </Link>
          <p className="text-gray-400 mt-1">Atau</p>
          <SSOButton labelBtn={"Masuk dengan Google"} />
        </div>
      </div>
    </div>
  );
};

export default MasukPage;
