import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.jpg";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Trip-Plan"
              description="It has cards with their descriptions of trips made with React
              It has features that allow the user to know how much their trips cost."
              ghLink="https://github.com/Aditya-Raj-24/Trip-plan-"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Random Gif Generator"
              description="I have used react,tailwind,css and many more js functions in this random gif project."
              ghLink="https://github.com/Aditya-Raj-24/Random-gif-generator"
            />
          </Col>
  
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Rent-Payment-Tracker"
              description="On this website, online payment is made only for renters, react, java, or tailwind css has been used, or this project is not yet complete and is a work in progress.
              ."
              ghLink="On this website, online payment is made only for renters, react java or tailwind css has been used, or this project is not yet complete and is a work in progress.
              "
            />
          </Col>

          <h1 className="project-heading">
          I have not uploaded many projects yet, I will upload them very soon. <strong className="purple"> soory </strong>
        </h1>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
