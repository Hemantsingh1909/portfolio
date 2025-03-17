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
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <article key={project.id} className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className={styles.projectImage}
                loading="lazy"
              />
              <div className={styles.projectOverlay}>
                <div className={styles.projectLinks}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label={`Visit live demo of ${project.title}`}
                  >
                    <HiExternalLink className={styles.projectIcon} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label={`View source code for ${project.title} on GitHub`}
                  >
                    <FaGithub className={styles.projectIcon} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
