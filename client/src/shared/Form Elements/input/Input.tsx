import "./input.scss";
import React from "react";
import { inputTypes } from "../../../types";

const Input: React.FC<inputTypes> = ({
  className,
  placeholder,
  element,
  type,
  errorText,
  style,
  value,
  name
}) => {
  if (element === "input") {
    return (
      <div className="search">
        <input
          className={className}
          placeholder={placeholder}
          type={type}
          style={style}
          value={value}
          name={name}
        />
      </div>
    );
  }
  return <textarea className={className} placeholder={placeholder}></textarea>;
};

export default Input;
