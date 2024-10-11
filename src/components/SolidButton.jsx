import React from "react";
import classes from'../styles/SolidButton.module.css'

const SolidButton = ({labelBtn}) => {
  return (
    <button className={`border border-white ${classes.bgGrayBTN} ${classes.borderGrayBTN} text-white w-full py-3 rounded-full mt-10`}>
        {labelBtn}
    </button>
  );
};

export default SolidButton;
