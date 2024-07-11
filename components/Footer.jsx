import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="social-icons">
          <Link
            className="banner-link"
            to="https://linkedin.com/in/marianoallevato"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin alt="LinkedIn" />
            <p>Linkedin</p>  
          </Link>
        </div>
        <div className="social-icons">
          <Link
            className="banner-link"
            to="mailto:info@squadralabs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdAlternateEmail alt="GitHub" />
          <p>InfoEmail</p>  
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
