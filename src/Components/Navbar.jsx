import React from 'react'
import logo from "../assets/pk-lg2.png"
import { FaLinkedin, FaGithub, FaMedium, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-12' src={logo} alt="logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/prnshjh/"><FaLinkedin></FaLinkedin></a>
        <a href="https://github.com/prnshjh"><FaGithub></FaGithub></a>
        <a href="https://priyanshuwrites.medium.com/"><FaMedium></FaMedium></a>
        <a href="https://leetcode.com/u/prnshjh/"><SiLeetcode /></a>
        <a href="https://www.geeksforgeeks.org/user/prnshjh/"><SiGeeksforgeeks /></a>
        <a href="https://codeforces.com/profile/prnshjh"><SiCodeforces /></a>
        <a href="https://www.codechef.com/users/prnshjh"><SiCodechef /></a>

        <a href="https://www.instagram.com/priyanshujha.19/"><FaInstagram></FaInstagram></a>


      </div>
    </nav>
  )
}

export default Navbar