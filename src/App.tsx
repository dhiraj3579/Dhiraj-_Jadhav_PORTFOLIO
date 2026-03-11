import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Tilt } from 'react-tilt';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { 
  Mail, Phone, MapPin, Linkedin, Github, 
  Code2, Database, BrainCircuit, LineChart, GraduationCap, 
  Briefcase, Terminal, Send, MessageSquare, Menu, X, ArrowDown
} from 'lucide-react';
import CanvasParticles from './components/CanvasParticles';
import CustomCursor from './components/CustomCursor';
import SkillsMarquee from './components/SkillsMarquee';
import Stats from './components/Stats';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';
import MagneticWrapper from './components/MagneticWrapper';
import GlowCard from './components/GlowCard';
import { TypeAnimation } from 'react-type-animation';

const EXPERIENCE = [
  {
    company: "Oeson",
    location: "London, UK",
    role: "Data Scientist Intern",
    period: "June 2023 - January 2024",
    icon: <Briefcase />,
    iconBg: "#383E56",
    achievements: [
      "Analyzed large-scale e-commerce, and financial datasets using Python, SQL, and Excel, improving analytical accuracy by 30% and enabling data-driven decision-making.",
      "Built and optimized machine learning and deep learning models (DT, SVM, Logistic Regression, Random Forest, CNN, RNN, MTCNN), achieving 85–90% prediction accuracy.",
      "Executed NLP-based sentiment analysis and time-series statistical analysis using NLTK, improving text classification precision by 20%.",
      "Designed interactive dashboards and reports using Power BI, Tableau, and Matplotlib, increasing stakeholder data comprehension by 90%.",
      "Applied data preprocessing, feature engineering, and model evaluation best practices to ensure reliable and scalable solutions."
    ]
  }
];

const PROJECTS = [
  {
    title: "DJ-STOCK Premium Inventory Management System",
    description: "A comprehensive, full-stack inventory management system designed to track stock levels, manage products, and provide real-time analytics for business operations.",
    tags: [
      { name: "Inventory Management", color: "blue-text-gradient" },
      { name: "Full-Stack", color: "green-text-gradient" },
      { name: "Analytics", color: "pink-text-gradient" }
    ],
    source_code_link: "https://github.com/dhiraj3579/DJ-STOCK--Premium-Inventory-Management-System",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "BI Strategist Pro",
    description: "A high-end platform for BI Developers and Data Scientists to architect comprehensive dashboard roadmaps, integrating predictive analytics and advanced data prep guides using Advanced AI.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "AI Integration", color: "green-text-gradient" },
      { name: "BI", color: "pink-text-gradient" }
    ],
    source_code_link: "https://github.com/dhiraj3579/BI-Strategist-Pro",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "ChurnGuard AI",
    description: "An end-to-end Machine Learning web app to predict customer retention and churn. Built with Python and predictive analytics techniques.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Predictive Analytics", color: "pink-text-gradient" }
    ],
    source_code_link: "https://github.com/dhiraj3579/ChurnGuard-AI---Customer-Retention-Predictor",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Deep Learning Text Image Classification",
    description: "Implemented CNN-based deep learning models for multi-class classification of text-based images. Performed image preprocessing and model optimization to improve classification accuracy.",
    tags: [
      { name: "Deep Learning", color: "blue-text-gradient" },
      { name: "CNN", color: "green-text-gradient" },
      { name: "Image Processing", color: "pink-text-gradient" }
    ],
    source_code_link: "https://github.com/dhiraj3579/Text-Image-Classification",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "HR Workforce Analytics Dashboard",
    description: "Developed KPI-driven dashboards to analyze employee attrition, performance, and workforce trends. Translated HR data into actionable insights using data visualization and exploratory analysis.",
    tags: [
      { name: "Power BI", color: "blue-text-gradient" },
      { name: "Tableau", color: "green-text-gradient" },
      { name: "Analytics", color: "pink-text-gradient" }
    ],
    source_code_link: "https://github.com/dhiraj3579/Preparing-a-Visualization-report-on-the-given-HR-dataset",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Blockchain Digital Identity",
    description: "Blockchain Empowered Digital Identity Management assignment exploring decentralized identity solutions and secure data management.",
    tags: [
      { name: "Blockchain", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Security", color: "pink-text-gradient" }
    ],
    source_code_link: "https://github.com/dhiraj3579/Block-Chain-Final-Assignment-Blockchain-Empowered-Digital-Identity-Management-",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "E-commerce Customer Sentiment Analysis",
    description: "Built machine learning models to classify customer sentiment from e-commerce reviews and feedback. Applied NLP techniques including text preprocessing and feature extraction for sentiment insights.",
    tags: [
      { name: "NLP", color: "blue-text-gradient" },
      { name: "Machine Learning", color: "green-text-gradient" },
      { name: "Text Classification", color: "pink-text-gradient" }
    ],
    source_code_link: "https://github.com/dhiraj3579",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Real-Time Stock Market Analysis",
    description: "Analyzed live stock market data using statistical methods and time-series techniques. Identified trends, volatility, and correlations to support data-driven financial insights.",
    tags: [
      { name: "Time-Series", color: "blue-text-gradient" },
      { name: "Statistical Modeling", color: "green-text-gradient" },
      { name: "Finance", color: "pink-text-gradient" }
    ],
    source_code_link: "https://github.com/dhiraj3579",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Neural Network Cropland Classification",
    description: "Developed neural network models for cropland classification using geospatial or satellite data. Improved land-use detection accuracy through supervised learning and feature engineering.",
    tags: [
      { name: "Neural Networks", color: "blue-text-gradient" },
      { name: "Geospatial Data", color: "green-text-gradient" },
      { name: "Supervised Learning", color: "pink-text-gradient" }
    ],
    source_code_link: "https://github.com/dhiraj3579",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop"
  }
];

