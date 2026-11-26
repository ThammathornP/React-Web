import {
    datastudio,
    flutter,
    java,
    python,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    wro,
    wrg,
    xhacks,
    dga,
    eis,
    uoft,
    fintech,
    powerAdvisory,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "My Story",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Student Representative",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Data Studio",
      icon: datastudio,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Top 16 Global Finalist",
      company_name: "World Robot Olympiad",
      icon: wro,
      iconBg: "#E6DEDD",
      date: "November 2015",
      description:
        "Growing up, my hobby was building robots with my friends. I've always enjoyed solving problems. Representing Thailand and ranking in the global top 16 was a proud moment.",
    },
    {
      title: "Student Researcher & Advocate",
      company_name: "High School",
      icon: eis,
      iconBg: "#E6DEDD",
      date: "January 2019 to May 2022",
      description:
        "Independently, I investigated challenges students faced and brought my findings to my highschool. My lobbying efforts resulted in the expansion of my school's counseling services. For the first time, my data made a real world impact.",
    },
    {
      title: "Data Analyst Intern",
      company_name: "Digital Government Development Agency Thailand",
      icon: dga,
      iconBg: "#E6DEDD",
      date: "June 2021 to August 2021",
      description:
        "At the DGA, I used data tools to make public sector information easier to understand. It was my first look at how technology can turn complicated information into practical decisions on a major scale.",
    },
    {
      title: "Student Director",
      company_name: "UTM Student Union & Campus Affairs Board",
      icon: uoft,
      iconBg: "#E6DEDD",
      date: "September 2022 to Present",
      description:
        "I represented student voices on campus and lobbied the Ontario Parliament to support student initiatives. Making change on an even larger scale, I felt like I had reached a new level of impact.",
    },
    {
      title: "Founder",
      company_name: "UTM Fintech Association",
      icon: fintech,
      iconBg: "#0F172A",
      date: "September 2022 to Present",
      description:
        "I began exploring fintech out of curiosity and soon wanted to help other curious students. Building a student community showed me just how much more fun things are when weexperiment together.",
    },
    {
      title: "Economics Research",
      company_name: "U of T Department of Economics",
      icon: uoft,
      iconBg: "#E6DEDD",
      date: "September 2023 to August 2024",
      description:
        "Leading the tech side of historical trade research connected my computer science skills with practical economics. I was intrigued by just how much good analysis depended on clean data.",
    },
    {
      title: "Consultant",
      company_name: "Power Advisory LLC",
      icon: powerAdvisory,
      iconBg: "#E6DEDD",
      date: "May 2025 to August 2026",
      description:
        "Consulting brought together data, collaborative, problem solving, and my desire to make an impact.",
    },
  ];
  
  const projects = [
    {
      name: "Flutter App",
      description:
        "Coming Soon.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Future Project?",
      description:
        "Maybe some full stack web app.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Hmm",
      description:
        "What now.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };