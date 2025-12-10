import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
<<<<<<< HEAD
import disfa from "../../Assets/Projects/DISFA.png";
import ninho from "../../Assets/Projects/Site-ninho.png";
import quizzcyber from "../../Assets/Projects/Quizz-Cyber.png";

=======
>>>>>>> 71deaf2ce105430636bdbdc59a7e4b0a478fae8b

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes recents <strong className="purple">projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
<<<<<<< HEAD
              imgPath={quizzcyber}
              isBlog={false}
              title="Quizz-Cyber"
              description="Le projet Quizz-Cyber a été créé pour aider les utilisateurs à adopter de bonnes habitudes, de bons comportements et de bonnes pratiques en matière de sécurité informatique."
              demoLink="https://quizz-cyber-oacm.vercel.app/"
=======
              imgPath={chatify}
              isBlog={false}
              title="Quizz-Cyber"
              description="Le projet Quizz-Cyber a été créé pour aider les utilisateurs à adopter de bonnes habitudes, de bons comportements et de bonnes pratiques en matière de sécurité informatique."
              demoLink="quizz-cyber-oacm.vercel.app"
>>>>>>> 71deaf2ce105430636bdbdc59a7e4b0a478fae8b
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
<<<<<<< HEAD
              imgPath={disfa}
=======
              imgPath={bitsOfCode}
>>>>>>> 71deaf2ce105430636bdbdc59a7e4b0a478fae8b
              isBlog={false}
              title="Projet site DISFA"
              description="Cette application a été faite pour les personnes du DISFA en collaboration avec les SIO dont Mathys, Hugo, Elliot et Marius pour leurs projet MON ACCROCHE TOUT."
              demoLink="https://disfa.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
<<<<<<< HEAD
              imgPath={ninho}
              isBlog={false}
              title="Site Ninho"
              description="Ce site a été réalisé pour présenter l'univers de l'artiste Ninho, mettant en avant sa musique, ses vidéos et ses actualités."
              demoLink="https://site-ninho-yw7u.vercel.app/"              
=======
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
>>>>>>> 71deaf2ce105430636bdbdc59a7e4b0a478fae8b
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
