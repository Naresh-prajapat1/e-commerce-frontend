import React from "react";
import styles from "./style.module.css";
import TimingSell from "../../timingSell";
import { Col, Container, Row } from "react-bootstrap";

const OfferBar = () => {
  return (
    <div className={styles.offer_count}>
      <Container>
        <div className={styles.offer_bar}>
          <div className={styles.ob_title}>
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order
            in.
          </div>
          <div className={styles.ob_count}>
            <TimingSell />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default OfferBar;
