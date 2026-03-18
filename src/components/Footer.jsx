import React from "react";
import { profile } from "../data/portfolio";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2026 {profile.name}. Built for a hiring-ready frontend presence.</p>
    </footer>
  );
};

export default Footer;
