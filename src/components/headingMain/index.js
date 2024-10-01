import React from "react";
import styles from "./style.module.css";
const HeadingMain = ({ title }) => {
  return <h2 className={styles.main_hading}>{title}</h2>;
};
export default HeadingMain;
