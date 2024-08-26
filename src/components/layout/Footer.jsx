import React from "react";
import linkedin from "../../assets/icons/email.svg";
import github from "../../assets/icons/linkedin.svg";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container spacing">
        <div className="footer-content">
          <div className="social-icons">
            <div className="social-icon-row-pair">
              <p> InfoEmail </p>
              <Link
                to="https://linkedin.com/in/marianoallevato"
                target="_blank"
              >
                <img className="icon" src={linkedin} alt="LinkedIn" />
              </Link>
            </div>
            <div className="social-icon-row-pair">
              <p> Linkedin </p>
              <Link
                to="https://github.com/marianoezequielallevato"
                target="_blank"
              >
                <img className="icon" src={github} alt="GitHub" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
