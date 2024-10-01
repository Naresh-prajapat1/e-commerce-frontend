import React from "react";

import styles from "./style.module.css";
import HeadingMain from "../headingMain";
import { Col, Row } from "react-bootstrap";
import image from "../../assets/images/banner.png";
import Button from "../button";
const searchingItems = [
  {
    title: "Vacuum Robot",
  },
  {
    title: "Bluetooth Speaker",
  },
  {
    title: "Oled TV",
  },
  {
    title: "Security Camera",
  },
  {
    title: "Macbook M1",
  },
  {
    title: "Smart Washing Machine",
  },
  {
    title: "iPad Mini 2023",
  },
  {
    title: "PS5",
  },
  {
    title: "Earbuds",
  },
  {
    title: "Air Condition Inverter",
  },
  {
    title: "Flycam",
  },
  {
    title: "Electric Bike",
  },
  {
    title: "Gaming Computer",
  },
  {
    title: "Smart Air Purifier",
  },
  {
    title: "Apple Watch",
  },
];

const TrendingSearch = () => {
  return (
    <div className={styles.trending_search}>
      <div className={styles.ts_warpper}>
        <div className={styles.tsw_productItem}>
          <HeadingMain title={"Trending Search"} />
          <div className={styles.tswp_searching}>
            {searchingItems.map((value, index) => (
              <div className={styles.tswps_items} key={index}>
                {value.title}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.tsw_banner}>
          <Row>
            <Col lg={3}>
              <div className={styles.tswb_pre_order}>
                <h4>Pre Order</h4>
                <p>be the first to own</p>
                <h5>From $399</h5>
              </div>
            </Col>
            <Col lg={3}>
              <div className={styles.tswb_image}>
                <img src={image} />
              </div>
            </Col>
            <Col lg={4}>
              <div className={styles.tswb_watch}>
                <h4>
                  Opplo Watch Sport <br /> Series 8
                </h4>
                <h3>A healthy leap ahead</h3>
              </div>
            </Col>
            <Col lg={2}>
              <div className={styles.tswb_btn}>
                <Button title={"Discover Now"} btnStyle="outline" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default TrendingSearch;
