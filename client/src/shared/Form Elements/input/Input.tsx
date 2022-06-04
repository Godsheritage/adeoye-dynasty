import "./input.scss";
import React from "react";
import { inputTypes } from "../../../types";

const Input: React.FC<inputTypes> = ({
  className,
  placeHolder,
  element,
  type,
}) => {
  if (element === "input") {
    return (
      <div className="search">
        <input className={className} placeholder={placeHolder} type={type} />
      </div>
    );
  }
  return <textarea className={className} placeholder={placeHolder}></textarea>;
};

export default Input;
