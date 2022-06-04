import "./input.scss";
import React from "react";
import { inputTypes } from "../../../types";

const Input: React.FC<inputTypes> = ({
  className,
  placeholder,
  element,
  type,
  errorText
}) => {
  if (element === "input") {
    return (
      <div className="search">
        <input className={className} placeholder={placeholder} type={type} />
      </div>
    );
  }
  return <textarea className={className} placeholder={placeholder}></textarea>;
};

export default Input;
