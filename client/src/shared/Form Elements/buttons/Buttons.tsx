import React from "react";
import { ButtonTypes } from "../../../types";
import { Link } from "react-router-dom";

const Button: React.FC<ButtonTypes> = ({
  className,
  element,
  text,
  to,
  onClick,
  children,
}) => {
  if (element === "button") {
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
  return <Link to={to!}>{text}</Link>;
};

export default Button;
