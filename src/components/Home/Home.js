import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Github from "../About/Github";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Bonjour!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                JE SUIS <strong className="main-name">ATZENHOFFER MARIUS</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
<<<<<<< HEAD

=======
>>>>>>> 71deaf2ce105430636bdbdc59a7e4b0a478fae8b
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
<<<<<<< HEAD
            <h1>Trouvez-moi sur</h1>
            <p>
              Restez <span className="purple">connecté</span> avec moi
=======
            <h1>Trouvez moi sur</h1>
            <p>
              Restez <span className="purple">connecter </span>avec moi
>>>>>>> 71deaf2ce105430636bdbdc59a7e4b0a478fae8b
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/masaxa91"
                  target="_blank"
                  rel="noreferrer"
<<<<<<< HEAD
                  className="icon-colour home-social-icons"
=======
                  className="icon-colour  home-social-icons"
>>>>>>> 71deaf2ce105430636bdbdc59a7e4b0a478fae8b
                >
                  <AiFillGithub />
                </a>
              </li>
<<<<<<< HEAD

              <li className="social-icons">
                <a
                  href="https://x.com/MasaxaV"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
=======
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
>>>>>>> 71deaf2ce105430636bdbdc59a7e4b0a478fae8b
                >
                  <AiOutlineTwitter />
                </a>
              </li>
<<<<<<< HEAD

=======
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
>>>>>>> 71deaf2ce105430636bdbdc59a7e4b0a478fae8b
              <li className="social-icons">
                <a
                  href="mailto:atzenhoffermarius@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <IoIosMail />
                </a>
              </li>
<<<<<<< HEAD

              <li className="social-icons phone-item">
                <a
                  href="tel:+33784170424"
                  className="icon-colour home-social-icons phone-link"
                >
                  <div className="phone-circle">
                    <BsFillTelephoneFill />
                  </div>
                  <span className="phone-number">07 84 17 04 24</span>
                </a>
              </li>

=======
              <li className="social-icons">
                <a
                  href="mailto:atzenhoffermarius@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <BsFillTelephoneFill />
                </a>
              </li>


>>>>>>> 71deaf2ce105430636bdbdc59a7e4b0a478fae8b
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
