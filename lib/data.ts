import React from "react";
// import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import personalPortfolio from "@/public/nextjs-portfolio.png";
import shoppingHub from "@/public/shopping-hub-ecommerce.png";
import foodeRecipeFinder from "@/public/Foode-nextjs.png";
import banking from "@/public/Banking-website.png";
import gAIa from "@/public/gAIa.png";
import gaiaLandingPage from "@/public/gaiaLandingPage.png";
// import dashboard from "@/public/Dashboard.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const projectsData = [
  {
    title: "gAIa — Landing Page",
    description:
      "Marketing and product landing page for the gAIa platform by Lucidminds. Showcases the living tree map concept, ecosystem services visualization, and community contribution model. Backed by Dutch government partners RVO and PNH.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: gaiaLandingPage,
    websiteUrl: "https://gaia.gus.earth",
  },
  {
    title: "gAIa — AI Tree Map",
    description:
      "Interactive urban forest map built for Lucidminds. Users explore city trees, add new ones, and chat with an AI assistant that knows everything about tree species, urban ecology, and environmental impact. Built with real municipal datasets and live AI integration.",
    tags: [
      "Next.js",
      "TypeScript",
      "Mapbox",
      "Zustand",
      "AI/LLM",
      "Tailwind CSS",
    ],
    imageUrl: gAIa,
    websiteUrl: "https://ai.gus.earth",
  },
  // {
  //   title: "Personal Portfolio",
  //   description:
  //     "This portfolio — built to reflect my work and technical range. Features scroll-driven animations, dark mode, section-based navigation, and a clean, responsive layout designed to feel fast and intentional.",
  //   tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  //   imageUrl: personalPortfolio,
  //   websiteUrl: "https://muhammed-mohsen.netlify.app/",
  // },
  {
    title: "Shopping Hub",
    description:
      "Full-featured e-commerce frontend with category filtering, product detail pages, and real-time search. Focused on scalable state management and a smooth shopping UX.",
    tags: ["React", "Redux Toolkit", "React Router", "Hooks"],
    imageUrl: shoppingHub,
    websiteUrl: "https://shopping-hub-e-commerce-react.netlify.app/",
  },
  {
    title: "Foode — Recipe Finder",
    description:
      "Recipe discovery app that lets users browse meals by country of origin. Clean UI with dynamic filtering and API-driven content, built to practice Next.js data fetching patterns.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    imageUrl: foodeRecipeFinder,
    websiteUrl: "https://foode-recipe-finder.netlify.app/",
  },
  {
    title: "Lavish — Banking UI",
    description:
      "Frontend concept for a modern banking product. Focused on trust-building UI patterns, clear information hierarchy, and a polished user experience for financial interfaces.",
    tags: ["React", "React Router", "Hooks"],
    imageUrl: banking,
    websiteUrl: "https://muhammedmohsenn-banking-website.netlify.app/",
  },
  // {
  //   title: "Dashboard",
  //   description:
  //     "Dive into our new dashboard page: sleek, intuitive, and designed for ultimate control. Efficient web interaction, now just a click away.",
  //   tags: ["HTML5", "CSS3", "CSS animation"],
  //   imageUrl: dashboard,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "GitHub",
  "Tailwind",
  "Redux",
  "Zustand",
  "GraphQL",
  "Apollo",
  "Framer Motion",
] as const;

export const experiencesData = [
  {
    company: "Egabee",
    title: "Front-End Developer",
    location: "Alexandria, Egypt (remote)",
    description:
      "Engineered React-based dashboards for Egabee's Web3 analytics platform. Partnered with blockchain backend teams to visualize smart contract interactions and transaction flows. Implemented responsive data displays for real-time monitoring of EVM networks.",
    icon: React.createElement(CgWorkAlt),
    date: "October - 2023 / Jan - 2025",
  },
  {
    company: "Lucidminds AI",
    title: "Front-End Developer",
    location: "Amsterdam, Netherlands (remote)",
    description:
      "Built and maintained multiple web products for Lucidminds — an Amsterdam-based AI company. Core project: ai.gus.earth, an interactive map where users can explore, add, and chat with trees via an AI assistant trained on urban forestry data. Also developed gaia.gus.earth (living tree map platform), run.gus.earth (GUS digital twin simulation for urban forest impact modeling), dataville-global (privacy-preserving data science platform backed by the City of Amsterdam & RVO), and contributed to the main lucidminds.ai site.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2025 / Present",
  },
] as const;
