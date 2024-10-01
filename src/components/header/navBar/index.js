import React from "react";
import styles from "./style.module.css";
import { Container } from "react-bootstrap";
import MenuItem from "../../menuItem";
import DropDown from "../../dropdown";
import SellingIcon from "../../../icons/selling";
import CartIcon from "../../../icons/cart";

const country = [
  {
    id: 1,
    name: "Indian",
  },
  {
    id: 2,
    name: "USA",
  },
  {
    id: 3,
    name: "Canada",
  },
  {
    id: 4,
    name: "UK",
  },
];
const language = [
  {
    id: 1,
    language: "English",
  },
  {
    id: 2,
    language: "Spanish",
  },
  {
    id: 3,
    language: "French",
  },
  {
    id: 4,
    language: "German",
  },
];

const NavBar = () => {
  const handleCountry = (i) => {
    console.log(i);
  };
  const handleLang = (i) => {
    console.log(i);
  };
  return (
    <div className={styles.nav_bar}>
      <Container>
        <div className={styles.nb_menu_bar}>
          <div className={styles.nmb_items}>
            <MenuItem />
          </div>
          <div className={styles.nb_right}>
            <div className={styles.nbr_selling}>
              <div className={styles.nbrs_sell}>
                <span>
                  <SellingIcon />
                </span>
                <div className={styles.nbrss_title}> Sell on Swoo</div>
              </div>
              <div className={styles.nbrs_order}>
                <span>
                  <CartIcon />
                </span>
                <div className={styles.nbrso_title}> Order Tracking</div>
              </div>
              <div className={styles.nbrs_recently}>
                <div className={styles.nbrsr_title}>Recently Viewed </div>
              </div>
            </div>
            <div className={styles.nbr_select}>
              <div className={styles.nbrs_county}>
                <DropDown
                  country={country}
                  keyName={"name"}
                  placeHolder={"Select Country"}
                  onSelect={handleCountry}
                />
              </div>
              <div className={styles.nbrs_language}>
                <DropDown
                  country={language}
                  keyName={"language"}
                  placeHolder={"Eng"}
                  onSelect={handleLang}
                  logo={true}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
