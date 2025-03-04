import React from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

const Contributions = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }} viewport={{ once: true }}  className='my-20 text-center text-4xl'>Contributions</motion.h2>
        <motion.div whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }} viewport={{ once: true }}  className="flex justify-center">
        <GitHubCalendar
          username="prnshjh"
          className="max-w-full mb-3"
        />
      </motion.div>
    </div>
  );
};

export default Contributions;
