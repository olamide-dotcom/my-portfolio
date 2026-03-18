import React, { useRef } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { experienceItems } from "../data/portfolio";

const Experience = () => {
  const ref = useRef();
  const fadeClass = useFadeIn(ref);

  return (
    <section id="experience" ref={ref} className={`content-section ${fadeClass}`}>
      <p className="section-kicker">What I&apos;ve been working on</p>
      <h2>Most of my experience so far comes from personal projects.</h2>
      <p className="section-intro">
        I have been using personal projects to get more comfortable with React,
        APIs, deployment, and writing cleaner frontend code.
      </p>
      <div className="experience-grid">
        {experienceItems.map((item) => (
          <article key={item.title} className="experience-card">
            <p className="experience-period">{item.period}</p>
            <h3>{item.title}</h3>
            <p className="experience-subtitle">{item.subtitle}</p>
            <p className="experience-description">{item.description}</p>
            <div className="experience-points">
              {item.points.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
