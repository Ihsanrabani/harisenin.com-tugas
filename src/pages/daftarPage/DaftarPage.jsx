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

const DaftarPage = () => {
  return (
    <div className={classes.bgDaftar}>
      <div
        className={`container h-screen flex justify-center items-center p-5`}
      >
        <div
          className={` ${classes.bgBlackDaftar} h-auto ${classes.wmin} ${classes.wmax}  blur-cust px-8 py-7 flex flex-col justify-center items-center`}
        >
          <LogoText />
          <TitleText title={"Daftar"} subtitle={"Selamat datang"} />
          <Input type="text" placeHolder="Masukkan Username" label="Username" />
          <Input
            type="password"
            placeHolder="Masukkan Kata Sandi"
            label="Kata Sandi"
          />
          <Input
            type="password"
            placeHolder="Konfirmasi Kata Sandi"
            label="Konfirmasi Kata Sandi"
          />

          <div className="w-full mt-2">
            <p className="text-white text-left">
              Sudah punya akun? <b>Masuk</b>
            </p>
          </div>

          <Link
            to="/masuk"
            className={`border border-white ${SBm.bgGrayBTN} ${SBm.borderGrayBTN} text-center text-white w-full py-3 rounded-full mt-10`}
          >
            Daftar
          </Link>
          <p className="text-gray-400 mt-1">Atau</p>
          <SSOButton labelBtn={"Daftar dengan Google"} />
        </div>
      </div>
    </div>
  );
};

export default DaftarPage;
