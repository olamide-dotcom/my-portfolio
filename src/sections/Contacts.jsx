import React, { useRef } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { contactLinks } from "../data/portfolio";

const Contact = () => {
  const ref = useRef();
  const fadeClass = useFadeIn(ref);

  return (
    <section id="contact" ref={ref} className={`content-section contact-section ${fadeClass}`}>
      <p className="section-kicker">Contact</p>
      <h2>Want to reach out?</h2>
      <p className="section-intro">
        I&apos;m open to frontend roles, freelance work, and conversations about
        projects I&apos;ve built.
      </p>
      <div className="contact-actions">
        <a className="btn-primary" href={contactLinks[0].href}>
          Email Me
        </a>
        <a className="btn-secondary" href="#home">
          Back to Top
        </a>
      </div>
      <div className="contact-grid">
        {contactLinks.map((item) => (
          <a
            key={item.label}
            className="contact-card"
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
