import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import MessageIcon from "../../icons/message";
import Button from "../button";

const SubscribeBenner = () => {
  return (
    <div className={styles.subscribe_benner}>
      <Container>
        <Row className="g-4">
          <Col lg={6} md={12}>
            <div className={styles.sb_getOff}>
              <div className={styles.sbg_title}>
                <span>Subscribe</span>
                <span>
                  & Get <small>10% OFF</small> for first order
                </span>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className={styles.sb_email}>
              <div className={styles.sbe_input}>
                <span style={{ marginRight: "10px" }}>
                  <MessageIcon />
                </span>
                <input type="email" placeholder="Enter your email address" />
                <Button title={"SUBSCIBE"} btnStyle="fill1" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default SubscribeBenner;
