import React from "react";
import profileImage from "../assets/profile.png";
import { useNavigate } from "react-router-dom";
import { HiArrowRight, HiMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:pt-20 lg:pb-10">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-2">
            Software Developer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight">
            Hi, I'm <span className="text-primary-600">Hemant Satwal</span>
          </h1>

          <p className="text-base sm:text-lg text-secondary-600 max-w-lg mx-auto lg:mx-0">
            I build modern, responsive web applications with clean and efficient
            code. Transforming ideas into digital reality through thoughtful
            design and development.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/hemantsatwal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-600 hover:text-primary-600 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://github.com/Hemantsingh1909"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-600 hover:text-primary-600 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="mailto:hemantsingh1909@gmail.com"
              className="text-secondary-600 hover:text-primary-600 transition-colors duration-300"
              aria-label="Email"
            >
              <HiMail className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-3 sm:pt-4">
            <button
              type="button"
              onClick={() => navigate("/projects")}
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300"
            >
              View My Work
              <HiArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-secondary-300 text-sm sm:text-base font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="lg:w-1/2 relative flex justify-center mb-8 lg:mb-0 order-1 lg:order-2">
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl px-4 sm:px-0">
            {/* Blue Background Shape */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-3/4 h-3/4 bg-blue-900 rounded-full opacity-20 blur-3xl" />
            </div>

            {/* Profile Image */}
            <div className="relative z-10">
              <img
                src={profileImage}
                alt="Hemant Satwal"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
