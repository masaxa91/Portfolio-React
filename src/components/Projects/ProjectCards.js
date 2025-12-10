import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
<<<<<<< HEAD
=======
import { BsGithub } from "react-icons/bs";
>>>>>>> 71deaf2ce105430636bdbdc59a7e4b0a478fae8b

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
<<<<<<< HEAD

        {/* Bouton Demo uniquement */}
=======
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
>>>>>>> 71deaf2ce105430636bdbdc59a7e4b0a478fae8b

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
<<<<<<< HEAD
          >
            <CgWebsite /> &nbsp;
            {"Visiter le site"}
=======
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
>>>>>>> 71deaf2ce105430636bdbdc59a7e4b0a478fae8b
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 71deaf2ce105430636bdbdc59a7e4b0a478fae8b
export default ProjectCards;
