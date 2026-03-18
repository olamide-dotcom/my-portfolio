import React, { useRef } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { profile, strengths } from "../data/portfolio";

const About = () => {
  const ref = useRef();
  const fadeClass = useFadeIn(ref);

  return (
    <section
      id="about"
      ref={ref}
      className={`content-section about-section ${fadeClass}`}
    >
      <div className="about-copy">
        <p className="section-kicker">About</p>
        <h2>Frontend development is where I feel most comfortable.</h2>
        <p className="section-intro">{profile.intro}</p>
        <p className="about-location">
          Based in {profile.location}. {profile.availability}
        </p>
      </div>
      <div className="about-list">
        {strengths.map((strength) => (
          <div key={strength} className="strength-item">
            <span className="strength-marker" />
            <p>{strength}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