import Hero3DModel from './components/Hero3DModel';
import NetworkCanvas from './components/EarthCanvas';

const EDUCATION = [
  {
    institution: "Bournemouth University",
    degree: "Master's, Data Science",
    period: "January 2023 - May 2024",
    icon: <GraduationCap />,
    iconBg: "#E6DEDD"
  },
  {
    institution: "Savitribai Phule Pune University",
    degree: "Bachelor's, Computer Science",
    period: "June 2019 - August 2022",
    icon: <GraduationCap />,
    iconBg: "#383E56"
  }
];

const SKILL_CATEGORIES = [
  {
    name: "Languages & Core",
    icon: <Code2 className="w-8 h-8 text-white" />,
    skills: ["Python", "R", "SQL", "Java", "C/C++", "MATLAB", "PHP", "HTML/CSS", "Node.js"]
  },
  {
    name: "Machine Learning & AI",
    icon: <BrainCircuit className="w-8 h-8 text-white" />,
    skills: ["Tensorflow", "Keras", "Pytorch", "Scikit-learn", "NLP", "NLTK", "LLM", "CNNs", "RNNs", "MTCNN"]
  },
  {
    name: "Data & Analytics",
    icon: <LineChart className="w-8 h-8 text-white" />,
    skills: ["Data Analysis", "Data Science", "Statistical Modelling", "Time-series analysis", "Pandas", "NumPy"]
  },
  {
    name: "Visualization & Tools",
    icon: <Terminal className="w-8 h-8 text-white" />,
    skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly", "Jupyter", "VS Code"]
  },
  {
    name: "Databases",
    icon: <Database className="w-8 h-8 text-white" />,
    skills: ["MongoDB", "MySQL", "NoSQL", "Oracle", "RDBMS"]
  }
];

