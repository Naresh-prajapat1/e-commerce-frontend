import React, { useState } from "react";
import styles from "./style.module.css";
import WishlistIcon from "../../icons/wishlist";
import CartIcon from "../../icons/cart";
import Button from "../button";
import CartItem from "./cartItem";
import { Link } from "react-router-dom";

const SiteBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={styles.sitebar}>
        <button onClick={handleOpen}>
          <CartIcon />
        </button>
        <span>2</span>
      </div>
      {open && (
        <div className={styles.site_bar_add}>
          <div className={styles.sba_wrapper}>
            <div className={styles.sbaw_title}>
              <h2>Shopping</h2>
              <div className={styles.sbawt_count}>(2)</div>
              <Button
                title={"close"}
                btnStyle={"outline"}
                type={"submit"}
                onClick={handleClose}
              />
            </div>
            <div className={styles.sba_content}>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
            <div className={styles.sba_footer}>
              <Link to={"/checkOut"} className={styles.sbaaf_btn1}>
                Checkout
              </Link>
              <Link to={"/card"} className={styles.sbaaf_btn1}>
                View Cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default SiteBar;
