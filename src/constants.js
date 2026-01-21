// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import ethereumLogo from './assets/tech_logo/ethereum.svg';
import ethersLogo from './assets/tech_logo/ethers.svg';
import fivegLogo from './assets/tech_logo/5G MEC.svg';
import arduinoLogo from './assets/tech_logo/arduino.svg';
import hardhatLogo from './assets/tech_logo/Hardhat.svg';
import microLogo from './assets/tech_logo/Esp8266.svg';
import iotLogo from './assets/tech_logo/iot.svg';
import ipfsLogo from './assets/tech_logo/ipfs.svg';
import metamaskLogo from './assets/tech_logo/Metamask.svg';
import noderedLogo from './assets/tech_logo/nodered.svg';
import solidityLogo from './assets/tech_logo/Solidity.svg';
import smartContractLogo from './assets/tech_logo/smartcontact.svg';
import web3Logo from './assets/tech_logo/web3js.svg';
import linuxLogo from './assets/tech_logo/Linux.svg';
import apiLogo from './assets/tech_logo/restApi.svg';
import mongooseLogo from './assets/tech_logo/mongoose.svg';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import bitsLogo from './assets/company_logo/bits.png';
import codecTech from './assets/company_logo/codec_technologies_india_logo.jpg';
import iitr from './assets/company_logo/esummit_logo.jpg';

// Education Section Logo's
import gecvLogo from './assets/education_logo/gecv.jpg';
import bsebLogo from './assets/education_logo/bseb.jpg';
import schoolLogo from './assets/education_logo/schoolLogo.jpg';

