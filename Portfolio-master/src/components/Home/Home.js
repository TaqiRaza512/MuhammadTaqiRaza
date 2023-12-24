import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Taqi from "../../Assets/Taqi.jpg";
import TaqiProfile from "../../Assets/Taqi_Profile.png";

import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
 
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I am
                <strong className="main-name"> Muhammad Taqi Raza</strong>
                
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingLeft:100,paddingTop: 10}}>
              <img
                src={TaqiProfile}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "300px", borderRadius: "50%" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
