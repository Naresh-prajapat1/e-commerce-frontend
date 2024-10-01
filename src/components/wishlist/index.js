import React from "react";
import styles from "./style.module.css";
import WishlistIcon from "../../icons/wishlist";

const Wishlist = () => {
  return (
    <div className={styles.wishlist}>
      <button>
        <WishlistIcon />
      </button>
      <span>2</span>
    </div>
  );
};
export default Wishlist;
