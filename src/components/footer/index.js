import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import ShoppingCarIcon from "../../icons/shoppingCar";
import RefreshIcon from "../../icons/refresh";
import SecureIcon from "../../icons/secure";
import DedicatedIcon from "../../icons/dedicated";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/bottom1.png";
import image2 from "../../assets/images/bottom2.png";
import image3 from "../../assets/images/bottom3.png";
import image4 from "../../assets/images/bottom4.png";
import image5 from "../../assets/images/bottom5.png";
import DropDown from "../dropdown";
import TwitterIcon from "../../icons/twitter";
import FacebookIcon from "../../icons/facebook";
import InstagramIcon from "../../icons/instagram";
import YoutubeIcon from "../../icons/youtube";
import BeIcon from "../../icons/be";
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

const handleCountry = (i) => {
  console.log(i);
};
const handleLang = (i) => {
  console.log(i);
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.f_top}>
          <Row className="gy-5">
            <Col lg={3} md={6} sm={12}>
              <div className={styles.f_free_shipping}>
                <span>
                  <ShoppingCarIcon />
                </span>
                <span> Free Shipping over $99</span>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div
                className={styles.f_free_shipping}
                style={{ borderLeft: "1px solid #DEE2E6" }}>
                <span style={{ marginLeft: "15px" }}>
                  <RefreshIcon />
                </span>
                <span> 30 Days money back</span>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div
                className={styles.f_free_shipping}
                style={{ borderLeft: "1px solid #DEE2E6" }}>
                <span style={{ marginLeft: "15px" }}>
                  <SecureIcon />
                </span>
                <span> 100% Secure Payment</span>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div
                className={styles.f_free_shipping}
                style={{ borderLeft: "1px solid #DEE2E6" }}>
                <span style={{ marginLeft: "15px" }}>
                  <DedicatedIcon />
                </span>
                <span> 24/7 Dedicated Support</span>
              </div>
            </Col>
          </Row>
        </div>
        <hr />
        <div className={styles.f_bottom}>
          <Row className="gy-5">
            <Col lg={4} md={6} sm={12}>
              <div className={styles.fb_swoo}>
                <h6>Swoo - Online Electronic Market</h6>
                <div className={styles.fbshotline}>
                  <span>hotline 24/7</span>
                  <h5>(025) 3686 25 16</h5>
                </div>
                <div className={styles.fbs_address}>
                  257 Thatcher Road St, Brooklyn, Manhattan,
                  <br /> NY 10092 <br /> contact@swateletro.com
                </div>
                <div className={styles.fbs_socailicon}>
                  <ul>
                    <li>
                      <Link to={"/"}>
                        <TwitterIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <FacebookIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <InstagramIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <YoutubeIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <BeIcon />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={2} md={6} sm={12}>
              <div className={styles.fb_cetagories}>
                <h6>Top Categories</h6>
                <ul>
                  <li>
                    <Link to={"/"}>TV/Televisions</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Computers</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Laptops</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Mobiles & Tablets</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Audios</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Cameras</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Gadget</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Sport Equipments</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Office</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Smart Home</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={6} sm={12}>
              <div className={styles.fb_cetagories}>
                <h6>Company</h6>
                <ul>
                  <li>
                    <Link to={"/"}>About Swoo</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Contact</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Career</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Blog</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Sitemap</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Store Locations</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={6} sm={12}>
              <div className={styles.fb_cetagories}>
                <h6>Help Center</h6>
                <ul>
                  <li>
                    <Link to={"/"}>Customer Service</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Policy</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Trach Order</Link>
                  </li>
                  <li>
                    <Link to={"/"}>FAQs</Link>
                  </li>
                  <li>
                    <Link to={"/"}>My Account</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Product Support</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Sport Equipments</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={6} sm={12}>
              <div className={styles.fb_cetagories}>
                <h6>Partner</h6>
                <ul>
                  <li>
                    <Link to={"/"}>Become Seller</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Affiliate</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Advertise</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Partnership</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className={styles.footer_bottom}>
        <Container>
          <Row className="gy-5">
            <Col lg={4} md={6} sm={12}>
              <div className={styles.fb_reserved}>
                <p>
                  © 2024 <span>Shawonetc3</span> . All Rights Reserved
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className={styles.fb_company}>
                <ul>
                  <li>
                    <img src={image1} alt="company image" />
                  </li>
                  <li>
                    <img src={image2} alt="company image" />
                  </li>
                  <li>
                    <img src={image3} alt="company image" />
                  </li>
                  <li>
                    <img src={image4} alt="company image" />
                  </li>
                  <li>
                    <img src={image5} alt="company image" />
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className={styles.fb_select}>
                <span className={styles.fbs_drop}>
                  <DropDown
                    country={country}
                    keyName={"name"}
                    placeHolder={"USD"}
                    onSelect={handleCountry}
                  />
                </span>
                <span>
                  <DropDown
                    country={country}
                    keyName={"name"}
                    placeHolder={"Eng"}
                    onSelect={handleLang}
                    logo={true}
                  />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Footer;
