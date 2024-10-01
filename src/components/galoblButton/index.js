import React from "react";
import styles from "./style.module.css";
const GaloblButton = ({ icon = false, title }) => {
  return (
    <div className={styles.galobl_button}>
      {icon ? <span></span> : ""}
      {title}
    </div>
  );
};
export default GaloblButton;
