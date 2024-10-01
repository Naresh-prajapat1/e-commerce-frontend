import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Section from "../../components/section";
import HeadingMain from "../../components/headingMain";
import Button from "../../components/button";
import PopularCategories from "../../components/popularCategories";
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
import HeroSection from "../../components/heroSection";
import Products from "../../components/products";
import Image1 from "../../assets/images/product7.png";
import Image3 from "../../assets/images/tee.png";
import TrendingSearch from "../../components/trendingSearch";
import PopularBrand from "../../components/popularBrand";
import SpeakersSection from "../../components/speakersSection";
import bestImg1 from "../../assets/images/bestseller1.png";
import bestImg2 from "../../assets/images/bestseller2.png";
import bestImg3 from "../../assets/images/bestseller3.png";
import bestImg4 from "../../assets/images/bestseller4.png";
import GaloblButton from "../../components/galoblButton";
import suggest1 from "../../assets/images/suggest1.png";
import suggest2 from "../../assets/images/suggest2.png";
import suggest3 from "../../assets/images/suggest3.png";
import suggest4 from "../../assets/images/suggest4.png";
import suggest5 from "../../assets/images/suggest5.png";
import suggest6 from "../../assets/images/suggest6.png";
import suggest7 from "../../assets/images/suggest7.png";
import suggest8 from "../../assets/images/suggest8.png";
import suggest9 from "../../assets/images/suggest9.png";
import suggest10 from "../../assets/images/suggest10.png";
import just1 from "../../assets/images/just1.png";
import just2 from "../../assets/images/just2.png";
import just3 from "../../assets/images/just3.png";
import just4 from "../../assets/images/bestseller1.png";
import just5 from "../../assets/images/just4.png";
import Testimonial from "../../components/testimonial";
import SubscribeBenner from "../../components/subscribebenner";
import Footer from "../../components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import product from "../../productData/product.json";
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
const productItem = [
  {
    id: 1,
    image: Image1,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: true,
    offer: true,
    renge: true,
    sold: true,
  },
  {
    id: 2,
    image: Image1,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: true,

    offer: true,
    renge: true,
    sold: true,
  },
];
const productItem2 = [
  {
    id: 3,
    image: Image1,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: true,
    offer: true,
    renge: true,
    sold: true,
    rated: true,
  },
  {
    id: 4,
    image: Image1,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: true,
    offer: true,
    renge: true,
    sold: true,
  },
  {
    id: 3,
    image: Image1,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: true,
    offer: true,
    renge: true,
    sold: true,
  },
  {
    id: 4,
    image: Image1,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: true,
    offer: true,
    renge: true,
    sold: true,
  },
];
const productItem1 = [
  {
    id: 3,
    image: Image3,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    installment: true,
    wishlist: true,
    offer: true,
    renge: true,
    sold: true,
    rated: true,
  },
];
const bestSeller = [
  {
    id: 1,
    image: bestImg1,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
  {
    id: 2,
    image: bestImg2,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
  {
    id: 3,
    image: bestImg3,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
  {
    id: 4,
    image: bestImg1,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
  {
    id: 5,
    image: bestImg4,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
];
const fillter = [
  {
    title: "Top 30",
  },
  {
    title: "Televisions",
  },
  {
    title: "PC Gaming",
  },
  {
    title: "Computers",
  },
  {
    title: "Cameras",
  },
  { title: "Gadgets" },
  { title: "Smart Home" },
  { title: "Sport Equipments" },
];
const fillter1 = [
  {
    title: " Recommend For You",
  },
  {
    title: " Top Best Seller",
  },
  {
    title: " Top Rated",
  },
  {
    title: "70% OFF",
  },
  {
    title: "50% OFF",
  },
  { title: "30% OFF" },
];
const bestSeller1 = [
  {
    id: 1,
    image: suggest1,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
  {
    id: 2,
    image: suggest2,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
  {
    id: 3,
    image: suggest3,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
  {
    id: 4,
    image: suggest4,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
  {
    id: 5,
    image: suggest5,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
  {
    id: 6,
    image: suggest6,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
  {
    id: 7,
    image: suggest7,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
  {
    id: 8,
    image: suggest8,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
  {
    id: 9,
    image: suggest9,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
  {
    id: 10,
    image: suggest10,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
];
const fillter2 = [
  {
    title: " TV/Televisions",
  },
  {
    title: " PC Gaming",
  },
  {
    title: "Computers",
  },
  {
    title: "Cameras",
  },
  {
    title: "Gadgets",
  },
  { title: "Smart Home" },
  { title: "Sport Equipments" },
];
const bestSeller2 = [
  {
    id: 1,
    image: just1,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
  {
    id: 2,
    image: just2,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
  {
    id: 3,
    image: just3,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
    rated: true,
  },
  {
    id: 4,
    image: just4,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
  {
    id: 5,
    image: just5,
    title: "Air Purifier with True HEPA H14 Filter",
    priceOrignal: "489.00 ",
    priceOld: "619.00",
  },
];
const Home = () => {
  return (
    <div className={styles.home}>
      <Section>
        <Container>
          <div className={styles.h_popular_categorie}>
            <HeadingMain title={"Popular Categories"} />
            <Button title={"View All"} btnStyle="text" arrow={true} />
          </div>
          <div className={styles.hp_popularCate}>
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
          <div className={styles.h_p_heroSection}>
            <HeroSection />
          </div>
        </Container>
      </Section>
      <Section pt={60}>
        <Container>
          <div className={styles.best_weekly_deel}>
            <div className={styles.bwd_title}>
              <HeadingMain title={"Best Weekly Deals"} />
              <div className={styles.expirestime}>
                <span>Expires in:</span>
                <span>-132 d :-9 h :-35 m :-45 s</span>
              </div>
            </div>
            <Row className="gy-3">
              <Col lg={2} md={6} sm={12} className={styles.popular_col1}>
                {product.slice(0, 2).map((value, index) => (
                  <Products
                    key={index}
                    Img={value.Img}
                    title={value.title}
                    priceOrignal={value.priceOrignal}
                    priceOld={value.priceOld}
                    installment={true}
                    wishlist={true}
                    rated={true}
                    offer={true}
                    renge={true}
                    sold={true}
                  />
                ))}
              </Col>
              <Col lg={6} md={12} className={styles.popular_col}>
                {productItem1.map((value, index) => (
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
                ))}
              </Col>
              <Col lg={4} md={6} sm={12} className={styles.popular_col2}>
                <Row className="gy-4">
                  {productItem2.map((value, index) => (
                    <Col lg={6} md={12} className={styles.popular_col1}>
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
              </Col>
              {/* <Col lg={2}>
                {productItem.map((value, index) => (
                  <Products
                    key={index}
                    Img={value.image}
                    title={value.title}
                    priceOrignal={value.priceOrignal}
                    priceOld={value.priceOld}
                    installment={value.installment}
                    wishlist={value.wishlist}
                  />
                ))}
              </Col> */}
            </Row>
            {/* <div className={styles.bwd_product}></div> */}
          </div>
        </Container>
      </Section>
      <Section pt={60} pb={60}>
        <Container>
          <TrendingSearch />
        </Container>
      </Section>
      <Section pb={60}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.best_seller}>
                <HeadingMain title={"Best Seller"} />
                <Button title={"VIEW ALL"} arrow={true} btnStyle="text" />
              </div>
              <div className={styles.bs_button_filter}>
                {fillter.map((value, index) => (
                  <GaloblButton title={value.title} key={index} />
                ))}
              </div>
            </Col>
          </Row>
          <div className={styles.bs_product_sell}>
            {bestSeller.map((item, index) => (
              <div className={styles.bsps_product} key={index}>
                <Products
                  id={item.id}
                  Img={item.image}
                  title={item.title}
                  priceOrignal={item.priceOrignal}
                  width={244}
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className={styles.h_popular_brand}>
            <div className={styles.h_popular_categorie}>
              <HeadingMain title={"Popular Brands"} />
              <Button title={"View All"} btnStyle="text" arrow={true} />
            </div>
            <div className={styles.h_popular_brand1}>
              <PopularBrand />
            </div>
          </div>
        </Container>
      </Section>
      <Section pb={60} pt={60}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.best_seller}>
                <HeadingMain title={"Suggest Today"} />
                <Button title={"VIEW ALL"} arrow={true} btnStyle="text" />
              </div>
              <div className={styles.bs_button_filter}>
                {fillter1.map((value, index) => (
                  <GaloblButton title={value.title} key={index} />
                ))}
              </div>
            </Col>
          </Row>
          <div className={styles.bs_product_sell}>
            {bestSeller1.map((item, index) => (
              <div className={styles.bsps_product} key={index}>
                <Products
                  Img={item.image}
                  title={item.title}
                  priceOrignal={item.priceOrignal}
                  width={244}
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section pt={60} pb={60}>
        <SpeakersSection />
      </Section>
      <Section pb={60}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.best_seller}>
                <HeadingMain title={"Just Landing"} />
                <Button title={"VIEW ALL"} arrow={true} btnStyle="text" />
              </div>
              <div className={styles.bs_button_filter}>
                {fillter2.map((value, index) => (
                  <GaloblButton title={value.title} key={index} />
                ))}
              </div>
            </Col>
          </Row>
          <div className={styles.bs_product_sell}>
            {bestSeller2.map((item, index) => (
              <div className={styles.bsps_product} key={index}>
                <Products
                  Img={item.image}
                  title={item.title}
                  priceOrignal={item.priceOrignal}
                  width={244}
                  height={450}
                  rated={item.rated}
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section pt={60} pb={60}>
        <Testimonial />
      </Section>
      <Section>
        <SubscribeBenner />
      </Section>
    </div>
  );
};
export default Home;
