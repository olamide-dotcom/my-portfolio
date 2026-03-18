import React, { useRef } from "react";
import useFadeIn from "../hooks/useFadeIn";

const ProjectCard = ({ title, description, outcome, tech, live, github }) => {
  const ref = useRef();
  const fadeClass = useFadeIn(ref);

  return (
    <article ref={ref} className={`project-card ${fadeClass}`}>
      <div className="project-card-header">
        <p className="project-label">Featured Project</p>
        <h3>{title}</h3>
      </div>
      <p className="project-description">{description}</p>
      <p className="project-outcome">{outcome}</p>
      <div className="tech-tags">
        {tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="links">
        <a href={live} target="_blank" rel="noopener noreferrer">
          Live Site
        </a>
        {github ? (
          <a href={github} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        ) : (
          <span className="project-note">Code available on request</span>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
