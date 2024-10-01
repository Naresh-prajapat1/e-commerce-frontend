import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import WishlistIcon from "../../icons/wishlist";
import image1 from "../../assets/images/single1.png";
import image2 from "../../assets/images/single4.png";
import image3 from "../../assets/images/single2.png";
import image4 from "../../assets/images/single3.png";
import image5 from "../../assets/images/single5.png";
import image6 from "../../assets/images/single6.png";
import image7 from "../../assets/images/single7.png";
import image8 from "../../assets/images/single8.png";
import image9 from "../../assets/images/single9.png";
import HeartIcon from "../../icons/heart";
import { Link } from "react-router-dom";
import Button from "../button";
import Heart2Icon from "../../icons/heart2";
import TwitterIcon from "../../icons/twitter";
import FacebookIcon from "../../icons/facebook";
import InstagramIcon from "../../icons/instagram";
import YoutubeIcon from "../../icons/youtube";
import BeIcon from "../../icons/be";
import ShoppingCarIcon from "../../icons/shoppingCar";

const SingleProduct = () => {
  return (
    <div className={styles.single_product}>
      <Container className={styles.sp_bgcolor}>
        <Row className="gy-4">
          <Col lg={4} md={12}>
            <div className={styles.sp_images}>
              <div className={styles.spi_new}>
                <span>New</span>
                <span>
                  <HeartIcon />
                </span>
              </div>
              <div className={styles.spi_productImage}>
                <img src={image1} alt="product" />
              </div>
              <div className={styles.spi_ProductItems}>
                <ul>
                  <li>
                    <img src={image2} alt="prduct" />
                  </li>
                  <li>
                    <img src={image3} alt="prduct" />
                  </li>
                  <li>
                    <img src={image4} alt="prduct" />
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={8} md={12}>
            <Row className="gy-4">
              <Col lg={8} md={12}>
                <div className={styles.sp_description}>
                  <h4>Pinnapple Macbook Pro 2022 M1 / 512GB Dark Grey</h4>
                  <h3>$579.00</h3>
                  <ul>
                    <li>
                      Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
                    </li>
                    <li> DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
                    <li>
                      Commanding Power Design: Twin 16+1+2 Phases Digital VRM
                    </li>
                  </ul>
                  <div className={styles.spd_free}>
                    <Link>Free Shopping</Link>
                  </div>
                  <div className={styles.spd_inStock}>
                    <span></span>
                    <span> In stock</span>
                  </div>
                  <label>qty</label>
                  <div className={styles.spd_productCount}>
                    <div className={styles.spdp_count}>
                      <button>-</button>
                      <input type="number" value={"1"} />
                      <button>+</button>
                    </div>
                    <Button title={"ADD TO CART"} />
                    <div className={styles.spdp_wishlist}>
                      <Heart2Icon />
                    </div>
                  </div>
                  <div className={styles.spd_checkout}>
                    <small>Guaranteed Safe Checkout</small>
                    <img src={image5} />
                  </div>
                  <div className={styles.spd_sctage}>
                    <p>
                      <strong>SKU: </strong> ABC025168
                    </p>
                    <p>
                      <strong>Category: </strong> Cell Phones & Tablets
                    </p>
                    <p>
                      <strong>Tags: </strong> Laptop, Macbook, Computer, M1
                    </p>
                  </div>
                  <div className={styles.spd_socialIcon}>
                    <ul>
                      <li>
                        <Link>
                          <TwitterIcon />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FacebookIcon />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <InstagramIcon />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <YoutubeIcon />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <BeIcon />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={12}>
                <div className={styles.sp_cartright}>
                  <div className={styles.spc_brand}>
                    <p>
                      <span>Brand:</span>Sonex
                    </p>
                    <div className={styles.spc_brandLogo}>
                      <img src={image6} alt="" />
                    </div>
                  </div>
                  <div className={styles.spc_yourCart}>
                    <h4>Your Cart</h4>
                    <div className={styles.spcy_product}>
                      <img />
                      <div className={styles.spcyp_title}>
                        <p>Pinnaeple Macbook Pro 2022 M1/ 512GB</p>
                        <span>3 x $579.00</span>
                      </div>
                      <span>x</span>
                    </div>
                    <div className={styles.spcy_subTotal}>
                      <span>Sub Total:</span>
                      <strong>$1,737.00</strong>
                    </div>
                    <div className={styles.spcy_btn}>
                      <Button title={"VIEW CART"} btnStyle="fill1" />
                      <Button title={"CHECKOUT"} />
                    </div>
                  </div>
                  <div className={styles.spc_ships}>
                    <span>
                      <ShoppingCarIcon />
                    </span>
                    <span>Ships from</span>
                    <span> United States</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={12}></Col>
        </Row>
      </Container>
      <Container className={styles.sp_bgcolor1}>
        <Row>
          <Col lg={12}>
            <div className={styles.discription_ra}>
              <div className={styles.dr_heading}>
                <li>description</li>
                <li>reviews (5)</li>
                <li>additional information</li>
              </div>
              <div className={styles.dr_discription}>
                <p>
                  Built for ultra-fast performance, the thin and lightweight
                  Samsung Galaxy Tab S2 goes anywhere you go. Photos, movies and
                  documents pop on a crisp, clear Super AMOLED display.
                  Expandable memory lets you enjoy more of your favorite
                  content. And connecting and sharing between all your Samsung
                  devices is easier than ever. Welcome to life with the
                  reimagined Samsung Galaxy Tab S2. Watch thev world come to
                  life on your tablet's Super AMOLED display * . With deep
                  contrast, rich colors and crisp details, you won't miss a
                  thing
                </p>
                <img src={image7} alt="" />
                <li>
                  * The Galaxy Tab S2’s 4 : 3 ratio display provides you with an
                  ideal environment for performing office tasks.
                </li>
              </div>
              <div className={styles.dr_bottomDes}>
                <h6>From the manufacturer</h6>
                <p>
                  Dive into the blockbuster movies you can't wait to see. Switch
                  between your favorite apps quickly and easily. The new and
                  improved octa-core processor gives you the power and speed you
                  need to see more and do more. Expand your tablet's memory from
                  32GB to up to an additional 128GB and enjoy more of your
                  favorite music, photos, movies and games on the go with a
                  microSD card. With Quick Connect, start a show on your Smart
                  TV and, with the touch of a button, take it with you by moving
                  it to your Galaxy Tab S2.
                </p>
                <p>
                  Or send videos and photos from your tablet screen to your TV
                  screen to share with everyone in the room. Work effortlessly
                  between your Samsung tablet and Samsung smartphone with
                  SideSync. Quickly drag and drop photos between devices. And
                  even respond to a call from your smartphone right on your
                  tablet screen.
                </p>
                <div className={styles.dbd_images}>
                  <img src={image8} alt="" />
                  <img src={image9} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default SingleProduct;
