import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import TOH from "../../Assets/Projects/TOH.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Gun from "../../Assets/Projects/weapon.png";
import Road from "../../Assets/Projects/road.png";
import Pose from "../../Assets/Projects/pose.png";
import BasketBall from "../../Assets/Projects/basketball.png";

function Projects() {
  return (

      <Container className="text_color">
        <h1 className="text_color main-heading" style={{paddingTop: 50}}>
          Projects
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gun}
              isBlog={false}
              title="Weapon Detection with YOLOv8"
              description="This cutting-edge project demonstrates the power of the YOLOv8 object detection model, designed to identify and localize weapons within images and GIFs with exceptional precision. By training the model on a custom dataset tailored specifically for weapon detection, it achieves real-time, accurate identification, making it a game-changer for security surveillance, threat analysis, and content moderation."
              ghLink="https://github.com/TaqiRaza512/Weapon-Detection"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Road}
              isBlog={false}
              title="Road Segmentation Using U-Net"
              description="Using the advanced U-Net model, this solution delivers high-accuracy road segmentation from satellite and aerial imagery. It effectively isolates roadways by leveraging U-Net’s powerful encoder-decoder architecture, which is enhanced by skip connections to preserve spatial details. The result is precise road identification, essential for applications in urban planning, geographic analysis, and autonomous navigation"
              ghLink="https://github.com/TaqiRaza512/Road-Segmentation"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pose}
              isBlog={false}
              title="Player Pose Estimation Analysis"
              description="The project integrates pose data with player statistics to provide a more comprehensive analysis, including clustering players based on movement patterns and predicting future performance.  By extracting key pose landmarks, it tracks joint angles, velocities, and other movement features that can be used to assess player performance and identify distinct movement patterns."
              ghLink="https://github.com/TaqiRaza512/Pose-Estimation"
              // demoLink="https://editor.soumya-jit.tech/"              

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plants Disease Detection"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 97% by using Resnet34 pretrained model."
              ghLink="https://github.com/TaqiRaza512/Plants-Disease-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BasketBall}
              isBlog={false}
              title=" Basketball Player Performance: Predict & Cluster"
              ghLink="https://github.com/TaqiRaza512/Basketball_prediction"
              description="This project explores the performance of basketball players by predicting their success and clustering them based on their statistical data. Using machine learning techniques, it aims to uncover insights about player performance, identify key factors affecting success, and group players with similar traits." 

              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TOH}
              isBlog={false}
              title="Tower Of Hanoi Game"
              description="Implemented the Tower of Hanoi game with additional features such as undo, redo, styling, and win/loss functionalities.The game allows you to move discs between three towers, following the classic rules of Tower of Hanoi. With added undo and redo options, you can explore different strategies. 
              Stylish design enhances the gaming experience, and win/loss tracking provides feedback on your performance."
              demoLink="https://tower-of-hanoi-chi.vercel.app"  
              ghLink="https://github.com/TaqiRaza512/Tower-Of-Hanoi"
            />
          </Col>
        </Row>
      </Container>
  );
}

export default Projects;
