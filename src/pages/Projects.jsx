import React from "react";
import portfolio from "../assets/Portfolio.png";
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
    description: "A full-stack e-commerce product and cart page with React & Node.js.",
    image: "https://via.placeholder.com/400",
    link: "https://hemantsingh1909.github.io/CartFunctionality/",
    github: "https://github.com/Hemantsingh1909/CartFunctionality",
  },
  {
    id: 3,
    title: "Medical Image Classifier",
    description: "A deep learning model for medical image classification using PyTorch.",
    image: "https://via.placeholder.com/400",
    link: "https://yourprojectlink.com",
    github: "https://github.com/yourusername/medical-classifier",
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.links}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
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
