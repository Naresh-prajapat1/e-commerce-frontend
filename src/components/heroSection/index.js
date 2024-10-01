import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const HeroSection = () => {
  return (
    <div className={styles.hero_section}>
      <Container>
        <Row className="gy-4">
          <Col lg={8}>
            <Swiper
              modules={[Autoplay, Pagination]}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                dynamicBullets: true,
              }}
              className="mySwiper">
              <SwiperSlide>
                <div className={styles.hs_sonoImg}>
                  <div className={styles.hss_content}>
                    <h2>
                      EKO 40" <br /> Android <br /> TV
                    </h2>
                    <p>
                      Smart Full HD <br /> Android TV with <br /> Google
                      Assistant
                    </p>
                    <Button title={"Shop Now"} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.hs_sonoImg}>
                  <div className={styles.hss_content}>
                    <h2>
                      EKO 40" <br /> Android <br /> TV
                    </h2>
                    <p>
                      Smart Full HD <br /> Android TV with <br /> Google
                      Assistant
                    </p>
                    <Button title={"Shop Now"} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.hs_sonoImg}>
                  <div className={styles.hss_content}>
                    <h2>
                      EKO 40" <br /> Android <br /> TV
                    </h2>
                    <p>
                      Smart Full HD <br /> Android TV with <br /> Google
                      Assistant
                    </p>
                    <Button title={"Shop Now"} />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col lg={4}>
            <div className={styles.hs_fanImg}>
              <div className={styles.hsf_content}>
                <h3>Humidifying Fan</h3>
                <p>From $299</p>
              </div>
              <div className={styles.hsf_btn}>
                <Button title={"Discover Now"} btnStyle="outline" />
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "30px" }} className="gy-4">
          <Col lg={6}>
            <div className={styles.hs_miniImg}>
              <div className={styles.hsm_content}>
                <h3>
                  iPad mini <br /> 2022
                </h3>
                <p>Mega Power in mini size</p>
                <Button title={"Shop Now"} btnStyle="fill1" />
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className={styles.hs_airImg}>
              <div className={styles.hsa_content}>
                <h4>
                  Air <br /> Purifier
                </h4>
                <p>from</p>
                <span>$169</span>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className={styles.hs_anatico}>
              <div className={styles.hsana_content}>
                <p>Washing Machine</p>
                <h4>Anatico Max 2</h4>
                <Button title={"Shop Now"} btnStyle="outline" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
