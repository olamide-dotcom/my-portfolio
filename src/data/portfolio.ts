import portraitImg from "@/assets/potrait.jpg";
import projectFood from "@/assets/project-food.jpg";
import projectMovie from "@/assets/project-movie.jpg";
import projectTodo from "@/assets/project-todo.jpg";

export const PORTRAIT = portraitImg;

export const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Craft", href: "#craft" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = [
  {
    title: "Languages",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Frontend",
    items: ["React", "Tailwind CSS", "Vite"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma"],
  },
  {
    title: "Other",
    items: ["SEO", "Google Ads", "Data Analysis", "AI Annotation"],
  },
];

export const PROJECTS = [
  {
    index: "01",
    title: "Food Ordering",
    tagline: "A clean ordering ritual.",
    description:
      "A responsive food ordering interface where users browse meals, add items to a shopping cart, and enjoy a clean, unhurried checkout experience.",
    features: ["Shopping Cart", "Responsive UI", "Modern Food Cards", "Clean UX"],
    tech: ["React", "JavaScript", "CSS"],
    href: "https://food-ordering-app-three-beta.vercel.app",
    image: projectFood,
    stats: [
      { k: "12+", v: "Components" },
      { k: "100%", v: "Responsive" },
    ],
  },
  {
    index: "02",
    title: "Movie Search",
    tagline: "Discovery, distilled.",
    description:
      "A movie discovery application using an external API where users search for movies and browse trending titles with dynamic rendering.",
    features: ["API Integration", "Search", "Popular Movies", "Dynamic Rendering"],
    tech: ["React", "JavaScript", "REST API"],
    href: "https://movie-app-gamma-jade.vercel.app/#popular",
    image: projectMovie,
    stats: [
      { k: "", v: "Live API" },
      { k: "", v: "Catalog" },
      { k: "", v: "Interactions" },
    ],
  },
  {
    index: "03",
    title: "To-Do",
    tagline: "Quiet productivity.",
    description:
      "A productivity app that lets users manage daily tasks efficiently  with filtering, local persistence, and a calm, focused interface.",
    features: [" Operations", "Task Filtering", "Local Storage", "Responsive Design"],
    tech: ["React", "JavaScript", "CSS"],
    href: "https://to-do-app-ten-ebon-58.vercel.app",
    image: projectTodo,
    stats: [
      { k: "", v: "Full cycle" },
      { k: "", v: "Backend" },
      { k: "", v: "Keyboard-first" },
    ],
  },
];

export const JOURNEY = [
  {
    year: "Step 01",
    title: "Started Frontend Development",
    body: "First commits — HTML, CSS, and the joy of seeing pixels respond.",
  },
  {
    year: "Step 02",
    title: "Learning React",
    body: "Components, state, and a new mental model for interfaces.",
  },
  {
    year: "Step 03",
    title: "Building Real Projects",
    body: "Shipping interfaces from blank file to deployed URL.",
  },
  {
    year: "Step 04",
    title: "Working with APIs",
    body: "Fetching, caching, and designing for asynchronous truth.",
  },
  {
    year: "Step 05",
    title: "Responsive Design",
    body: "One layout, every screen — fluid type, intentional spacing.",
  },
  {
    year: "Step 06",
    title: "Performance Optimization",
    body: "Lighthouse as a daily ritual, not a final check.",
  },
  {
    year: "Step 07",
    title: "Continuous Learning",
    body: "Motion, accessibility, design systems — always next.",
  },
];

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Olamide-dotcom" },
  { label: "Email", href: "mailto:ireolami02@gmail.com" },
  { label: "Phone", href: "tel:+2348145334390" },
];
