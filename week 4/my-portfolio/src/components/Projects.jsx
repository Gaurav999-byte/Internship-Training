import React from 'react';
import styles from './Projects.module.css';

const projectsData = [
  { id: 1, title: "Portfolio Website", description: "Responsive portfolio built with React." },
  { id: 2, title: "ToDo App", description: "Task management using React hooks." },
];

const Projects = () => (
  <section className={styles.projects} id="projects">
    {projectsData.map(project => (
      <div key={project.id} className={styles.card}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    ))}
  </section>
);

export default Projects;