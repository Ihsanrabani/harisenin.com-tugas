import classes from "../styles/daftar.module.css"
import React from "react"
import "../index.css"

// components
import LogoText from "./LogoText.jsx"
import TitleText from "./TitleText.jsx"
import Input from "./input.jsx"
import SolidButton from "./SolidButton.jsx"
import SSOButton from "./SSOButton.jsx"

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
            <Input
              type="text"
              placeHolder="Masukkan Username"
              label="Username"
            />
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

            <SolidButton labelBtn={"Daftar"} />
            <p className="text-gray-400 mt-1">Atau</p>
            <SSOButton labelBtn={"Daftar dengan Google"} />
          </div>
        </div>
      </div>
    );
};

export default DaftarPage