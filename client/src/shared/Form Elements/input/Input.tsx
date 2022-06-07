import "./input.scss";
import React, { useEffect } from "react";
import { useReducer } from "react";
import {
  actionTypes,
  initialReducerState,
  inputTypes,
  validatioinRediucerType,
} from "../../../types";
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
  id,
  onInput,
}) => {
  const validationReducer: validatioinRediucerType["validationReducer"] = (
    state: initialReducerState,
    action: actionTypes
  ) => {
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
        };

      default:
        return state;
    }
  };

  const initialState: initialReducerState = {
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

  const [inputState, dispatch] = useReducer(validationReducer, initialState);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE", val: e.target.value, validators });
  };

  useEffect(() => {
    onInput(id, inputState.inputs.password.value, inputState.isValid);
  }, [id, inputState.inputs.password.value, inputState.isValid, onInput]);




  
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
