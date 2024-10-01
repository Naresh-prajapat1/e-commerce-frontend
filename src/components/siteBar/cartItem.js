import React from "react";
import styles from "./style.module.css";
import img1 from "../../assets/images/bestdeel1.png";
import Button from "../button";
const CartItem = () => {
  return (
    <>
      <div className={styles.cart_item}>
        <div className={styles.ci_image}>
          <img src={img1} alt="phone" />
        </div>
        <div className={styles.ci_content}>
          <h2>Air Purifier with True HEPA H14 Filter</h2>
          <p>Price : $23</p>
          <div className={styles.cic_quantity}>
            <button className={styles.cicq_btn}>-</button>
            <input type="number" value={1} />
            <button>+</button>
          </div>
        </div>
        <div className={styles.ci_btn}>
          <Button title={"Remove"} />
        </div>
      </div>
    </>
  );
};
export default CartItem;
