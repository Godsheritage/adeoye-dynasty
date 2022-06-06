import "./input.scss";
import React from "react";
import { useReducer } from "react";
import { inputTypes } from "../../../types";
import { validate } from "../../utils/validators";

const Input: React.FC<inputTypes> = ({
  className,
  placeholder,
  element,
  type,
  errorText,
  style,
  value,
  name,
  validators,
}) => {
  const validationReducer: any = (State: any, Action: any) => {};

  const initialState: any = {
    inputs: {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  };

  const [state, Dispatch] = useReducer(validationReducer, initialState);


  const inputHandler = (e:any) => {
    Dispatch()

    

  }

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
          onChange={inputHandler}
        />
      </div>
    );
  }
  return <textarea className={className} placeholder={placeholder}></textarea>;
};

export default Input;
