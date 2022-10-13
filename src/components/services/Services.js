import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <section>
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br />
              Design
            </h3>
          </div>
          <span className="services__button">
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
            <div className="services__modal">
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">
                  {" "}
                  Product <br />
                  Design
                </h3>
                <p className="services__modal-description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, explicabo!
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </span>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br />
              Design
            </h3>
          </div>
          <span className="services__button">
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
            <div className="services__modal">
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">
                  {" "}
                  Product <br />
                  Design
                </h3>
                <p className="services__modal-description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, explicabo!
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </span>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product
              <br /> Design
            </h3>
          </div>
          <span className="services__button">
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
            <div className="services__modal">
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">
                  {" "}
                  Product <br />
                  Design
                </h3>
                <p className="services__modal-description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, explicabo!
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
