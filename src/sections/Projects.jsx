import React, { useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import useFadeIn from "../hooks/useFadeIn";
import { projects } from "../data/portfolio";

const Projects = () => {
  const ref = useRef();
  const fadeClass = useFadeIn(ref);

  return (
    <section id="projects" ref={ref} className={`content-section ${fadeClass}`}>
      <p className="section-kicker">Selected Work</p>
      <h2>Projects built to show product thinking, not just code.</h2>
      <p className="section-intro">
        These projects highlight how I approach interface structure, API-driven
        experiences, and responsive frontend implementation.
      </p>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
