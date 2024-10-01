import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <>
      <div className={styles.top_bar}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.tb_title}>
                <div className={styles.tb_special}>Special</div>
                <div className={styles.tb_dicount}>
                  Get 10% <b>DISCOUNT</b> for first order
                </div>
                <div className={styles.tb_link}>
                  <Link to={"/login"}> Register Now</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default TopBar;
