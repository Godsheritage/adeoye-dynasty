import "./login.scss";
import { useCallback, useContext, useReducer } from "react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../shared/Form Elements/input/Input";
import Button from "../../../shared/Form Elements/buttons/Buttons";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../../shared/utils/validators";
import {
  actionTypes,
  formActionTypes,
  initialReducerState,
  reducerType,
} from "../../../types";

const LogIn: React.FC = () => {
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
    state: initialReducerState,
    action: formActionTypes
  ) => {
    switch (action.type) {
      case "INPUT_CHANGE":
        let formIsValid = false;
        for (const inputId in state.inputs) {
          if (inputId === action.inputId) {
            formIsValid = formIsValid && action.isValid;
          } else {
            formIsValid = formIsValid && state.isValid;
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

  const [state, dispatch] = useReducer(formReducer, initialState);

  //submit form
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const InputHandler = useCallback(
    (id: string, value: string, isValid: boolean) => {
      dispatch({ type: "INPUT_CHANGE", inputId: id, value, isValid });
    },
    [dispatch]
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
                  type="email"
                  className="form-control input"
                  placeholder="Email"
                  errorText="please enter a valid email"
                  validators={[VALIDATOR_EMAIL()]}
                  id="email"
                  onInput={InputHandler}
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
                  onInput={InputHandler}
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
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default LogIn;
