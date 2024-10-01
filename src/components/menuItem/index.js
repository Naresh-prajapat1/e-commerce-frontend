import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const MenuItem = ({}) => {
  return (
    <>
      <div className={styles.menu_item}>
        <ul>
          <li className={styles.mi_list}>
            <Link to={"/"}>Demos</Link>
          </li>
          <li className={styles.mi_list}>
            <Link to={"/about"}>Pages</Link>
          </li>
          <li className={styles.mi_list}>
            <Link to={"/productPage"}>Products</Link>
          </li>
          <li>
            <Link to={"/"}>Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default MenuItem;
