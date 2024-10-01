import React from "react";
import styles from "./style.module.css";
import Section from "../../components/section";
import { Col, Container, Row } from "react-bootstrap";
import HeroSection from "../../components/heroSection";
import popu1 from "../../assets/images/cat1.png";
import popu2 from "../../assets/images/cat2.png";
import popu3 from "../../assets/images/cat3.png";
import popu4 from "../../assets/images/cat4.png";
import popu5 from "../../assets/images/cat5.png";
import popu6 from "../../assets/images/cat6.png";
import popu7 from "../../assets/images/cat7.png";
import popu8 from "../../assets/images/cat8.png";
import popu9 from "../../assets/images/cat9.png";
import popu10 from "../../assets/images/cat10.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import PopularCategories from "../../components/popularCategories";
import HeadingMain from "../../components/headingMain";
import BreadCrumb from "../../components/breadcrumb";
import { Link } from "react-router-dom";
import Products from "../../components/products";
import Image1 from "../../assets/images/product1.png";
import Image2 from "../../assets/images/product2.png";
import Image3 from "../../assets/images/product3.png";
import Image4 from "../../assets/images/product4.png";
import Image5 from "../../assets/images/brand1.png";
import Image6 from "../../assets/images/brand2.png";
import Image7 from "../../assets/images/brand3.png";
import Image8 from "../../assets/images/brand4.png";
import Image9 from "../../assets/images/brand5.png";
import Image10 from "../../assets/images/add1.png";
import Button from "../../components/button";

