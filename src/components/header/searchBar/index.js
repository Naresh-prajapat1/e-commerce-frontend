import React, { useState } from "react";
import styles from "./style.module.css";
import { Container } from "react-bootstrap";
import Logo from "../../logo";
import Search from "../../search";
import Wishlist from "../../wishlist";
import SiteBar from "../../siteBar";
import CallIcon from "../../../icons/call";
import Location from "../../location";
import HumburgerIcon from "../../../icons/humbrger";
import MenuItem from "../../menuItem";
const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.search_bar}>
      <Container>
        <div className={styles.sb_content}>
          <div className={styles.sb_logo}>
            <Logo />
          </div>
          <div className={styles.sb_search}>
            <Search />
          </div>
          <div className={styles.sb_helpline}>
            <div className={styles.sbh_icon}>
              <CallIcon />
            </div>
            <div className={styles.sbh_number}>
              <span>Hotline 24/7</span>
              <p>(025) 3686 25 16</p>
            </div>
          </div>
          <div className={styles.sb_location}>
            <Location />
          </div>
          <div className={styles.sb_wishlist}>
            <Wishlist />
          </div>

          <div className={styles.sb_wishlist1}>
            <div className={styles.humburder} onClick={handleToggle}>
              <HumburgerIcon />
              <div
                className={`${styles.hum_menuItem} ${
                  open ? styles.openMenu : ""
                }`}>
                <MenuItem />
              </div>
            </div>
            <SiteBar />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default SearchBar;
