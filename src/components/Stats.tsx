import React from 'react';
import { motion } from 'motion/react';

const STATS = [
  { id: 1, title: "Projects Completed", value: "15+" },
  { id: 2, title: "Years Experience", value: "2+" },
  { id: 3, title: "Data Models Built", value: "20+" },
  { id: 4, title: "Lines of Code", value: "50k+" },
];

const Stats = () => {
  return (
    <section className="sm:px-16 px-6 sm:pb-16 pb-10 max-w-7xl mx-auto relative z-0">
      <div className="flex flex-wrap justify-center gap-10">
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center bg-tertiary/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 min-w-[200px] hover:border-[#915EFF]/50 transition-colors shadow-card"
          >
            <h4 className="text-white font-black text-[40px] mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#00cea8]">
              {stat.value}
            </h4>
            <p className="text-secondary text-[16px] font-medium uppercase tracking-wider text-center">
              {stat.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
