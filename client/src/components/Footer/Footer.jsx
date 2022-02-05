import React from "react";
import "../../styles/Footer.css";
import { Link } from "react-router-dom";
import { GitHub, Linkedin } from "react-feather";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="footer-row">
          <div data-cy="footer-info" className="footer-column">
            <h4>Strolly</h4>
            <ul className="footer-ul">
              <li> +31 6 00000001</li>
              <li> Amsterdam, NL</li>
              <li> Sarphatistraat 370</li>
            </ul>
          </div>

          <div data-cy="footer-info" className="footer-column">
            <Link to="/about">
              <h4>About Us</h4>
            </Link>
            <ul className="footer-ul">
              <li>We are Strolly</li>
              <li>Refer a friend</li>
              <li>Press</li>
            </ul>
          </div>

          <div data-cy="footer-info" className="footer-column">
            <h4>Customer Support</h4>
            <ul className="footer-ul">
              <li>FAQ</li>
              <li>Service</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
      <div data-cy="footer-info" className="footer-row-bottom">
        <div className="copyright">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Strolly | Made with{" "}
            <i className="bi bi-suit-heart"></i> by HYF Class 33 |
          </p>
        </div>
        <div className="social-media">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/obada-elsharbatly/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
          <a
            className="social-icon"
            href="https://github.com/ObadaElSharbatly"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
