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
  onFocus,
  name,
  validators,
  id,
  onInput,
  divClass,
  value
}) => {


  // Reducer function
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


  // initial state
  const initialState: inputReducerState = {
    value: "",
    isValid: false,
    isTouched: false,
  };

  const [inputState, dispatch] = useReducer(validationReducer, initialState);


  const inputHandler: any = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <div className={`search ${divClass}`}>
        <input
          className={
            !inputState.isValid && inputState.isTouched
              ? `${className} is-invalid`
              : className
          }
          placeholder={placeholder}
          type={type}
          style={style}
          value={inputState.value || value}
          name={name}
          onChange={inputHandler}
          onBlur={touchHandler}
          onFocus={onFocus}
          
        />
        {!inputState.isValid && inputState.isTouched && (
          <p className="text-danger">{errorText}</p>
        )}
      </div>
    );
  }
  return (
    <div>
      <textarea
        className={
          !inputState.isValid && inputState.isTouched
            ? `${className} is-invalid`
            : className
        }
        placeholder={placeholder}
        value={inputState.value || value}
        onBlur={touchHandler}
        onChange={inputHandler}
      ></textarea>
      {!inputState.isValid && inputState.isTouched && (
        <p className="text-danger">{errorText}</p>
      )}
    </div>
  );
};

export default Input;
