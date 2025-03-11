import React from "react";
import portfolio from "../assets/Portfolio.png";
import startup from "../assets/startup.png";
import cartfunctionality from "../assets/cartfunctionality.png";
import styles from "../styles/Projects.module.css"; // Import CSS module

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with React & Tailwind CSS.",
    image: portfolio,
    link: "https://portfolio-hemantsingh1909s-projects.vercel.app/",
    github: "https://github.com/Hemantsingh1909/portfolio",
  },
  {
    id: 2,
    title: "E-Commerce Cart Functionality",
    description:
      "A full-stack e-commerce product and cart page with React & Node.js.",
    image: cartfunctionality,
    link: "https://cart-functionality-beta.vercel.app/",
    github: "https://github.com/Hemantsingh1909/CartFunctionality",
  },
  {
    id: 3,
    title: "E-commerce Startup",
    description:
      "An e-commerce Jwellery store for a client built with React & Tailwind CSS.",
    image: startup,
    link: "https://jumkasbymahira.vercel.app/",
    github: "https://github.com/Hemantsingh1909/jumkasbymahira",
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.links}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
