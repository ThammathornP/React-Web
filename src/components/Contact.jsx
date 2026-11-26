import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { gmail, linkedin, linkedinPage, resume, resumePic } from "../assets/index";

const Contact = () => {

  const [loading, setLoading] = useState(false);

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <div>
          <p className={styles.sectionSubText}>Contact</p>
          <h2 className={styles.sectionHeadText}>Get in Touch!</h2>
        </div>
        <div className='flex flex-col gap-4 pt-3'>
          <a
            href="https://www.linkedin.com/in/tham-paweewan"
            target="_blank"
            rel="noopener noreferrer"
            className='relative'
          >
            <img
              src={linkedinPage}
              alt='LinkedIn profile preview'
              className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div 
              className='absolute inset-0 flex justify-end m-3 card-img_hover'
              >
                <img
                  src={linkedin}
                  alt='LinkedIn'
                  className='w-10 h-10 object-contain'
                />
              </div>
            </div>
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className='relative'
          >
            <img
              src={resumePic}
              alt='Resume preview'
              className='w-full h-full object-cover rounded-2xl'
            />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <img
                src={gmail}
                alt='Email'
                className='w-10 h-10 object-contain'
              />
            </div>
          </a>
        </div>
        
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");