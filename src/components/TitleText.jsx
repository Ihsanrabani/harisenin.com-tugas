import React from "react";
import classes from "../styles/TitleText.module.css";
import "../index.css";

const TitleText = ({title, subtitle}) => {
  return (
    <div className="mt-3 text-center">
      <h1 className="text-white lato-bold text-2xl">{title}</h1>
      <p className="text-white text-base lato-regular">{subtitle}</p>
    </div>
  );
};

export default TitleText;
