import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h3 style={{ textAlign: "center" }}> <strong style={{ color: "violet" }}>Introduction</strong></h3>
          <p style={{ textAlign: "center" }}>
            <span className="purple">Muhammad Taqi Raza, </span>
            a final-year student pursuing a Bachelor's degree in Computer Science at Information Technology University, Lahore <a href="https://itu.edu.pk" style={{ textDecoration: 'none' }} target="_blank"><span className="blue">ITU</span></a> is a
             passionate and versatile individual with a keen interest in cutting-edge technologies.His academic pursuits
            are anchored in <span className="purple">Computer Vision </span>, Deep learning, and web3.0, with a current focus on a final project centered
           around distributed <span className="purple">multi-robot planning</span>—a testament to his academic excellence and enthusiasm for emerging technologies.
          </p>

          <h3 style={{ textAlign: "center" }}><strong style={{ color: "violet" }}>Creativity</strong></h3>
          <p style={{ textAlign: "center" }}>
          Beyond academia, he finds inspiration in game development. 
          During fellowship program at <span className="purple">Mindstorm Studios </span>, 
          his responsibilities range from game mechanics development to level design, 
          showcasing practical skills in the dynamic field of <span className="purple">game development </span>.
          </p>
          <h3 style={{ textAlign: "center" }}><strong style={{ color: "violet" }}>Experience At Educative</strong></h3>
          <p style={{ textAlign: "center" }}>
          Muhammad Taqi Raza's professional journey includes a valuable stint as a Technical Content Intern at <span className="purple"> Educative </span> , where 
          he contributed to content creation on software engineering, artificial intelligence, blockchain, and Unity. 
          This experience enriched his 
          <span className="purple"> research skills </span> 
          and overall learning capabilities, with 
          a notable impact demonstrated through over 
          60 published answers related to deep learning and robotics during his internship.
          </p>

          <h3 style={{ textAlign: "center" }}><strong style={{ color: "violet" }}>Diverse skill set</strong></h3>
          <p style={{ textAlign: "center" }}>
            With a strong foundation in programming languages such as JavaScript, Python, C#, C++, and C,
           Muhammad Taqi Raza excels in <span className="purple"> data structures and algorithms </span>.
            His proficiency extends to database management, as evidenced by the development of a MyFacebook application.
             Additionally, he is adept at web development, navigating HTML, CSS, and MERN stack effortlessly. 
             His skills span across Unity, Solidity, 
             and a diverse range of programming languages, 
             making him a well-rounded professional capable of handling various projects.
             </p>

             <h3 style={{ textAlign: "center" }}><strong style={{ color: "violet" }}>TAship</strong></h3>
          <p style={{ textAlign: "center" }}>
          Further enhancing his academic profile, Muhammad Taqi Raza has served as a Teaching Assistant for the course 
          <span className="purple"> Calculus and Analytical Geometry </span>, demonstrating his dedication to both his studies and the academic community.
             </p>



             <h3 style={{ textAlign: "center" }}><strong style={{ color: "violet" }}>Future Goals</strong></h3>
          <p style={{ textAlign: "center" }}>
          Muhammad Taqi Raza expresses a keen interest in pursuing a Master's degree with a focus 
          on research in the field of autonomous systems and the <span className="purple"> metaverse </span>. His passion for exploring the 
          realms of autonomy and the metaverse 
          reflects a forward-thinking mindset, positioning him as a potential trailblazer 
          in these cutting-edge areas of technology. Feel free to connect with him 
          to explore potential collaborations or discussions related to the 
          exciting intersections of technology, <span className="purple"> autonomy </span>, and the metaverse.
             </p>



          <p style={{ color: "violet" }}>
            "Strive to build things that create a real world impact!"{" "}
          </p>
          <footer className="blockquote-footer">Muhammad Taqi Raza</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
