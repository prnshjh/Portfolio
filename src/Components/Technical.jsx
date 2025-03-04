import React from 'react';
import { 
  RiReactjsLine 
} from 'react-icons/ri';
import { 
  TbBrandNextjs 
} from 'react-icons/tb';
import { 
  SiMongodb, SiExpress, SiTailwindcss, 
  SiGit, SiGithub, SiDocker, SiPostman, SiCplusplus, 
  SiPython, SiMysql, SiJavascript, SiTypescript 
} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa'; 
import { motion } from "framer-motion";

const iconMotionL = (duration) => ({
  
  hidden: { x: -100, opacity: 0 }, 
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { duration: 1 } 
    
  },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    },
  },
  
}) ;

const iconMotionR = (duration) => ({
  hidden: { x: 100, opacity: 0 },  
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { duration: 1 } 
  },
  animate: {
    y: [-10, 10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    },
  },
});

const technologies = [
  { icon: <SiCplusplus className="text-6xl text-blue-700" />, motion: iconMotionL(2.5) },
  { icon: <SiPython className="text-6xl text-yellow-500" />, motion: iconMotionL(2.5) },
  { icon: <SiMysql className="text-6xl text-blue-400" />, motion: iconMotionL(3) },
  { icon: <SiJavascript className="text-6xl text-yellow-300" />, motion: iconMotionL(4) },
  { icon: <SiTypescript className="text-6xl text-blue-500" />, motion: iconMotionL(5) },
  { icon: <SiTailwindcss className="text-6xl text-sky-400" />, motion: iconMotionR(2) },
  { icon: <RiReactjsLine className="text-6xl text-cyan-400" />, motion: iconMotionR(7) },
  { icon: <TbBrandNextjs className="text-6xl text-neutral-300" />, motion: iconMotionR(4) },
  { icon: <FaNodeJs className="text-6xl text-green-300" />, motion: iconMotionR(2.5) },
  { icon: <SiExpress className="text-6xl text-neutral-400" />, motion: iconMotionR(3) },
  { icon: <SiMongodb className="text-6xl text-green-600" />, motion: iconMotionL(4) },
  { icon: <SiGit className="text-6xl text-orange-500" />, motion: iconMotionL(5) },
  { icon: <SiGithub className="text-6xl text-white" />, motion: iconMotionL(7) },
  { icon: <SiDocker className="text-6xl text-blue-400" />, motion: iconMotionR(4) },
  { icon: <SiPostman className="text-6xl text-orange-500" />, motion: iconMotionR(3) },
];

const Technical = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }} 
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }} 
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={tech.motion}
            initial="hidden"
            whileInView="visible"
            animate="animate"
            viewport={{ once: true }} 
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div> 
    </div>
  );
};

export default Technical;
