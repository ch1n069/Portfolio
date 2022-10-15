import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
import { motion } from "framer-motion";
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
        <motion.div className="inner-carousel"></motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
