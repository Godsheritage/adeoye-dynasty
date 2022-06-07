import "./input.scss";
import React, { useEffect } from "react";
import { useReducer } from "react";
import {
  actionTypes,
  inputReducerState,
  inputTypes,
  reducerType,
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
  const validationReducer: reducerType["validationReducer"] = (
    state: inputReducerState,
    action: actionTypes
  ) => {
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          value:action.val,
          isValid:validate(action.val, action.validators )
        };

      default:
        return state;
    }
  };

  const initialState: inputReducerState = {
    value: "",
    isValid: false,
  };

  const [inputState, dispatch] = useReducer(validationReducer, initialState);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE", val: e.target.value, validators });
  };

  useEffect(() => {
    onInput(id, inputState.value, inputState.isValid);
  }, [id, inputState.value, inputState.isValid, onInput]);

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
