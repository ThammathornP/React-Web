import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[70%] h-[70%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <p className='mt-5 text-white-100 text-[14px] tracking-wider'>
        {experience.description}
      </p>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: "some" }}
      >
        <p className={`${styles.sectionSubText} text-center`}>
          How I got here
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Story
        </h2>
      </motion.div>

      <p className='mt-4 mx-auto text-center text-secondary text-[17px] max-w-3xl leading-[30px]'>
        This timeline traces the moments and people that inspired me along the
        way. Each experience shaped how I think, what I value, and the work I
        hope to do next.
      </p>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");