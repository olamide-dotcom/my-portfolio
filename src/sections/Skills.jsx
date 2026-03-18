import React, { useRef } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { skillGroups } from "../data/portfolio";

const Skills = () => {
  const ref = useRef();
  const fadeClass = useFadeIn(ref);

  return (
    <section id="skills" ref={ref} className={`content-section alt-section ${fadeClass}`}>
      <p className="section-kicker">Skills</p>
      <h2>Tools and skills I use most often.</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <div className="skills-badges">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
