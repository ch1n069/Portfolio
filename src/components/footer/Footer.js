import React from "react";

// imports happen above
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Bruno </h1>
        <ul className="footer__list">
          <li>
            <a href="" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="" className="footer__link"></a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="34" className="home__social-icon" target="_blank">
            <i class="uil uil-instagram"></i>
          </a>

          <a href="34" className="home__social-icon" target="_blank">
            <i class="uil uil-dribble"></i>
          </a>
          <a href="34" className="home__social-icon" target="_blank">
            <i class="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
