import React, { useRef } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { profile } from "../data/portfolio";

const Navbar = ({ theme, onToggleTheme }) => {
  const ref = useRef();
  const fadeClass = useFadeIn(ref);

  return (
    <nav ref={ref} className={`navbar ${fadeClass}`}>
      <a className="brand-mark" href="#home">
        {profile.name}
      </a>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <button
        type="button"
        className={`theme-toggle ${theme}`}
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        <span className="toggle-track">
          <span className="toggle-thumb" />
        </span>
        <span className="toggle-label">
          {theme === "light" ? "Dark mode" : "Light mode"}
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
