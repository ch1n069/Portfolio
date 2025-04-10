import React from "react";
import "./Footer.css";
// import Moment from "react-moment";
// import "moment-timezone";
// imports happen above
const Footer = () => {
  //
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Bruno </h1>
        <ul className="footer__list">
          <li>
            <a href="/" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#about_me" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="34" className="footer__social-link" target="_blank">
            <i class="uil uil-instagram"></i>
          </a>

          <a href="34" className="footer__social-link" target="_blank">
            <i class="bx bxl-linkedin-square"></i>
          </a>
          <a href="34" className="footer__social-link" target="_blank">
            <i class="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          {" "}
          &#169; {year} Created with love by Bruno Gatiba
        </span>
      </div>
    </footer>
  );
};

export default Footer;
