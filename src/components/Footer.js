import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Tola-logo-short.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <p></p>
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" style={{width: 100}}/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end"> */}
            <div className="social-icon" style={{textAlign: "center"}}>
              <a href="https://linkedin.com/in/tolganaya/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/tolganaya/" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              {/* <a href="https://www.instagram.com/tolganaya_/" target="_blank"><img src={navIcon3} alt="Icon" /></a> */}
            <p>©Copyright 2022. All Rights Reserved (I hope). Powered by Tolganay.</p>
            </div>
          {/* </Col> */}
        </Row>
      </Container>
    </footer>
  )
}