const textVariant = (delay = 0): any => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const fadeIn = (direction: string, type: string, delay: number, duration: number): any => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export default function App() {
  const [activeNav, setActiveNav] = useState('');
  const [toggle, setToggle] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/dhirajjadhav3579@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative z-0 bg-primary overflow-x-hidden">
      <ScrollProgress />
      <CustomCursor />
      <CanvasParticles />
      <BackToTop />
      
      {/* Navigation */}
      <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary/90 backdrop-blur-sm">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <a href="/" className="flex items-center gap-2" onClick={() => { window.scrollTo(0, 0); }}>
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
              <span className="text-primary font-bold text-[18px]">DJ</span>
            </div>
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Dhiraj &nbsp;<span className="sm:block hidden">| Data Scientist</span>
            </p>
          </a>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {['Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((nav) => (
              <li
                key={nav}
                className={`${
                  activeNav === nav ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
                onClick={() => setActiveNav(nav)}
              >
                <a href={`#${nav.toLowerCase()}`}>{nav}</a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <div 
              className="w-[28px] h-[28px] cursor-pointer flex items-center justify-center"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? <X className="w-full h-full text-white" /> : <Menu className="w-full h-full text-white" />}
            </div>

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-tertiary shadow-card`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {['Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((nav) => (
                  <li
                    key={nav}
                    className={`font-medium cursor-pointer text-[16px] ${
                      activeNav === nav ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActiveNav(nav);
                    }}
                  >
                    <a href={`#${nav.toLowerCase()}`}>{nav}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen mx-auto bg-primary bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#151030] via-[#050816] to-[#050816] overflow-hidden">
        {/* Floating Background Shapes */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-72 h-72 bg-[#915EFF] rounded-full mix-blend-multiply filter blur-[128px] opacity-20"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-[#00cea8] rounded-full mix-blend-multiply filter blur-[128px] opacity-20"
        />

        <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 z-10 pointer-events-none">
          <div className="flex flex-row items-start gap-5 flex-1 pointer-events-auto">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div className="pb-10">
              <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                Hi, I'm <span className="text-[#915EFF]">Dhiraj</span>
              </h1>
              <div className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 h-[80px]">
                <TypeAnimation
                  sequence={[
                    'I develop machine learning models',
                    2000,
                    'I analyze complex datasets',
                    2000,
                    'I build data-driven solutions',
                    2000,
                    'I create predictive analytics',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-[#00cea8]"
                />
              </div>
              
              <div className="flex flex-row gap-3 sm:gap-4 mt-10 flex-nowrap sm:overflow-visible overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <MagneticWrapper>
                  <a href="mailto:dhirajjadhav3579@gmail.com" className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-tertiary text-white rounded-xl hover:bg-[#915EFF] transition-colors shadow-card whitespace-nowrap text-sm sm:text-base">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    Email Me
                  </a>
                </MagneticWrapper>
                <MagneticWrapper>
                  <a href="https://github.com/dhiraj3579" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-tertiary text-white rounded-xl hover:bg-[#915EFF] transition-colors shadow-card whitespace-nowrap text-sm sm:text-base">
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    GitHub
                  </a>
                </MagneticWrapper>
                <MagneticWrapper>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-tertiary text-white rounded-xl hover:bg-[#915EFF] transition-colors shadow-card whitespace-nowrap text-sm sm:text-base">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    LinkedIn
                  </a>
                </MagneticWrapper>
              </div>

              <div className="mt-10 flex">
                <a 
                  href="#projects" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#915EFF] text-white font-bold rounded-full hover:bg-[#7a4be0] transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(145,94,255,0.4)] hover:shadow-[0_0_30px_rgba(145,94,255,0.6)]"
                >
                  View My Projects
                  <ArrowDown className="w-5 h-5 animate-bounce" />
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex-1 hidden md:flex justify-center items-center pointer-events-auto h-[400px] lg:h-[500px] w-full"
          >
            <Hero3DModel />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Skills Marquee Section */}
      <SkillsMarquee />

      {/* Experience Section */}
      <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span className="hash-span" id="experience">&nbsp;</span>
        <motion.div 
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">What I have done so far</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Work Experience</h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {EXPERIENCE.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{ background: "#1d1836", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  #232631" }}
                date={experience.period}
                iconStyle={{ background: experience.iconBg, color: "#fff" }}
                icon={experience.icon}
              >
                <div>
                  <h3 className="text-white text-[24px] font-bold">{experience.role}</h3>
                  <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                    {experience.company} • {experience.location}
                  </p>
                </div>

                <ul className="mt-5 list-disc ml-5 space-y-2">
                  {experience.achievements.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>

      {/* Projects Section */}
      <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span className="hash-span" id="projects">&nbsp;</span>
        <motion.div 
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My work</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through real-world examples of my work. 
            Each project reflects my ability to solve complex problems, work with different technologies, 
            and manage projects effectively.
          </motion.p>
        </div>

        <div className="mt-20 flex flex-wrap gap-7">
          {PROJECTS.map((project, index) => {
            return (
            <motion.div 
              variants={fadeIn("up", "spring", index * 0.15, 0.75)} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              key={`project-${index}`}
            >
              <Tilt
                options={{
                  max: 45,
                  scale: 1.03,
                  speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col hover:bg-black-200 transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(145,94,255,0.3)] border border-transparent hover:border-[#915EFF]/30 relative"
              >
                <GlowCard className="w-full h-full flex flex-col">
                  <div className="relative w-full h-[230px] z-10 mb-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-2xl"
                      referrerPolicy="no-referrer"
                    />
                    {project.source_code_link && (
                      <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                          onClick={() => window.open(project.source_code_link, "_blank")}
                          className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-md group"
                        >
                          <Github className="w-1/2 h-1/2 text-white group-hover:text-[#915EFF] group-hover:scale-110 transition-all duration-300" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-grow z-10">
                    <h3 className="text-white font-bold text-[24px]">{project.title}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 z-10">
                    {project.tags.map((tag) => (
                      <p key={`${project.title}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                        #{tag.name}
                      </p>
                    ))}
                  </div>
                </GlowCard>
              </Tilt>
            </motion.div>
            );
          })}
        </div>
      </section>

      {/* Skills Section */}
      <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span className="hash-span" id="skills">&nbsp;</span>
        <motion.div 
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">What I know</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Technical Skills</h2>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-10">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div 
              variants={fadeIn("right", "spring", index * 0.2, 0.75)} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              key={category.name}
              className="w-full sm:w-[350px]"
            >
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
              >
                <GlowCard className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[280px] flex justify-evenly items-center flex-col">
                  <div className="z-10 flex flex-col items-center">
                    {category.icon}
                    <h3 className="text-white text-[20px] font-bold text-center mt-4">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 mt-4 z-10">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span 
                        key={skill} 
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: (index * 0.2) + 0.4 + (skillIndex * 0.05)
                        }}
                        className="px-3 py-1 bg-black-100 text-secondary text-sm rounded-full hover:text-white hover:bg-[#915EFF] transition-colors cursor-default inline-block"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </GlowCard>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span className="hash-span" id="education">&nbsp;</span>
        <motion.div 
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My academic background</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Education</h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {EDUCATION.map((edu, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{ background: "#1d1836", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  #232631" }}
                date={edu.period}
                iconStyle={{ background: edu.iconBg, color: "#fff" }}
                icon={edu.icon}
              >
                <div>
                  <h3 className="text-white text-[24px] font-bold">{edu.degree}</h3>
                  <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                    {edu.institution}
                  </p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>

      {/* Contact Section */}
      <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span className="hash-span" id="contact">&nbsp;</span>
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
          >
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
            <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact</h3>

            <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New submission from your portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  disabled={isSubmitting}
                  placeholder="What's your good name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915EFF] disabled:opacity-50"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your email</span>
                <input
                  type="email"
                  name="email"
                  required
                  disabled={isSubmitting}
                  placeholder="What's your email address?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915EFF] disabled:opacity-50"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Message</span>
                <textarea
                  rows={7}
                  name="message"
                  required
                  disabled={isSubmitting}
                  placeholder="What you want to say?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none focus:ring-2 focus:ring-[#915EFF] disabled:opacity-50"
                />
              </label>

              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-sm font-medium">Thank you! Your message has been sent successfully.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm font-medium">Oops! Something went wrong. Please try again later.</p>
                )}
              </div>
            </form>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex flex-col justify-center items-center bg-black-100 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 z-0 opacity-50">
              <NetworkCanvas />
            </div>
            <div className="w-full h-full flex flex-col justify-center gap-8 z-10 relative pointer-events-none">
              <div className="mb-4">
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Direct Contact</p>
                <h3 className="text-white font-black md:text-[40px] sm:text-[30px] xs:text-[25px] text-[20px]">My Details</h3>
              </div>

              <div className="flex items-center gap-4 text-secondary hover:text-white transition-colors pointer-events-auto">
                <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[14px] uppercase tracking-wider">Email</p>
                  <p className="text-[18px] font-medium text-white">dhirajjadhav3579@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-secondary hover:text-white transition-colors pointer-events-auto">
                <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[14px] uppercase tracking-wider">Phone</p>
                  <p className="text-[18px] font-medium text-white">+91 80801 87063</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-secondary hover:text-white transition-colors pointer-events-auto">
                <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[14px] uppercase tracking-wider">Location</p>
                  <p className="text-[18px] font-medium text-white">Pune, MH, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="w-full py-8 text-center text-secondary text-sm">
        <p>© {new Date().getFullYear()} Dhiraj Jadhav. All rights reserved.</p>
      </footer>

      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            document.querySelector<HTMLTextAreaElement>('textarea[name="message"]')?.focus();
          }, 800);
        }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#915EFF] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#804dee] hover:scale-110 transition-all z-50 group"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-16 bg-white text-primary text-sm font-medium px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Have a question?
        </span>
      </motion.button>
    </div>
  );
}
