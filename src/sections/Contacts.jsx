import React, { useRef } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { contactLinks, contactNote } from "../data/portfolio";

const Contact = () => {
  const ref = useRef();
  const fadeClass = useFadeIn(ref);

  return (
    <section id="contact" ref={ref} className={`content-section contact-section ${fadeClass}`}>
      <p className="section-kicker">Contact</p>
      <h2>Ready for interviews, freelance work, and frontend opportunities.</h2>
      <p className="section-intro">
        If you&apos;re hiring for a frontend role, I&apos;d love to share more
        about my process, projects, and how I can contribute to your team.
      </p>
      <div className="contact-actions">
        <a className="btn-primary" href="mailto:ireolami02@gmail.com">
          Email Me
        </a>
        <a className="btn-secondary" href="#home">
          Back to Top
        </a>
      </div>
    </section>
  );
};

export default Contact;
