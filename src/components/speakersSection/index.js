import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";
import Image from "../../assets/images/speaker1.png";
import Products from "../products";
import HeadingMain from "../headingMain";
import Speaker1 from "../../assets/images/speaker2.png";
import Speaker2 from "../../assets/images/speaker4.png";
import Speaker3 from "../../assets/images/speaker3.png";
const speakerSelling = [
  {
    Img: Speaker1,
    title: "Marshall Stanmore II Wireless Bluetooth Speaker",
    priceOrignal: "325.00 - $410.00",
    installment: true,
  },
  {
    Img: Speaker2,
    title: "Bose SoundLink III Speaker",
    priceOrignal: "149.00",
    rated: true,
  },
  {
    Img: Speaker3,
    title: "B&O Beolit 20 Powerful Portable Wireless Bluetooth",
    priceOrignal: "159.00",
  },
];
const SpeakersSection = () => {
  return (
    <div className={styles.speakers_section}>
      <Container>
        <Row className="gy-4">
          <Col lg={5} md={12} sm={12}>
            <div className={styles.ss_devialet}>
              <small>amazon award-winning speaker</small>
              <h3>
                Devialet Phantom
                <br /> II <span>Speaker</span>
              </h3>
              <div className={styles.ssd_price}>
                <small>
                  Starting at <br /> Price
                </small>
                <span>$1,590</span>
              </div>
              <div className={styles.ssd_image}>
                <img src={Image} />
              </div>
            </div>
          </Col>
          <Col lg={7} md={12} sm={12}>
            <div className={styles.ss_bestSellingSpeaker}>
              <div className={styles.ssb_title}>
                <HeadingMain title={"Best Selling Speakers"} />
              </div>
              <Row className="gy-3">
                {speakerSelling.map((item, index) => (
                  <Col
                    lg={4}
                    key={index}
                    md={6}
                    sm={12}
                    className={styles.speakerSelling_col}>
                    <Products
                      Img={item.Img}
                      title={item.title}
                      priceOrignal={item.priceOrignal}
                      installment={item.installment}
                      offer={item.offer}
                      rated={item.rated}
                      height={400}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default SpeakersSection;
