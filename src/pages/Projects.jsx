import React from "react";
import portfolio from "../assets/Portfolio.png";
import startup from "../assets/startup.png";
import cartfunctionality from "../assets/cartfunctionality.png";
import projectEarth from "../assets/projectEarth.png";
import rangerover from "../assets/rangerover.png";
import styles from "../styles/Projects.module.css"; // Import CSS module
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with React & Tailwind CSS.",
    image: portfolio,
    link: "https://portfolio-hemantsingh1909s-projects.vercel.app/",
    github: "https://github.com/Hemantsingh1909/portfolio",
    tags: ["React", "Tailwind CSS", "Vite"],
  },
  {
    id: 2,
    title: "E-Commerce Cart Functionality",
    description:
      "A full-stack e-commerce product and cart page with React & Node.js.",
    image: cartfunctionality,
    link: "https://cart-functionality-beta.vercel.app/",
    github: "https://github.com/Hemantsingh1909/CartFunctionality",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "E-Commerce Startup",
    description:
      "An e-commerce Jwellery store for a client built with React & Tailwind CSS.",
    image: startup,
    link: "https://jumkasbymahira.vercel.app/",
    github: "https://github.com/Hemantsingh1909/jumkasbymahira",
    tags: ["React", "Tailwind CSS", "E-commerce"],
  },
  {
    id: 4,
    title: "Project Earth",
    description:
      "A web application for Project Earth built with React & Tailwind CSS.",
    image: projectEarth,
    link: "https://project-earth-three.vercel.app/",
    github: "https://github.com/Hemantsingh1909/projectEarth",
    tags: ["React", "Tailwind CSS", "Environmental"],
  },
  {
    id: 5,
    title: "Range Rover Demo",
    description:
      "Demo Website inspired from Range Rover using React & Tailwind CSS.",
    image: rangerover,
    link: "https://range-rover-demo-ten.vercel.app/",
    github: "https://github.com/Hemantsingh1909/RangeRoverDemo",
    tags: ["React", "Tailwind CSS", "Environmental"],
  },
];

const Projects = () => {
  return (
    <div className="bg-white py-16 sm:py-18 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project showcases my
            skills in different technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="relative pb-[60%] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-cover object-center"
                  loading="lazy"
                  width="600"
                  height="360"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs sm:text-sm font-medium bg-primary-100 text-primary-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm sm:text-base text-gray-600 hover:text-primary-600 transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <FaGithub className="mr-1 text-lg sm:text-xl" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm sm:text-base text-primary-600 hover:text-primary-800 transition-colors"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <span>Live Demo</span>
                    <HiExternalLink className="ml-1 text-lg sm:text-xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
