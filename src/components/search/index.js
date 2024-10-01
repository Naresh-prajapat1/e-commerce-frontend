import React from "react";
import styles from "./style.module.css";
import SearchIcon from "../../icons/seaech";

const Search = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search anything..." />
      <div className={styles.s_serachicon}>
        <SearchIcon />
      </div>
    </div>
  );
};
export default Search;
