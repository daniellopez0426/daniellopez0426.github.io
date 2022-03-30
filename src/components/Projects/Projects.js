import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";

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
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Project 1"
              description="Text of exampleText of exampleText of exampleText of exampleText of exampleText of exampleText of example"
              link="#"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Project 2"
              description="Text of exampleText of exampleText of exampleText of exampleText of exampleText of exampleText of example"
              link="#"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Project 3"
              description="Text of exampleText of exampleText of exampleText of exampleText of exampleText of exampleText of example"
              link="#"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Project 4"
              description="Text of exampleText of exampleText of exampleText of exampleText of exampleText of exampleText of example"
              link="#"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
