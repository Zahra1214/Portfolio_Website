import React from "react";
import LoginForm from "./LoginForm";
import imgData from "../assets/image1.png";
import './About.css'
const About = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-section">
          <p className="footer-title">About me</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            consequatur ipsa consectetur exercitationem tenetur error. Enim ipsa
            ut vitae optio reprehenderit eaque, earum laboriosam, aliquam
            voluptas accusamus atque quasi nostrum.
          </p>
         <div>
         <a className="about-resume" href="#" download>
            Resume
          </a>
         </div>
        </div>

        <div>
          <img className="img-class" src={imgData} alt="logo" />
        </div>
      </div>

      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default About;
