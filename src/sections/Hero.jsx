import React, { useRef } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { highlights, profile } from "../data/portfolio";

const Hero = () => {
  const ref = useRef();
  const fadeClass = useFadeIn(ref);

  return (
    <section id="home" ref={ref} className={`hero-section ${fadeClass}`}>
      <div className="hero-copy">
        <p className="section-kicker">Portfolio</p>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
        <p className="hero-summary">{profile.summary}</p>
        <p className="hero-availability">{profile.availability}</p>
        <div className="btn-group">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href={profile.resumeUrl} className="btn-secondary">
            {profile.resumeLabel}
          </a>
        </div>
      </div>
      <div className="hero-panel">
        <p className="panel-title">Quick summary</p>
        <p>
          I enjoy building simple interfaces that are responsive, readable, and
          easy to use.
        </p>
        <div className="hero-highlights">
          {highlights.map((item) => (
            <div key={item.label} className="highlight-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
