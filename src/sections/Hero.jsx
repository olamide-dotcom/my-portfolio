import React, { useRef } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { highlights, profile } from "../data/portfolio";

const Hero = () => {
  const ref = useRef();
  const fadeClass = useFadeIn(ref);

  return (
    <section id="home" ref={ref} className={`hero-section ${fadeClass}`}>
      <div className="hero-copy">
        <div className="glass-sheen" aria-hidden="true" />
        <p className="section-kicker">My Portfolio</p>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
        <p className="hero-summary">{profile.summary}</p>
        <p className="hero-recruiter-copy">{profile.recruiterPitch}</p>
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
        <div className="glass-sheen" aria-hidden="true" />
        <p className="panel-title">Why hire me</p>
        <p>
          I focus on frontend work that looks polished, loads fast, and feels
          intuitive for real users across devices.
        </p>
        <div className="hero-highlights">
          {highlights.map((item) => (
            <div key={item.label} className="highlight-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="hero-orbit">
          <span className="orbit-ring orbit-ring-one" />
          <span className="orbit-ring orbit-ring-two" />
          <span className="orbit-core" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