const productItem = [
  {
    id: 1,
    image: Image1,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: false,
    offer: true,
    // renge: true,
    // sold: true,
  },
  {
    id: 2,
    image: Image2,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: false,
    offer: true,
    // renge: true,
    // sold: true,
  },
  {
    id: 3,
    image: Image3,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: false,
    offer: true,
    // renge: true,
    // sold: true,
  },

  {
    id: 4,
    image: Image4,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: false,
    offer: true,
    // renge: true,
    // sold: true,
  },
  {
    id: 3,
    image: Image3,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: false,
    offer: true,
    // renge: true,
    // sold: true,
  },
  {
    id: 1,
    image: Image1,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: false,
    offer: true,
    // renge: true,
    // sold: true,
  },
  {
    id: 2,
    image: Image2,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: false,
    offer: true,
    // renge: true,
    // sold: true,
  },
  {
    id: 3,
    image: Image3,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: false,
    offer: true,
    // renge: true,
    // sold: true,
  },

  {
    id: 4,
    image: Image4,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: false,
    offer: true,
    // renge: true,
    // sold: true,
  },
  {
    id: 3,
    image: Image3,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: false,
    offer: true,
    // renge: true,
    // sold: true,
  },
  {
    id: 3,
    image: Image3,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: false,
    offer: true,
    // renge: true,
    // sold: true,
  },
  {
    id: 1,
    image: Image1,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: false,
    offer: true,
    // renge: true,
    // sold: true,
  },
  {
    id: 2,
    image: Image2,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: false,
    offer: true,
    // renge: true,
    // sold: true,
  },
  {
    id: 3,
    image: Image3,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: false,
    offer: true,
    // renge: true,
    // sold: true,
  },

  {
    id: 3,
    image: Image3,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: false,
    offer: true,
    // renge: true,
    // sold: true,
  },

  {
    id: 4,
    image: Image4,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: false,
    offer: true,
    // renge: true,
    // sold: true,
  },
];
const breadPages = [
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "Product",
    path: "/product",
  },
];
const popularCategories = [
  {
    id: 1,
    img: popu1,
    title: "Gaming",
  },
  {
    id: 2,
    img: popu2,
    title: "Sport Equip",
  },
  {
    id: 3,
    img: popu3,
    title: "Kitchen",
  },
  {
    id: 4,
    img: popu4,
    title: "Robot Cleaner",
  },
  {
    id: 5,
    img: popu5,
    title: "Mobiles",
  },
  {
    id: 6,
    img: popu6,
    title: "Office",
  },
  {
    id: 7,
    img: popu7,
    title: "Cameras",
  },
  {
    id: 8,
    img: popu8,
    title: "Computers",
  },
  {
    id: 9,
    img: popu9,
    title: "Televisions",
  },
  {
    id: 10,
    img: popu10,
    title: "Audios",
  },
  {
    id: 11,
    img: popu10,
    title: "Audios",
  },
  {
    id: 12,
    img: popu10,
    title: "Audios",
  },
];
const ProductPage = () => {
  return (
    <>
      <BreadCrumb items={breadPages} />
      <Section>
        <HeroSection />
      </Section>
      <Section>
        <Container className={styles.pg_cateProduct}>
          <Row>
            <Col lg={12}>
              <HeadingMain title={"POPULAR CATEGORIES"} />
              <div className={styles.pg_categories}>
                <Swiper
                  modules={[Autoplay, Pagination]}
                  slidesPerView={10}
                  spaceBetween={20}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    425: { slidesPerView: 3 },
                    768: { slidesPerView: 5 },
                    1024: { slidesPerView: 7 },
                  }}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  className="mySwiper">
                  {popularCategories.map((item, i) => (
                    <SwiperSlide>
                      <PopularCategories
                        key={i}
                        popular1={item.img}
                        title={item.title}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row className={`${styles.firstrow1} gy-4`}>
            <Col lg={3} md={6} sm={12}>
              <div className={styles.categories_filter}>
                <h6>categories</h6>
                <div className={styles.cf_btn}>
                  <Link>
                    <button> All Categories</button>
                  </Link>
                </div>
                <p>Cell Phones & Tablets</p>
                <ul>
                  <li>
                    <Link>All</Link>
                  </li>{" "}
                  <li>
                    <Link>Gaming</Link>
                  </li>{" "}
                  <li>
                    <Link>Sport Equip</Link>
                  </li>{" "}
                  <li>
                    <Link>Kitchen</Link>
                  </li>{" "}
                  <li>
                    <Link>Robot Cleaner</Link>
                  </li>{" "}
                  <li>
                    <Link>Mobiles</Link>
                  </li>{" "}
                  <li>
                    <Link>Office</Link>
                  </li>{" "}
                  <li>
                    <Link>Cameras</Link>
                  </li>{" "}
                  <li>
                    <Link>Computers</Link>
                  </li>{" "}
                  <li>
                    <Link>Televisions</Link>
                  </li>{" "}
                  <li>
                    <Link>Audios</Link>
                  </li>{" "}
                </ul>
              </div>
            </Col>
            <Col lg={9} md={6} sm={12}>
              <div className={styles.categories_productTitle}>
                <HeadingMain title={"BEST SELLER IN THIS CATEGORY"} />
              </div>
              {/* <Row> */}
              <div className={styles.cp_product}>
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  slidesPerView={4}
                  spaceBetween={20}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    425: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 4 },
                  }}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  onInit={(swiper) => {
                    swiper.el.addEventListener("mouseenter", () => {
                      swiper.autoplay.stop();
                    });
                    swiper.el.addEventListener("mouseleave", () => {
                      swiper.autoplay.start();
                    });
                    document
                      .querySelector(`.${styles.prev}`)
                      .addEventListener("click", () => {
                        swiper.slidePrev();
                      });
                    document
                      .querySelector(`.${styles.next}`)
                      .addEventListener("click", () => {
                        swiper.slideNext();
                      });
                  }}
                  className="mySwiper">
                  {productItem.slice(0, 5).map((value, index) => (
                    <SwiperSlide>
                      <Products
                        key={index}
                        Img={value.image}
                        title={value.title}
                        priceOrignal={value.priceOrignal}
                        priceOld={value.priceOld}
                        installment={value.installment}
                        wishlist={value.wishlist}
                        rated={value.rated}
                        offer={value.offer}
                        renge={value.renge}
                        sold={value.sold}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button className={styles.prev}>prev</button>
                <button className={styles.next}>next</button>
              </div>
              {/* </Row> */}
            </Col>
          </Row>
          <Row className={styles.secondrow2}>
            <Col lg={3} md={6} sm={12}>
              <div className={styles.categories_filter1}>
                <div className={styles.cf1_title}>
                  <h6>categories</h6>
                  <Button title={"Reset All"} btnStyle="text" />
                </div>
                <div className={styles.cf1_color}>
                  <span>Min: $45.00 </span>
                  <span>10.9 inch </span>
                  <span>Color: </span>
                  <span>128GB </span>
                </div>
                <div className={styles.cf1_brands}>
                  <strong>By Brands</strong>
                  <input type="text" />
                </div>
                <div className={styles.cf1_logoImg}>
                  <div className={styles.cf1l_Img1}>
                    <input type="checkbox" />
                    <span>
                      <img src={Image5} />
                      (14)
                    </span>
                  </div>
                  <div className={styles.cf1l_Img1}>
                    <input type="checkbox" />
                    <span>
                      <img src={Image6} />
                      (14)
                    </span>
                  </div>
                  <div className={styles.cf1l_Img1}>
                    <input type="checkbox" />
                    <span>
                      <img src={Image7} />
                      (14)
                    </span>
                  </div>
                  <div className={styles.cf1l_Img1}>
                    <input type="checkbox" />
                    <span>
                      <img src={Image8} />
                      (14)
                    </span>
                  </div>
                  <div className={styles.cf1l_Img1}>
                    <input type="checkbox" />
                    <span>
                      <img src={Image9} />
                      (14)
                    </span>
                  </div>
                </div>
                <div className={styles.cf1_price}>
                  <strong>By Price</strong>
                  <div className={styles.cf1p_range}></div>
                  <div className={styles.cf1p_priceLowMix}>
                    <p className={styles.max_p1}>
                      <span>$</span>
                      <input type="number" />
                    </p>
                    <p>
                      <span style={{ fontSize: "20px", fontWeight: "800" }}>
                        -
                      </span>
                    </p>
                    <p className={styles.max_p2}>
                      <span>$</span>
                      <input type="number" />
                    </p>
                    <button>GO</button>
                  </div>
                </div>
                <div className={styles.cf1_rating}>
                  <strong>By Rating</strong>
                  <div className={styles.cf1rcheck}>
                    <input type="checkbox" />
                    <span>★★★☆☆(52)</span>
                  </div>
                  <div className={styles.cf1rcheck}>
                    <input type="checkbox" />
                    <span>★★★☆☆(24)</span>
                  </div>
                  <div className={styles.cf1rcheck}>
                    <input type="checkbox" />
                    <span>★★★☆☆(5)</span>
                  </div>
                  <div className={styles.cf1rcheck}>
                    <input type="checkbox" />
                    <span>★★★☆☆(1)</span>
                  </div>
                </div>
                <div className={styles.cf1_screenSize}>
                  <strong>By Screen Size</strong>
                  <span>7” & Under</span>
                  <span>7.1” - 8.9”</span>
                  <span>9” - 10.9”</span>
                  <span>11” & Greater</span>
                </div>
                <div className={styles.cf1_colorPiker}>
                  <strong>By Color</strong>
                  <span style={{ background: " #A42A2A" }}></span>
                  <span style={{ background: "#2F557B" }}></span>
                  <span style={{ background: "#439ABB" }}></span>
                  <span style={{ background: "#222222" }}></span>
                  <span style={{ background: " #ffffff" }}></span>
                  <span style={{ background: " #1aba1a" }}></span>
                  <span style={{ background: " #696969" }}></span>
                  <span style={{ background: " #534898" }}></span>
                </div>
                <div className={styles.cf1_memory}>
                  <strong>By Memory</strong>
                  <div className={styles.cf1m_gb}>
                    <input type="checkbox" />
                    <span>12GB (4)</span>
                  </div>{" "}
                  <div className={styles.cf1m_gb}>
                    <input type="checkbox" />
                    <span>8GB (3)</span>
                  </div>{" "}
                  <div className={styles.cf1m_gb}>
                    <input type="checkbox" />
                    <span>6GB (12)</span>
                  </div>{" "}
                  <div className={styles.cf1m_gb}>
                    <input type="checkbox" />
                    <span>4GB (6)</span>
                  </div>{" "}
                  <div className={styles.cf1m_gb}>
                    <input type="checkbox" />
                    <span>3GB (7)</span>
                  </div>
                </div>
                <div className={styles.cf1_condition}>
                  <strong>By Conditions</strong>
                  <div className={styles.cf1c_con}>
                    <input type="checkbox" />
                    <span>New (21)</span>
                  </div>
                  <div className={styles.cf1c_con}>
                    <input type="checkbox" />
                    <span>Like New (2)</span>
                  </div>
                  <div className={styles.cf1c_con}>
                    <input type="checkbox" />
                    <span>Open Box (38)</span>
                  </div>
                </div>
              </div>
              <div className={styles.cf_imagebottom}>
                <img src={Image10} />
              </div>
            </Col>
            <Col lg={9} md={6} sm={12}>
              <div className={styles.categories_productTitle2}>
                <div className={styles.cpt2_productFilter}>
                  <div className={styles.cpt2p_results}>
                    <strong> 1 - 40 </strong>
                    <span>of 120 results</span>
                  </div>
                  <div className={styles.cpt2p_showItem}>
                    <span>Show item</span>
                    <p>
                      <span>24</span>
                      <span>48</span>
                      <span>72</span>
                    </p>
                  </div>
                  <div className={styles.cpt2p_default}>
                    <span>Show item</span>
                    <select>
                      <option>Default</option>
                    </select>
                  </div>
                  <div className={styles.cpt2p_viewAll}>
                    <Button title={"VIEW ALL"} btnStyle="text" />
                  </div>
                </div>
                <Row className="gy-5">
                  {productItem.map((value, index) => (
                    <Col lg={3}>
                      <Products
                        key={index}
                        Img={value.image}
                        title={value.title}
                        priceOrignal={value.priceOrignal}
                        priceOld={value.priceOld}
                        installment={value.installment}
                        wishlist={value.wishlist}
                        rated={value.rated}
                        offer={value.offer}
                        renge={value.renge}
                        sold={value.sold}
                      />
                    </Col>
                  ))}
                </Row>
                <div className={styles.paginationProductItems}>
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>...</li>
                    <li>20</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};
export default ProductPage;
