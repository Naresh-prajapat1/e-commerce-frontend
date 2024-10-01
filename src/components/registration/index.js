import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/images/login.png";
import { Link } from "react-router-dom";
import EyeIcon from "../../icons/eye";
const Registration = () => {
  return (
    <div className={styles.login}>
      <Container>
        <Row className="gy-5">
          <Col lg={6} md={12}>
            <div className={styles.l_image}>
              <img src={image} />
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className={styles.l_form}>
              <div className={styles.lf_heading}>
                <h3>Register</h3>
                <p>Join to us</p>
              </div>
              <form>
                <label>Your name</label>
                <input
                  type="text"
                  name="text"
                  placeholder="Example@gmail.com"
                />

                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Example@gmail.com"
                />
                <label>Password</label>
                <div className={styles.password}>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                  />
                  <span className={styles.lf_eye}>
                    <EyeIcon />
                  </span>
                </div>
                <label>Confirm Password</label>
                <div className={styles.password}>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                  />
                  <span className={styles.lf_eye}>
                    <EyeIcon />
                  </span>
                </div>
                <div className={styles.lf_forgetPassword}>
                  Forget Password ?
                </div>
                <button type="submit">Register</button>
              </form>
              <div className={styles.l_newuser}>
                <span>already user ?</span>
                <span>
                  <Link to={"/login"}> Login</Link>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Registration;
