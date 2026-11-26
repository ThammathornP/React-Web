import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='text-center'>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 mx-auto text-center text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a Computer Science and Economics student at the University of Toronto
        with a passion for solving real-world problems. From early robotics competitions and student
        advocacy to founding a fintech community, conducting economics research,
        and working in consulting, I thrive where data, collaboration, and
        technology come together to create meaningful impact.
      </motion.p>
      <div className="pt-8">
        <Tech />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");