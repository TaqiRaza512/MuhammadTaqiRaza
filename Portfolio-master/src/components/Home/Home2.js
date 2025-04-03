import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
  AiOutlineGmail,
  AiOutlineWhatsApp 
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";
import SocialLinks from "./SocialLinks"; // Import the new component

function Home2() {
  return (
    <Container fluid className="home-about-section text-center" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-social mx-auto">
            <h1>Let's Connect</h1>
            <SocialLinks /> {/* Use the SocialLinks component */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;