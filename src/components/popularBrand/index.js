import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../button";
const PopularBrand = () => {
  return (
    <div className={`${styles.popular_brand}`}>
      <Container>
        <Row className="gy-3">
          <Col lg={4}>
            <div className={styles.pb_hendset}>
              <small>Acelos 3d</small>
              <h6>
                VR Headset and <br /> Controllers
              </h6>
              <Button title={"Shop Now"} btnStyle="fill1" />
            </div>
          </Col>{" "}
          <Col lg={4}>
            <div className={styles.pb_hendset1}>
              <h6>
                massage chair <br /> Luxury
              </h6>
              <b>
                Fuka Relax Full Body <br /> Massage Chair
              </b>
              <Button title={"Shop Now"} btnStyle="outline" />
            </div>
          </Col>{" "}
          <Col lg={4}>
            <div className={styles.pb_hendset2}>
              <h5>OKODo</h5>
              <h6>
                hero 11+ <br />
                black
              </h6>
              <small>from</small>
              <p>$169</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default PopularBrand;
