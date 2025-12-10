import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
<<<<<<< HEAD
          <h3>Developed by Soumyajit Behera</h3>
=======
          <h3>Designed and Developed by Soumyajit Behera</h3>
>>>>>>> 71deaf2ce105430636bdbdc59a7e4b0a478fae8b
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/masaxa91"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
<<<<<<< HEAD
                href="https://x.com/MasaxaV"
=======
                href="https://twitter.com/Soumyajit4419"
>>>>>>> 71deaf2ce105430636bdbdc59a7e4b0a478fae8b
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
<<<<<<< HEAD
=======
            <li className="social-icons">
              <a
                href="https://www.instagram.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
>>>>>>> 71deaf2ce105430636bdbdc59a7e4b0a478fae8b
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
