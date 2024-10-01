import React from "react";
import styles from "./style.module.css";
import productImages from "../../assets/images/product7.png";
import { Link } from "react-router-dom";
import HeartIcon from "../../icons/heart";
import StarIcon from "../../icons/star";
import WishlistIcon from "../../icons/wishlist";
import Heart2Icon from "../../icons/heart2";

const Products = ({
  Img,
  title,
  priceOrignal,
  priceOld,
  installment,
  wishlist,
  offer,
  rated,
  renge,
  sold,
  height,
  width,
  id,
}) => {
  return (
    <div
      className={styles.products}
      style={{ width: `${width}px`, height: `${height}px` }}>
      <div className={styles.p_wrapper}>
        <div className={styles.pw_installment}>
          <div className={styles.pwi_insta}>
            {installment ? <span>0% Installment</span> : ""}
          </div>
          {wishlist ? (
            <div className={styles.pwi_insta1}>
              <HeartIcon />
            </div>
          ) : (
            <div className={styles.pwi_insta11}>
              <Heart2Icon />
            </div>
          )}
        </div>
        <div className={styles.pw_image}>
          <Link to={`singleProduct/${id}`}>
            <img src={Img} alt="product Image" />
          </Link>
        </div>
        <div className={styles.pw_content}>
          <div className={styles.pw_bgcolor}>
            <div className={styles.pwc_off}>
              {offer ? <span className={styles.po1}>15% OFF</span> : ""}
              {rated ? <span className={styles.po2}>TOP RATED</span> : ""}
            </div>
            <div className={styles.pwc_proName}>
              <Link to={"/"}>{title}</Link>
            </div>
            <div className={styles.pwc_rating}>
              <span>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </span>
              <span style={{ marginLeft: "10px" }}>(5)</span>
            </div>
          </div>
          <div className={styles.pwc_price}>
            <span>${priceOrignal} </span>
            <del>{priceOld}</del>
          </div>
          {renge ? <div className={styles.pwc_range}></div> : ""}
          {sold ? <div className={styles.pwc_sold}>Sold: 24 / 80</div> : ""}
        </div>
      </div>
    </div>
  );
};
export default Products;
