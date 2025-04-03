import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import TaqiProfile from "../../Assets/Taqi_Raza.jpeg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import SocialLinks from "./SocialLinks"; // Import the new component
import Projects from "../Projects/Projects";
import TechStack from "../About/Techstack";

// Importing testimonial images
import clientImage1 from "../../Assets/Clients/image.png"; // Use the actual path to your client image
import clientImage2 from "../../Assets/Clients/image_2.png"; // Use the actual path to your client image
import clientImage3 from "../../Assets/Clients/image_3.png"; // Use the actual path to your client image

// Testimonial Component
const Testimonial = ({ image }) => {
  return (
    <Col md={4} className="mb-4">
      <Card className="testimonial-card">
        <Card.Body style={{ padding: "0", position: "relative" }}>
          <div
            className="testimonial-img-container"
            style={{
              width: "100%",               // You can set a specific width for the image
              height: "200px",             // Fixed height for the image
              backgroundImage: `url(${image})`,
              backgroundSize: "contain",  // Ensures the entire image is visible and resized to fit
              backgroundPosition: "center", // Keeps the image centered in case it doesn't fully fill the container
              backgroundRepeat: "no-repeat", // Prevents repeating the image if it doesn't fill
              borderRadius: "8px",         // Optional: Rounded corners for the container
            }}
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

// Home Component
function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use an email service or backend to send the form data
    alert("Message sent! Thank you for reaching out.");
    // Reset the form data
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section>
      <Container className="home-content">
        <Row>
          <Col md={5} style={{ paddingLeft: 100, paddingTop: 10 }}>
            <img
              src={TaqiProfile}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "300px", borderRadius: "50%" }}
            />
            <SocialLinks />
          </Col>
          <Col md={7} className="text_color">
            <h1 className="heading-name">
              <strong className="text_color">Muhammad Taqi Raza</strong>
            </h1>
            <h4 className="heading-name text_color">Software Engineer, ML Researcher</h4>
            <div style={{ paddingLeft: 50 }}>
              <p>Graduated from Information Technology University (ITU) with a Bachelor's in Computer Science (BSCS), with experience in Generative AI, computer vision, and research experience in multi-robotics systems.</p>
              <p>I worked at Educative.io and at Hazen.ai. </p>

              <h5 className="mt-3 text_color">Skills:</h5>
              <ul className="text_color ps-4">
                <li>OCR classification, Object Detection, Segmentation, Feature Extraction</li>
                <li>GANs, Pose Estimation, 3D Reconstruction, Transfer Learning, Visual SLAM</li>
                <li>LLM Fine-Tuning, LangChain, RAG, Flask, Python, OpenCV</li>
                <li>AWS, Docker, MERN</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <Projects />

      {/* Testimonials Section */}
      <Container className="testimonials-section">
        <h1 className="heading-name text_color">What Clients Say</h1>
        <Row>
          {/* Add your testimonials here */}
          <Testimonial
            image={clientImage1} // Use the imported client image path here
          />
          <Testimonial
            image={clientImage2} 
          />
          <Testimonial
            image={clientImage3} 
          />
        </Row>
      </Container>

      {/* Contact Me Section */}
      <Container className="contact-section mt-5">
        <h1 className="heading-name text_color">Contact Me</h1>
        <p>If you're interested in working with me or have any questions, feel free to reach out!</p>

        <SocialLinks />

        
      </Container>
    </section>
  );
}

export default Home;