// Project Section Logo's
import studenthubLogo from './assets/work_logo/studenthub.png';
import bitsinternshipLogo from './assets/work_logo/bitsinternship.png';
import foodLogo from './assets/work_logo/food.png';
import gitConnectLogo from './assets/work_logo/git.png';
import portfolioLogo from './assets/work_logo/portfolio.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },

  {
  title: 'Backend',
  skills: [
    { name: 'Node.js', logo: nodejsLogo },
    { name: 'Express.js', logo: expressjsLogo },
    { name: 'REST APIs', logo: apiLogo },
    { name: 'MongoDB', logo: mongodbLogo },
    { name: 'MySQL', logo: mysqlLogo },
    { name: 'Mongoose', logo: mongooseLogo },
  ],
},

  {
    title: 'Blockchain & Web3',
    skills: [
      { name: 'Smart Contracts', logo: smartContractLogo},
      { name: 'Ethereum', logo: ethereumLogo },
      { name: 'Hardhat', logo: hardhatLogo },
      { name: 'Ethers.js', logo: ethersLogo },
      { name: 'Web3.js', logo: web3Logo },
      { name: 'IPFS', logo: ipfsLogo },
    ],
  },

  {
  title: 'IoT & Systems',
  skills: [
    { name: 'Node-RED', logo: noderedLogo },
    { name: 'ESP8266', logo: microLogo},
    { name: 'Arduino', logo: arduinoLogo },
    { name: 'IoT Fundamentals', logo: iotLogo },
    { name: '5G MEC Server (Basics)', logo: fivegLogo },
    { name: 'Linux', logo: linuxLogo },
  ],
},

  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'Solidity', logo: solidityLogo },
    ],
  },

  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'MongoDB Compass', logo: mcLogo },
      { name: 'MetaMask', logo: metamaskLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: codecTech,
      role: "Blockchain Technology Intern ",
      company: "Codec Technologies India Pvt. Ltd.",
      date: "January 2026 - Present | Remote",
      desc: "Working on blockchain fundamentals and real-world Web3 use cases, with a focus on understanding decentralized architectures and Ethereum-based ecosystems. Involved in designing and developing smart contracts, learning best practices for security, transparency, and gas-efficient execution. Also contributing to Web3 integrations by connecting smart contracts with frontend and backend services.",
      type:"tech",
      skills: [
        "Solidity", "Ethereum", "Web3.js", "Ethers.js", "JavaScript", "REST APIs", "Git", "ReactJS"
      ],

    },
    {
      id: 1,
      img: bitsLogo,
      role: "ML Reaseach Intern",
      company: "BIT Sindri , Dhanbad",
      date: "June 2025 - July 2025 | Onsite",
      desc: "Worked as a research intern under the Department of CSE & IT, focusing on solving real-world problems through data-driven engineering. Built an end-to-end pipeline involving data processing, feature engineering, model development, and evaluation for a used-car sales prediction system. Collaborated with research mentors and presented final outcomes.",
      type:"tech",
      skills: [
        "Python", "Machine Learning", "Data Analysis", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Jupyter Notebook"
      ],
       badges: ["Internship", "Research"]
    },
    {
      id: 2,
      img: iitr,
      role: "Campus Ambassador Esummit IIT Roorkee 2025",
      company: "Ecell IIT Roorkee",
      date: "December 2024 - Feb 2025 | Remote",
      desc: "Selected as a Campus Ambassador for E-Summit IIT Roorkee 2025, where I promoted events within my college and helped increase student participation. Worked on digital outreach, coordinated communication between students and organizers, and successfully completed the program with certification.",
      type:"non-tech",
      skills: [
    "Digital Outreach",
    "Campaign Planning",
    "Community Engagement",
    "Canva",
    "Social Media Analytics",
  ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: gecvLogo,
      school: "Government Engineering College, Vaishali (BEU Patna)",
      date: "Sept 2023 - Present",
      grade: "8.46 CGPA",
      desc: "I am currently pursuing a B.Tech in Computer Science & Engineering (IoT) at Government Engineering College, Vaishali. My coursework has helped me build a strong foundation in Data Structures, Algorithms, Operating Systems, DBMS, Object-Oriented Programming, and core Computer Science concepts.Alongside academics, I actively work on full-stack web development, blockchain-based projects, and IoT systems, gaining hands-on experience through hackathons, internships, and lab activities. My time at college has played an important role in shaping my problem-solving mindset, practical development skills, and interest in building real-world technology solutions.",
      degree: "B.Tech CSE with Specialization in IoT",
    },
    {
      id: 1,
      img: bsebLogo,
      school: "J.N.K College, Munger (BSEB Patna)",
      date: "Sept 2020 - March 2022",
      grade: "82.2%",
      desc: "I completed my Senior Secondary (Class XII) education with Physics, Chemistry, and Mathematics (PCM), where I developed a strong analytical foundation and problem-solving mindset. Studying core science and mathematics subjects helped me build logical thinking skills and prepared me for further studies in computer science and engineering.",
      degree: "Intermediate (I.Sc - Class XII) - PCM",
    },
    {
      id: 2,
      img: schoolLogo,
      school: "St. Joseph's Convent High School (CBSE) Chittaranjan",
      date: "Apr 2019 - March 2020",
      grade: "93%",
      desc: "I completed my Class X education from St. Joseph’s Convent High School under the CBSE board, where I secured 93% marks and was the school topper. This phase of my education helped build a strong foundation in core subjects and developed discipline, consistency, and academic focus.",
      degree: "Seconady School Examination (Matriculation - Class X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Smart Student Hub (SIH 2025)",
      description:
        "A blockchain-enabled full-stack platform designed to securely manage and verify academic records and institutional documents. The system uses Ethereum smart contracts for immutable record issuance and revocation, while keeping documents off-chain through cryptographic hashing to ensure privacy and integrity. Built as part of Smart India Hackathon 2025, focusing on transparency, trust, and role-based access control.",
      image: studenthubLogo,
      tags: ["React", "Tailwind CSS", "Node.js", "Solidity", "Ethereum", "OpenZeppelin", "IPFS", "Web3.js / Ethers.js", "Hardhat"],
      github: "https://github.com/animesh713331/Smart_Student_Hub_Frontend",
      webapp: "https://smart-student-hub-93.vercel.app/login",
      badges: ["Winner","Hackathon"],
    },
    {
      id: 1,
      title: "Used Car Sales Prediction System (ML Research Internship – BIT Sindri)",
      description:
        "A machine-learning project developed during a research internship to predict used-car sales outcomes using structured data. Built an end-to-end pipeline covering data preprocessing, feature engineering, model training, and evaluation to improve prediction reliability.",
      image: bitsinternshipLogo,
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook", "Git","Data Analysis", "Pandas", "Matplotlib"],
      github: "https://github.com/animesh713331/Practice-ML-Internship-BIT-Sindri-/tree/main/Final%20Project",
      webapp: "https://github.com/animesh713331/Practice-ML-Internship-BIT-Sindri-/tree/main/Final%20Project",
      badges: ["ML", "Internship"],
    },
    {
      id: 2,
      title: "Food Menu Backend API",
      description:
        "A backend-focused REST API built to practice core backend engineering concepts, including routing, middleware-based authentication, and role-based request handling. The system supports admin-controlled food menu management and user cart operations with structured API responses and proper error handling.",
      image: foodLogo,
      tags: ["Node.js", "Express.js", "JavaScript", "REST APIs", "Postman", "Git"],
      github: "https://github.com/animesh713331/Food_BackendProject",
      webapp: "https://github.com/animesh713331/Food_BackendProject",
    },
    {
      id: 3,
      title: "GitConnect — GitHub Profile Viewer",
      description:
        "A React-based web application that fetches and displays GitHub user profile data using the GitHub API. Built with a focus on clean UI, component-based architecture, and efficient API handling.",
      image: gitConnectLogo,
      tags: ["JavaScript", "React JS", "HTML", "CSS", "Github REST API"],
      github: "https://github.com/animesh713331/GitConnect",
      webapp: "https://gitconnect-animesh09.netlify.app/",
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive personal portfolio showcasing projects, skills, and experience. Built with a focus on clean design, smooth interactions, and performance, and deployed with a custom domain.",
      image: portfolioLogo,
      tags: ["React", "Tailwind CSS", "Vite", "JavaScript", "Vercel"],
      github: "https://github.com/animesh713331/animesh-portfolio",
      webapp: "https://animeshkumarsingh.vercel.app/",
       badges: ["Portfolio"]
    },
  ];  