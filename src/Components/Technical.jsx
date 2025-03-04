import React from 'react';
import { 
  RiReactjsLine 
} from 'react-icons/ri';
import { 
  TbBrandNextjs 
} from 'react-icons/tb';
import { 
  SiMongodb, SiExpress, SiHtml5, SiCss3, SiTailwindcss, SiTensorflow, 
  SiGit, SiGithub, SiDocker, SiPostman, SiC, SiCplusplus, 
  SiPython, SiMysql, SiJavascript, SiTypescript 
} from 'react-icons/si';
import { FaNodeJs, FaJava } from 'react-icons/fa'; 

const Technical = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiCplusplus className='text-6xl text-blue-700' />
        </div>
     
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiPython className='text-6xl text-yellow-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMysql className='text-6xl text-blue-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiJavascript className='text-6xl text-yellow-300' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiTypescript className='text-6xl text-blue-500' />
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiTailwindcss className='text-6xl text-sky-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-6xl text-cyan-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <TbBrandNextjs className='text-6xl text-neutral-300' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className='text-6xl text-green-300' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiExpress className='text-6xl text-neutral-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb className='text-6xl text-green-600' />
        </div>
        

  
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiGit className='text-6xl text-orange-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiGithub className='text-6xl text-white' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiDocker className='text-6xl text-blue-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiPostman className='text-6xl text-orange-500' />
        </div>

      </div>
    </div>
  );
}

export default Technical;
