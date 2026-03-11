import React from 'react';
import { motion } from 'motion/react';
import { Code2, Database, BrainCircuit, LineChart, Terminal } from 'lucide-react';

const SKILLS = [
  { name: "Python", icon: <Code2 /> },
  { name: "TensorFlow", icon: <BrainCircuit /> },
  { name: "PyTorch", icon: <BrainCircuit /> },
  { name: "SQL", icon: <Database /> },
  { name: "Tableau", icon: <LineChart /> },
  { name: "Power BI", icon: <LineChart /> },
  { name: "React", icon: <Code2 /> },
  { name: "Node.js", icon: <Terminal /> },
  { name: "Machine Learning", icon: <BrainCircuit /> },
  { name: "NLP", icon: <Terminal /> },
  { name: "Data Science", icon: <LineChart /> },
];

const SkillsMarquee = () => {
  return (
    <div className="w-full py-12 overflow-hidden relative flex items-center">
      <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap gap-8 items-center"
        animate={{
          x: [0, -1035],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {/* Duplicate the array twice to ensure seamless looping */}
        {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-3 bg-black-200/50 rounded-full border border-white/10 hover:border-[#915EFF]/50 transition-colors cursor-default"
          >
            <span className="text-[#00cea8] w-5 h-5">{skill.icon}</span>
            <span className="text-white font-medium text-lg">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsMarquee;
