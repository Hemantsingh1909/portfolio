import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  HiCode,
  HiDesktopComputer,
  HiLightBulb,
  HiServer,
} from "react-icons/hi";

const skills = [
  {
    icon: <HiCode className="h-5 w-5 sm:h-6 sm:w-6 text-primary-500" />,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with React, JavaScript, HTML, and CSS/Tailwind.",
  },
  {
    icon: <HiServer className="h-5 w-5 sm:h-6 sm:w-6 text-primary-500" />,
    title: "Model Building",
    description:
      "Creating robust models using machine learning and deep learning techniques.",
  },
  {
    icon: (
      <HiDesktopComputer className="h-5 w-5 sm:h-6 sm:w-6 text-primary-500" />
    ),
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing interfaces that enhance user experience.",
  },
  {
    icon: <HiLightBulb className="h-5 w-5 sm:h-6 sm:w-6 text-primary-500" />,
    title: "Problem Solving",
    description:
      "Analytical thinking and creative problem-solving to overcome technical challenges.",
  },
];

const About = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 max-w-7xl mx-auto lg:mt-20 mt-12 sm:mt-16 md:mt-20">
      {/* About Me Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-20">
        <div className="space-y-4 sm:space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs sm:text-sm font-medium">
            About Me
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 break-words">
            Better design, <br className="hidden sm:block" />
            better experience
          </h2>
          <p className="text-base sm:text-lg text-secondary-600 leading-relaxed">
            I’m a passionate software developer with expertise in building
            modern, scalable web applications. With a strong foundation in both
            frontend and backend technologies, I focus on crafting intuitive,
            high-performance solutions that address real-world challenges.
          </p>
          <p className="text-base sm:text-lg text-secondary-600 leading-relaxed">
            My expertise spans data-driven model building, optimization, and
            insights generation, leveraging cutting-edge AI techniques to
            extract meaningful patterns and drive impactful decisions. I combine
            technical excellence with creative problem-solving to ensure that
            every project I work on is both highly functional and delivers an
            exceptional user experience.
          </p>
        </div>

        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-soft cursor-default">
          <h3 className="text-xl sm:text-2xl font-semibold text-secondary-900 mb-4 sm:mb-6">
            My Journey
          </h3>
          <div className="space-y-4">
            <div className="border-l-2 hover:border-primary-600 pl-3 sm:pl-4 py-2 transition-all duration-300 hover:shadow-xl rounded-md transform hover:-translate-y-1">
              <h4 className="font-medium text-secondary-900">
                Master of Technology (Data Science)
              </h4>
              <p className="text-primary-600 text-sm sm:text-base">
                Apr 2024 - Present
              </p>
              <p className="text-secondary-600 mt-1 text-sm sm:text-base">
                Applying machine learning and deep learning techniques to
                real-world problems.
              </p>
            </div>
            <div className="border-l-2 hover:border-primary-600 pl-3 sm:pl-4 py-2 transition-all duration-300 hover:shadow-xl rounded-md transform hover:-translate-y-1">
              <h4 className="font-medium text-secondary-900">
                Software Developer
              </h4>
              <p className="text-primary-600 text-sm sm:text-base">
                Jan 2021 - Apr 2023
              </p>
              <p className="text-secondary-600 mt-1 text-sm sm:text-base">
                Working on various web development projects using modern
                technologies.
              </p>
            </div>
            <div className="border-l-2 hover:border-primary-600 pl-3 sm:pl-4 py-2 transition-all duration-300 hover:shadow-xl rounded-md transform hover:-translate-y-1">
              <h4 className="font-medium text-secondary-900">
                Master of Technology (Computer Science)
              </h4>
              <p className="text-primary-600 text-sm sm:text-base">
                Apr 2017 - Dec 2021
              </p>
              <p className="text-secondary-600 mt-1 text-sm sm:text-base">
                Studied computer science with a focus on web technologies and
                software engineering.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-12 sm:mb-16 md:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs sm:text-sm font-medium">
            My Skills
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mt-2">
            What I Bring to the Table
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="bg-primary-50 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-secondary-900 mb-1 sm:mb-2 break-words">
                    {skill.title}
                  </h3>
                  <p className="text-secondary-600 text-sm sm:text-base">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Connect Section */}
      <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-6 sm:p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-3 sm:mb-4">
            Let's Connect
          </h2>
          <p className="text-secondary-600 text-base sm:text-lg mb-6 sm:mb-8">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <a
              href="https://www.linkedin.com/in/hemantsatwal/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-secondary-900 p-2 sm:p-3 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://github.com/Hemantsingh1909"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-secondary-900 p-2 sm:p-3 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
