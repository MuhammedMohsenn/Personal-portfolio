import React from "react";
// import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import personalPortfolio from "@/public/nextjs-portfolio.png";
import shoppingHub from "@/public/shopping-hub-ecommerce.png";
import foodeRecipeFinder from "@/public/Foode-nextjs.png";
import banking from "@/public/Banking-website.png";
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
    title: "Personal portfolio",
    description:
      "A personal portfolio. It highlights my projects and skills with a modern, interactive design. This project helped me practice advanced front-end development and animation techniques.",
    tags: ["Next.js", "Typescript", "Tailwind CSS", "Framer Motion"],
    imageUrl: personalPortfolio,
    websiteUrl: "https://muhammed-mohsen.netlify.app/",
  },
  {
    title: "Shopping Hub",
    description:
      "A simple e-commerce app. It features categories, detailed product listings, and a search bar for finding products by name. Practiced e-commerce functionalities on this project.",
    tags: ["React", "Redux toolkit", "React router dom", "hooks"],
    imageUrl: shoppingHub,
    websiteUrl: "https://shopping-hub-e-commerce-react.netlify.app/",
  },
  {
    title: "Foode",
    description:
      "A Food Recipe Finder app. Users can find recipes by selecting a specific country from provided options. This project helped me practice Next.js and Tailwind CSS.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: foodeRecipeFinder,
    websiteUrl: "https://foode-recipe-finder.netlify.app/",
  },
  {
    title: "Lavish",
    description:
      "A small banking website with React.js, focusing solely on the front end. The project showcases user-friendly design and basic banking functionalities. ",
    tags: ["React", "React router dom", "hooks"],
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
    title: "Front-End Developer",
    location: "Alexandria, Egypt (remote)",
    description:
      "Engineered React-based dashboards for Egabee's Web3 analytics platform. Partnered with blockchain backend teams to visualize smart contract interactions and transaction flows. Implemented responsive data displays for real-time monitoring of EVM networks.",
    icon: React.createElement(CgWorkAlt),
    date: "October - 2023 / Jan - 2025",
  },
] as const;
