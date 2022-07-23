import "./login.scss";
import { useCallback, useReducer } from "react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Link } from "react-router-dom";
import FamilyContext from "../../../context/FamilyContext";
import Family from "../../../Family/pages/Family";
import Input from "../../../shared/Form Elements/input/Input";
import Button from "../../../shared/Form Elements/buttons/Buttons";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../../shared/utils/validators";
import {
  actionTypes,
  contextTypes,
  formActionTypes,
  initialReducerState,
  inputHandlerType,
  reducerType,
} from "../../../types";

const LogIn: React.FC = () => {
  const { signIn } = useContext(FamilyContext) as contextTypes;
  const [loginMsg, setLoginMsg] = useState<string>("");
  const navigate = useNavigate();

  // motion variants
  const defaultVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: { type: "spring", stiffnes: 2 },
    },
  };

  // Reducer function
  const formReducer: reducerType["FormReducer"] = (
    state: any,
    action: formActionTypes
  ) => {
    switch (action.type) {
      case "INPUT_CHANGE":
        let formIsValid = true;
        for (const inputId in state.inputs) {
          if (inputId === action.inputId) {
            formIsValid = formIsValid && action.isValid;
          } else {
            formIsValid = formIsValid && state.inputs[inputId].isValid;
          }
        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.inputId]: { value: action.value, isValid: action.isValid },
          },
          isValid: formIsValid,
        };
      default:
        return state;
    }
  };

  // initial reducer state
  const initialState: initialReducerState = {
    inputs: {
      username: {
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

  const [state, dispatch] = useReducer(formReducer, initialState);

  //submit form
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = await signIn(
      state.inputs.username.value.toLowerCase(),
      state.inputs.password.value
    );
    setLoginMsg(response.message);
    if (response.message === "successfully logged in") {
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  };

  const inputHandler: inputHandlerType["inputHandler"] = useCallback(
    (id: string, value: string, isValid: boolean) => {
      dispatch({ type: "INPUT_CHANGE", inputId: id, value, isValid: isValid });
    },
    []
  );

  return (
    <motion.div
      className=""
      variants={defaultVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="login d-flex justify-content-center align-items-center">
        <div className="form d-flex justify-content-center align-items-center flex-column p-5 bg-white">
          <h3 className="text-center pb-2">Login</h3>
          <form className=" d-flex flex-column " onSubmit={handleSubmit}>
            <div className=" d-flex flex-column ">
              <div className="my-3">
                <Input
                  element="input"
                  type="text"
                  className="form-control input"
                  placeholder="Username"
                  errorText="username must be greater than 5 digits"
                  validators={[VALIDATOR_MINLENGTH(5)]}
                  id="username"
                  onInput={inputHandler}
                />
              </div>
              <div className="mb-3">
                <Input
                  element="input"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  errorText="password must be greater than 8 digits"
                  validators={[VALIDATOR_MINLENGTH(8)]}
                  id="password"
                  onInput={inputHandler}
                />
              </div>
            </div>
            <Button
              element="button"
              className="btn btn-primary align-self-center mt-3 w-50 "
              disabled={!state.isValid}
            >
              Sign In
            </Button>
            {loginMsg.length !== 0 && (
              <p className="text-center text-secondary pt-3">{loginMsg}</p>
            )}
            <Link to="/">
              <p>return to home</p>
            </Link>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default LogIn;
