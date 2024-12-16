import React from "react";
import classes from "../styles/SolidButton.module.css";
import googleLogo from '../assets/icons/google_logo.png';

const SSOButton = ({ labelBtn }) => {
  return (
    <button className={`border border-white flex items-center justify-center gap-2 bg-transparent ${classes.borderGrayBTN} text-white w-full py-3 rounded-full mt-1`}>
        <img src={googleLogo} alt="" width={20} className=""/>

        {labelBtn}
    </button>
  );
};

export default SSOButton;
