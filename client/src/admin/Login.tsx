import { useContext } from "react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../shared/Form Elements/buttons/Buttons";
import Input from "../shared/Form Elements/input/Input";
// import GoogleLogo from "../assets/img/Google.png";
// import { contextTypes, signUpTypes, SIGN_IN_VALIDATION_TYPES } from "../types";
// import ProductContext from "../context/ProductContext";
// import Input from "../shared/form elements/input/Input";
// import { EMAIL_REQUIRED, PASSWORD_REQUIRED } from "../shared/util/validation";

const LogIn: React.FC = () => {
  const navigate = useNavigate() 
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

  // const buttonVariants = {
  //   visible: {
  //     scale: 0.95,
  //     color: "#333",
  //     backgroundColor: "#fff",
  //     border: "3px solid #F51167",
  //     transition: { duration: 0.7, ease: "easeInOut" },
  //   },
  // };

  //submit form
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate('/dashboard')
    // const credentials = {
    //   email,
    //   password,
    // };
    // await signUsersIn(credentials);
  };

  return (
    <motion.div
      className="container"
      variants={defaultVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="form w-50 d-flex flex-column">
        <h1 className="text-center pb-2">Login</h1>
        <form className=" d-flex flex-column" onSubmit={handleSubmit}>
          <div className="my-3">
            <Input
              element="input"
              type="email"
              className="form-control"
              placeholder="Email"
              errorText="please enter a valid email"
              // validators={[EMAIL_REQUIRED()]}
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
          <Button
            element="button"
            className="contact-btn align-self-center mt-3 w-50 "
            disabled={false}
          >
            Sign In
          </Button>
          <div className="my-3">
            <a href="/auth/google">
              {/* <img src={GoogleLogo} className="googleLogo" alt="" /> */}
            </a>
          </div>
          <Button
            element="link"
            to="/signup"
            className="card-link"
            text=" Don't have an account? Sign up"
          ></Button>
        </form>
      </div>
    </motion.div>
  );
};

export default LogIn;
