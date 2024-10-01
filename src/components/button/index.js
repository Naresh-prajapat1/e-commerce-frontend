import React from "react";
import styles from "./style.module.css";

const Button = ({ type, onClick, btnStyle = "fill", title, arrow = false }) => {
  return (
    <div className={styles.button}>
      <button
        className={`${styles.b_btn} ${styles[btnStyle]}`}
        type={type}
        onClick={onClick}>
        {title}
        {arrow ? <span></span> : ""}
      </button>
    </div>
  );
};
export default Button;
