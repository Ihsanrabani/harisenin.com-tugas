import classes from "../../styles/daftar.module.css";
import {React, useState} from "react";
import "../../index.css";
import SBm from "../../styles/SolidButton.module.css";
import { Link, useNavigate } from "react-router-dom";
import MasukPage from "../masukPage/MasukPage.jsx";

// components
import LogoText from "../../components/LogoText.jsx";
import TitleText from "../../components/TitleText.jsx";
import Input from "../../components/input.jsx";
import SSOButton from "../../components/SSOButton.jsx";


const DaftarPage = () => {

  const navigate = useNavigate();

  let [arrayData, setArray] = useState([]); // init array object
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const addData = () => {
    if (password !== password2){
      alert("Konfimasi password salah, coba lagi!")
    } else {

      const existingUser = arrayData.some(user => user.username === username);
      if (existingUser) {
        alert("Username sudah digunakan!");
        return;
      }
      const newData = {username: username, password: password}

      setArray([...arrayData, newData]);

      const storedData = JSON.parse(localStorage.getItem("users")) || [];
      localStorage.setItem("users", JSON.stringify([...storedData, newData]));

      // Navigasi ke halaman login dan kirim data
      console.log({arrayData} + "INI DI PROSES DI PAGE DAFTAR")
      navigate('/masuk', { state: { users: [...arrayData, newData] }} );
    }
  }
  return (
    <div className={classes.bgDaftar}>
      <div
        className={`container h-screen flex justify-center items-center p-5`}
      >
        <div className={`${classes.bgBlackDaftar} h-auto ${classes.wmin} ${classes.wmax} blur-cust px-8 py-7 flex flex-col justify-center items-center`}>
          <LogoText />
          <TitleText title={"Daftar"} subtitle={"Selamat datang"} />
          <Input type="text" placeHolder="Masukkan Username" label="Username" onChange={(e) => {setUsername(e.target.value)}}/>
          <Input type="password" placeHolder="Masukkan Kata Sandi" label="Kata Sandi"  onChange={(e) => {setPassword(e.target.value)}}/>
          <Input type="password" placeHolder="Konfirmasi Kata Sandi" label="Konfirmasi Kata Sandi" onChange={(e) => {setPassword2(e.target.value)}}/>
          <div className="w-full mt-2">
            <p className="text-white text-left">
              Sudah punya akun? <Link to="/masuk" className="font-bold">Masuk</Link>
            </p>
          </div>

          <button onClick={addData} className={`border border-white ${SBm.bgGrayBTN} ${SBm.borderGrayBTN} text-center text-white w-full py-3 rounded-full mt-10`}>
            Daftar
          </button>
          <p className="text-gray-400 mt-1">Atau</p>
          <SSOButton labelBtn={"Daftar dengan Google"} />
        </div>
      </div>
    </div>
  );
};

export default DaftarPage;
