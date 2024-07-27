import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import footerImage from "../assets/footerImage.svg";

const Navbar = () => {
  return (
    <>
      <div className="navbar-section">
        <div className="navbar-items">
          <div className="navbar-body">
            <Link to="/" className="navbar-link">
              Zahra
            </Link>
            <div className="navbar-link">
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact-us">Contact-Us</Link>
            </div>
          </div>
        </div>
      </div>

      <Outlet />

      <div className="footer-section">
        <img src={footerImage} alt="Footer" />
      </div>
    </>
  );
};

export default Navbar;
