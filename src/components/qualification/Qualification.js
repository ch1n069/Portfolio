import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [experiences, setExperiences] = useState(0);

  const experienceHandler = (index) => {
    setExperiences(index);
  };

  // functions go here
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              experiences
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-graduation-cap"></i>
            {""}Education
          </div>
          <div className="qualification__button button--flex">
            <i className="uil uil-graduation-cap"></i>
            {""}Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web developers</h3>
                <span className="qualification__subtitle">moringa school</span>
                <div className="qualification__calendar">
                  <div className="uil uil-calendar-alt">2021 -present</div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web developers</h3>
                <span className="qualification__subtitle">moringa school</span>
                <div className="qualification__calendar">
                  <div className="uil uil-calendar-alt">2021 -present</div>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web developers</h3>
                <span className="qualification__subtitle">moringa school</span>
                <div className="qualification__calendar">
                  <div className="uil uil-calendar-alt">2021 -present</div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web developers</h3>
                <span className="qualification__subtitle">moringa school</span>
                <div className="qualification__calendar">
                  <div className="uil uil-calendar-alt">2021 -present</div>
                </div>
              </div>
            </div>
          </div>
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web developers</h3>
                <span className="qualification__subtitle">moringa school</span>
                <div className="qualification__calendar">
                  <div className="uil uil-calendar-alt">2021 -present</div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web developers</h3>
                <span className="qualification__subtitle">moringa school</span>
                <div className="qualification__calendar">
                  <div className="uil uil-calendar-alt">2021 -present</div>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web developers</h3>
                <span className="qualification__subtitle">moringa school</span>
                <div className="qualification__calendar">
                  <div className="uil uil-calendar-alt">2021 -present</div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web developers</h3>
                <span className="qualification__subtitle">moringa school</span>
                <div className="qualification__calendar">
                  <div className="uil uil-calendar-alt">2021 -present</div>
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
