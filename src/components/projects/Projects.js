import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
import { motion } from "framer-motion";
import images from "../../Images";
import "./Projects.css";

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
          {images.map((image) => {
            return (
              <motion.div className="item">
                <img src={image} alt={image} />;
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
