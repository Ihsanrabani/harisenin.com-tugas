import classes from "../../styles/daftar.module.css";
import React, {useState, useEffect} from "react";
import "../../index.css";
import SBm from "../../styles/SolidButton.module.css";
import {Link, useLocation, useNavigate,} from "react-router-dom";

// components
import LogoText from "../../components/LogoText.jsx";
import TitleText from "../../components/TitleText.jsx";
import Input from "../../components/input.jsx";
import SSOButton from "../../components/SSOButton.jsx";

const MasukPage = () => {


  const navigate = useNavigate();

  const location = useLocation();
  const [users, setUsers] = useState(location.state?.users || []);

  useEffect(() => {
    if (!users.length) {
      const storedUsers = JSON.parse(localStorage.getItem("users"));
      if (storedUsers) {
        setUsers(storedUsers);
        }
      }
  }, [users]);

  const [usernameI, setUsername] = useState("")
  const [passwordI, setPassword] = useState("")

  const auth = () => {
    const user = users.find(user => user.username === usernameI && user.password === passwordI);
    if (user) {
      navigate('/home');
      localStorage.setItem("userLoggedIn", true);
    } else {
      alert("Username atau password salah!");
    }
  };

  return (
    <div className={classes.bgDaftar}>
      <div className={`container h-screen flex justify-center items-center`}>
        <div className={`${classes.bgBlackDaftar} h-auto ${classes.wmin} ${classes.wmax} px-8 py-7 flex flex-col justify-center items-center`}>
          <LogoText />
          <TitleText title={"Masuk"} subtitle={"Selamat datang kembali!"} />
          <Input type="text" placeHolder="Masukkan Username" label="Username" onChange={(e) => {setUsername(e.target.value)}} />
          <Input type="password" placeHolder="Masukkan Kata Sandi" label="Kata Sandi" onChange={(e) => {setPassword(e.target.value)}}/>
          
          <div className="w-full mt-2 flex justify-between">
            <p className="text-white">
              Belum punya akun? <Link to={"/"} className="font-bold">Daftar</Link>
            </p>
            <p className="text-white">Lupa kata sandi?</p>
          </div>
          <button onClick={auth} className={`border border-white ${SBm.bgGrayBTN} ${SBm.borderGrayBTN} text-center text-white w-full py-3 rounded-full mt-10`}>Masuk</button>
          <p className="text-gray-400 mt-1">Atau</p>
          <SSOButton labelBtn={"Masuk dengan Google"} />
        </div>
      </div>
    </div>
  );
};

export default MasukPage;
