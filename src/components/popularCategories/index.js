import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
// import Cate1 from "../../assets/images/cat1.png";

const PopularCategories = ({ popular1, title }) => {
  return (
    <div className={styles.popular_cate}>
      <Link>
        <div className={styles.pc_img}>
          <img src={popular1} />
        </div>
        <div className={styles.pc_title}>{title}</div>
      </Link>
    </div>
  );
};
export default PopularCategories;
