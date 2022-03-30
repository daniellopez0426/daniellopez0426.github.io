import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiPostgresql,
  DiCss3,
  DiHtml5,
  DiBootstrap,
} from "react-icons/di";
import {
  SiFirebase,
  SiNestjs,
  SiTypescript,
  SiMysql,
  SiExpress,
  SiNpm,
  SiRedux,
  SiTailwindcss,
  SiSpringboot,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={1} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiNpm />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiSpringboot />
      </Col>      
      <Col xs={4} md={1} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiNestjs />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiPostgresql />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiTailwindcss />
      </Col>
      
    </Row>
  );
}

export default Techstack;
