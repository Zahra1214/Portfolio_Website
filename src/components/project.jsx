import React from "react";
import "./project.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.png";

const Projects = () => {
  return (
    <div className="project-home">
      <div className="project-title">
        <p>Projects</p>
      </div>

      <div className="project-home2">
        <div className="project-home2a">
          <p class="projct-title">Project Name</p>
          <p class="project-body">
            I created this personal project in order to show how to create an
            interface in Figma using a portfolio as an example.
          </p>
          <button className="button">View Project</button>
        </div>

        <div className="project-home2b">
          <img className="project1-image" src={project1} alt="Image" />
        </div>
      </div>
      {/* //////////////////////////////////////////////////////3rd Project */}

      <div className="project-home2">
        <div className="project-home2b">
          <img className="project1-image" src={project2} alt="Image" />
        </div>
        <div className="project-home2a">
          <p class="projct-title">Project Name</p>
          <p class="project-body">
            I created this personal project in order to show how to create an
            interface in Figma using a portfolio as an example.
          </p>
          <button className="button">View Project</button>
        </div>
      </div>

      {/* //////////////////////////////////////////////////////2nd Project */}

      <div className="project-home2">
        <div className="project-home2a">
          <p class="projct-title">Project Name</p>
          <p class="project-body">
            I created this personal project in order to show how to create an
            interface in Figma using a portfolio as an example.
          </p>
          <button className="button">View Project</button>
        </div>

        <div className="project-home2b">
          <img className="project1-image" src={project3} alt="Image" />
        </div>
      </div>
    </div>
  );
};
export default Projects;
