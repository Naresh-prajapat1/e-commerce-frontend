import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import HeadingMain from "../headingMain";
import Button from "../button";
import StarIcon from "../../icons/star";
import image1 from "../../assets/images/blog1_1.png";
import image2 from "../../assets/images/blog1_2.png";
import image3 from "../../assets/images/blog1_3.png";
import { Link } from "react-router-dom";
const Testimonial = () => {
  return (
    <div className={styles.testimonial}>
      <Container>
        <Row className="gy-4">
          <Col lg={6}>
            <div className={styles.t_just_lending}>
              <div className={styles.tjl_title}>
                <HeadingMain title={"Just Lending"} />
                <Button title={"VIEW ALL"} btnStyle="text" arrow={true} />
              </div>
              <div className={styles.tjl_product}>
                <div className={styles.tjlp_image}>
                  <img src={image1} />
                </div>
                <div className={styles.tjlp_title}>
                  <h6>
                    How to choose size of Television fit to your living room
                  </h6>
                  <small>
                    45 Minutes ago in <span>Experience</span>
                  </small>
                </div>
              </div>
              <div className={styles.tjl_product}>
                <div className={styles.tjlp_image}>
                  <img src={image2} />
                </div>
                <div className={styles.tjlp_title}>
                  <h6>
                    Introduce New Generation of Eluxtro Washing Machine 2023
                  </h6>
                  <small>
                    2 Days ago in <span>Technology</span>
                  </small>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.t_bestSelling}>
              <div className={styles.tb_title}>
                <HeadingMain title={"Best Selling Speakers"} />
              </div>
              <div className={styles.tb_detials}>
                <h6>
                  <span>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </span>
                  Fast shipping and flexiable price!
                </h6>
                <p>
                  I used to have experience shopping on much platform as Amozon,
                  Eboy, Esto, etc. And see that Swoo Market really great. It’ll
                  be my 1st choice for any shopping experience. Competitive
                  price, fast shipping and support 24/7. Extremely recommended!
                </p>
                <div className={styles.tb_user}>
                  <div className={styles.tbu_user_img}>
                    <img src={image3} />
                    <div className={styles.tui_name}>
                      <h6>
                        Drake N. <span>Verified Buyer</span>
                      </h6>
                      <span>Brooklyn, Los Angeles</span>
                    </div>
                  </div>
                  <div className={styles.tbu_user_detials}>
                    <Link to={"/"}>Marshall Standmore Speaker / Black</Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Testimonial;
