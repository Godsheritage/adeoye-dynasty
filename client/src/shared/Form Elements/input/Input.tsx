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
  // value,
  name,
  validators,
  id,
  onInput,
}) => {
  // reducer function
  const validationReducer: reducerType["validationReducer"] = (
    state: inputReducerState,
    action: actionTypes
  ) => {
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          value: action.val,
          isValid: validate(action.val, action.validators),
        };

      case "TOUCH":
        return {
          ...state,
          isTouched: true,
        };

      default:
        return state;
    }
  };

  const initialState: inputReducerState = {
    value: "",
    isValid: false,
    isTouched: false,
  };

  const [inputState, dispatch] = useReducer(validationReducer, initialState);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE", val: e.target.value, validators });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH", val: "", validators });
  };

  useEffect(() => {
    onInput(id, inputState.value, inputState.isValid);
  }, [id, inputState.value, inputState.isValid, onInput]);

  if (element === "input") {
    return (
      <div className="search">
        <input
          className={ (!inputState.isValid && inputState.isTouched) ? `${className} is-invalid` : className}
          placeholder={placeholder}
          type={type}
          style={style}
          value={inputState.value}
          name={name}
          onChange={inputHandler}
          onBlur={touchHandler}
        />
        {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
      </div>
    );
  }
  return (
    <textarea
      className={className}
      placeholder={placeholder}
      value={inputState.value}
      onBlur={touchHandler}
    ></textarea>
  );
};

export default Input;
