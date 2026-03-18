import React, { useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import useFadeIn from "../hooks/useFadeIn";
import { projects } from "../data/portfolio";

const Projects = () => {
  const ref = useRef();
  const fadeClass = useFadeIn(ref);

  return (
    <section id="projects" ref={ref} className={`content-section ${fadeClass}`}>
      <p className="section-kicker">Projects</p>
      <h2>A few projects I&apos;ve built while learning and improving.</h2>
      <p className="section-intro">
        These are the projects I usually use to show how I work with React,
        APIs, state, and responsive layouts.
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
