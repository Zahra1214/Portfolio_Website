import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import gmailIcon from "../assets/Gmail-Icon.png";
import linkinIcon from "../assets/Linkend-Icon.png"
import githubIcon from "../assets/Instagram-icon.jpg"


const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("Form Submitted");
     
    }
  };

  const validate = () => {
    const isError = {};

    if (name === ""  || name.length < 4) {
      isError.name = "Please Enter your name";
    }
    if (email === "") {
      isError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isError.email = "Email is invalid";
    }
    if (message === "") {
      isError.message = "Please enter a your message";
    }

    setError(isError);
    // return Object.keys(isError).length === 0;
  };

  return (
    <div className="boxouter">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="boxinner">
          <div className="boxinner-1">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                // value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {error.name && <span className="error-class">{error.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                value={email}
                
                onChange={(e) => setEmail(e.target.value)}
              />
              {error.email && (
                <span className="error-class">{error.email}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {error.message && (
                <span className="error-class">{error.message}</span>
              )}
            </div>

            <div className="form-button">
              <button className="button1" type="submit">
                Send
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="bottom-section">
        <div className="Icon-section">
          <Link to="https://github.com">
          <img src={githubIcon} alt="GithubIcon"/>
          </Link>
          <Link to="https://linkedin.com">
           <img src={linkinIcon} alt="LinkedinIcon"/>
          </Link>
          <Link to="https://gmail.com">
            <img src={gmailIcon} alt="gmailIcon"/>
          </Link>
        </div>
        <div className="reserve-section">
          All rights reserved <span>2024</span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
