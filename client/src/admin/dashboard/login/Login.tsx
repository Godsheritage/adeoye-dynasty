import "./login.scss";
import { useContext } from "react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../shared/Form Elements/input/Input";
import Button from "../../../shared/Form Elements/buttons/Buttons";
// import GoogleLogo from "../assets/img/Google.png";
// import { contextTypes, signUpTypes, SIGN_IN_VALIDATION_TYPES } from "../types";
// import ProductContext from "../context/ProductContext";
// import Input from "../shared/form elements/input/Input";
// import { EMAIL_REQUIRED, PASSWORD_REQUIRED } from "../shared/util/validation";

const LogIn: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const { signUsersIn } = useContext(ProductContext) as contextTypes;

  const defaultVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: { type: "spring", stiffnes: 2 },
    },
  };

  //submit form
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate("/dashboard");
    // const credentials = {
    //   email,
    //   password,
    // };
    // await signUsersIn(credentials);
  };

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
                />
              </div>
              <div className="mb-3">
                <Input
                  element="input"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  errorText="password must be greater than 8 digits"
                  // validators={[PASSWORD_REQUIRED()]}
                />
              </div>
            </div>
            <Button
              element="button"
              className="btn btn-primary align-self-center mt-3 w-50 "
              disabled={false}
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
