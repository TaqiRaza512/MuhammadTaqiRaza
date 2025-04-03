import React from "react";
import { AiFillGithub, AiFillMail, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://github.com/TaqiRaza512"
          target="_blank"
          rel="noreferrer"
          className="text_color home-social-icons"
        >
          <AiFillGithub />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="mailto:taqiraza126@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text_color home-social-icons"
        >
          <AiFillMail />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/muhammad-taqi-raza-16371a207/"
          target="_blank"
          rel="noreferrer"
          className="text_color home-social-icons"
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://wa.me/923314426344"
          target="_blank"
          rel="noreferrer"
          className="text_color home-social-icons"
        >
          <AiOutlineWhatsApp />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
