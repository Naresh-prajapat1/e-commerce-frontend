import React, { useState } from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/images/login.png";
import { Link } from "react-router-dom";
import EyeIcon from "../../icons/eye";
const Login = () => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((item) => ({ ...item, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log(input);
  };
  return (
    <div className={styles.login}>
      <Container>
        <div className={styles.loginForm}>
          <Row className="gy-5">
            <Col lg={6} md={12}>
              <div className={styles.l_image}>
                <img src={image} />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className={styles.l_form}>
                <div className={styles.lf_heading}>
                  <h3>Welcome Back</h3>
                  <p>login to continue</p>
                </div>
                <form>
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

                  <div className={styles.lf_forgetPassword}>
                    Forget Password ?
                  </div>
                  <button type="submit">LOGIN</button>
                </form>
                <div className={styles.l_newuser}>
                  <span>new user ?</span>
                  <span>
                    <Link to={"/registration"}>Sign Up</Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Login;
