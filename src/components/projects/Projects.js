import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
import { motion } from "framer-motion";
import images from "../../Images";
import "./Projects.css";
// import { useEffect, useRef, useState } from "react";
// imports happen above
const Projects = () => {
  return (
    <section className="projects container section">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">
        Drag to scroll through projects{" "}
      </span>
      <motion.div className="carousel">
        <motion.div className="inner-carousel">
          {images.map((image) => {
            return (
              <motion.div className="item">
                <img src={image} alt="project-image" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
