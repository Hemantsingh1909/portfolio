import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const About = () => {
  return (
    <div className='relative max-w-full flex h-screen'>
      <div className='flex max-w-full justify-around'>
        {/* Left Section */}
        <div className='w-2/6 tracking-wide flex flex-col justify-center'>
          <h2 className='text-[#496CF6] text-2xl pb-1 font-bold'>ABOUT ME</h2>
          <h1 className='text-5xl pb-8 font-bold text-black'>Better design, <br />better experience</h1>
          <p className='font-medium opacity-50'>I’m passionate about creating intuitive and visually appealing designs that enhance user experience. With a keen eye for detail and a deep understanding of design principles, I strive to deliver elegant and functional solutions.</p>
        </div>

        {/* Right Section */}
        <div className='w-2/6 flex flex-col justify-center'>
          <h2 className='text-black font-medium pb-8 text-4xl'>Connect With Me</h2>
          <p className='font-medium opacity-50'>Let’s collaborate and bring ideas to life! Whether you have a project in mind or just want to connect, feel free to reach out. I’d love to hear from you!</p>
          
          {/* Social Icons */}
          <div className="social-icons flex gap-4 pt-5">
            <SocialIcon icon={FaFacebook} href="https://facebook.com/username" />
            <SocialIcon icon={FaTwitter} href="https://twitter.com/username" />
            <SocialIcon icon={FaYoutube} href="https://youtube.com/username" />
            <SocialIcon icon={FaLinkedin} href="https://linkedin.com/in/username" />
            <SocialIcon icon={FaGithub} href="https://github.com/username" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Social Icon Component
const SocialIcon = ({ icon: Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-[#496CF6] transition duration-300">
    <Icon />
  </a>
);

export default About;
