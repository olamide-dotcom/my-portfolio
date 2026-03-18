import React, { useRef } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { experienceItems, recruiterPoints } from "../data/portfolio";

const Experience = () => {
  const ref = useRef();
  const fadeClass = useFadeIn(ref);

  return (
    <section id="experience" ref={ref} className={`content-section ${fadeClass}`}>
      <p className="section-kicker">Experience</p>
      <h2>Project-based experience</h2>
      <p className="section-intro">
        While building toward a formal frontend role, I&apos;ve been treating my
        portfolio work like real product delivery: clear scope, clean UI,
        reusable code, and deployment-ready results.
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
      <div className="recruiter-panel">
        <p className="panel-title">Recruiter Snapshot</p>
        <div className="recruiter-points">
          {recruiterPoints.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
