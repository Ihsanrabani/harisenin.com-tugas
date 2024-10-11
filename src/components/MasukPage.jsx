import classes from "../styles/daftar.module.css";
import React from "react";
import "../index.css";

// components
import LogoText from "./LogoText.jsx";
import TitleText from "./TitleText.jsx";
import Input from "./input.jsx";
import SolidButton from "./SolidButton.jsx";
import SSOButton from "./SSOButton.jsx";

const MasukPage = () => {
  return (
    <div className={classes.bgDaftar}>
      <div
        className={`container h-screen flex justify-center items-center`}
      >
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

          <SolidButton labelBtn={"Masuk"} />
          <p className="text-gray-400 mt-1">Atau</p>
          <SSOButton labelBtn={"Masuk dengan Google"} />
        </div>
      </div>
    </div>
  );
};

export default MasukPage;
