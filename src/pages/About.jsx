import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter, FaYoutube} from'react-icons/fa'

const About = () => {
  return (
    <>
      <div className='relative max-w-full flex h-screen'>
      <div className='flex max-w-full justify-around'>
        <div className='w-2/6 tracking-wide flex flex-col justify-center'>
            <h2 className='text-[#496CF6] text-2xl pb-1 font-bold'>ABOUT ME</h2>
            <h1 className='text-5xl pb-8 font-bold text-black'>Better design, <br />better experience</h1>
            <p className='font-medium opacity-50'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, vero?</p>
        </div>
        <div className='w-2/6 flex flex-col justify-center'>
            <h2 className='text-black font-medium pb-8 text-4xl'>Connect With Me</h2>
            <p className='font-medium opacity-50'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates exercitationem commodi et corrupti minima aperiam vero, reiciendis adipisci molestias aliquam.</p>
            <div className="social-icons flex gap-4 pt-5">
            <SocialIcon icon={FaFacebook} href="https://linkedin.com/in/username" />
            <SocialIcon icon={FaTwitter} href="https://twitter.com/username" />
            <SocialIcon icon={FaYoutube} href="https://youtube.com/username" />
            <SocialIcon icon={FaLinkedin} href="https://linkedin.com/in/username" />
            <SocialIcon icon={FaGithub} href="https://github.com/username" />
            </div>
        </div>
       </div>
      </div>
    </>
  )
}

export default About
