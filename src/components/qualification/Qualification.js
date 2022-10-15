import React from "react";
import "./Qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal Journey</span>
      <div className="qualification__container container">
        <div className="qualifiaction__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {""}
            Experience
          </div>
        </div>
        <div className="qualification__Sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <div></div>
              <div>
                <h4 className="quailification__title"></h4>
                <span className="qualification__subtitle">Kenya</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2021-present</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <h4 className="quailification__title"></h4>
                <span className="qualification__subtitle">Kenya</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2021-present</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;