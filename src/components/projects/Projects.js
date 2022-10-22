import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
import { motion } from "framer-motion";
import images from "../../Images";
import "./Projects.css";
import CardImage from "../UI/CardImage";
import projects from "../../data";

// import { useEffect, useRef, useState } from "react";
// imports happen above
const Projects = () => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  // const [current, setCurrent] = useState(0);

  // const length = images.length;

  // creating of functions
  return (
    <section className="projects container section">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">
        Drag to scroll through projects{" "}
      </span>

      <motion.div
        ref={carousel}
        className="carousel "
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel slider"
        >
          {projects.map((image) => {
            return (
              <motion.div className="item">
                <div className="project-holder">
                  <div className="small-image">
                    <img src={image.imageUrl} alt={image.imageUrl} />
                    <h2>{image.title}</h2>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
