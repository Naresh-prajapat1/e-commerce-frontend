import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
const Logo = ({ img = logoImg }) => {
  return (
    <>
      <Link>
        <img src={img} alt="please image not found" />
      </Link>
    </>
  );
};
export default Logo;
