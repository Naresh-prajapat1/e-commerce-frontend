import React, { children } from "react";
import styles from "./style.module.css";
const Section = ({ pt, pb, children, bgcolor = "white" }) => {
  return (
    <div
      className={`${styles.section} ${styles[bgcolor]} `}
      style={{ paddingTop: `${pt}px`, paddingBottom: `${pb}px` }}>
      {children}
    </div>
  );
};
export default Section;
