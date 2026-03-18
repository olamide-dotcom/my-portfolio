import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contacts";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme || "light";
  });
  const [isThemeChanging, setIsThemeChanging] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;

    const handlePointerMove = (event) => {
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
      root.style.setProperty("--cursor-opacity", "1");
    };

    const handlePointerLeave = () => {
      root.style.setProperty("--cursor-opacity", "0");
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  useEffect(() => {
    if (!isThemeChanging) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setIsThemeChanging(false);
    }, 900);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isThemeChanging]);

  const toggleTheme = () => {
    setIsThemeChanging(true);
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`app-shell theme-${theme} ${isThemeChanging ? "theme-shift" : ""}`}
    >
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />
      <div className="grid-glow" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
