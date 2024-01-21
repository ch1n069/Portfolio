import React, { useState } from "react";
import "./Services.css";
const Services = () => {
  const [modal, setModalToOpen] = useState(0);

  const modalHandler = (index) => {
    setModalToOpen(index);
  };

  //   declaration of functions
  return (
    <section id="services">
      <h2 className="section__title">Services</h2>
      {/* <span className="section__subtitle">My introduction</span> */}

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i class="uil uil-icons services__icon"></i>
            <h3 className="services__title">
              UI/UX <br />
              Wire framing
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => {
              modalHandler(1);
            }}
          >
            {" "}
            View more
            <i className="uil uil-arrow-right"></i>
          </span>

          <div
            className={
              modal === 1 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => {
                  modalHandler(0);
                }}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                UI
                <br />
                UX
              </h3>
              <p className="services__modal-description">
                Human Centered Designs for your projects
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Human centered designs</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Iterative Designs</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    User friendly interfaces
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i class="uil uil-mobile-android services__icon"></i>
            <h3 className="services__title">
              Cross platform <br />
              Experience
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => {
              modalHandler(2);
            }}
          >
            {" "}
            View more
            <i className="uil uil-arrow-right"></i>
          </span>

          <div
            className={
              modal === 2 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => {
                  modalHandler(0);
                }}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                {" "}
                Cross platform <br />
                Experience
              </h3>
              <p className="services__modal-description">
                Move together with your users across devices
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Seamless experience across multiple devices
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Users get to engage with services on the move
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Engaging user experience
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i class="uil uil-lightbulb-alt services__icon"></i>
            <h3 className="services__title">
              Product <br />
              Design
            </h3>
          </div>
          <span
            className="services__button"
            onClick={() => {
              modalHandler(3);
            }}
          >
            {" "}
            View more
            <i className="uil uil-arrow-right"></i>
          </span>

          <div
            className={
              modal === 3 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => {
                  modalHandler(0);
                }}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title text-center">
                {" "}
                Product <br />
                Design
              </h3>
              <p className="services__modal-description">
                - I take product design process to heart
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Extensive research on the target market for the said product
                    .
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design a tailor made solution for the problem at hand .
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Launch and implement the product
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="services__content">
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
        </div> */}
      </div>
    </section>
  );
};

export default Services;
