import React from "react";
import classes from "../styles/input.module.css";
import "../index.css";

const Input = ({label, placeHolder, type, onChange, value}) => {

    return (
      <div className={`${classes.wrapper} mt-5`}>
        <label className="text-white lato-medium">{label}</label>
        <input
          className="text-white rounded-2xl mt-1 p-2 w-auto bg-transparent border border-gray-500"
          type={type}
          placeholder={placeHolder}
          onChange={onChange}
          value={value}
        />
      </div>
    );
}
// bg-transparent p-2 rounded-full text-gray-500 border border-gray-500 lato-regular py-3.5 pl-5 text-base
;
export default Input;