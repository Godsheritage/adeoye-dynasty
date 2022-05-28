import React from "react";
import "./card.scss";

const Card: React.FC<any> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
