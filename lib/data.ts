import React from "react";
// import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import personalPortfolio from "@/public/nextjs-portfolio.png";
import shoppingHub from "@/public/shopping-hub-ecommerce.png";
import foodeRecipeFinder from "@/public/Foode-nextjs.png";
import banking from "@/public/Banking-website.png";
import dashboard from "@/public/Dashboard.png";

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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Personal portfolio",
    description:
      "Discover my latest portfolio, crafted with Next.js and TypeScript. Experience a blend of speed, elegance, and innovation in web design.",
    tags: ["Next.js", "Typescript", "Tailwind CSS", "Framer Motion"],
    imageUrl: personalPortfolio,
  },
  {
    title: "Shopping Hub",
    description:
      "Experience the future of shopping on our e-commerce platform. Dive into curated collections. The world's marketplace, now just a click away.",
    tags: ["React", "Redux toolkit", "React router dom", "hooks"],
    imageUrl: shoppingHub,
  },
  {
    title: "Foode",
    description:
      "Discover your next meal effortlessly with our Recipe Finder! Choose a cuisine, and we'll serve up the perfect recipe. Taste the world in a click",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: foodeRecipeFinder,
  },
  {
    title: "Lavish",
    description:
      "Experience banking redefined on our new landing page! With intuitive design and effortless navigation, managing your finances is a click away.",
    tags: ["React", "React router dom", "hooks"],
    imageUrl: banking,
  },
  {
    title: "Dashboard",
    description:
      "Dive into our new dashboard page: sleek, intuitive, and designed for ultimate control. Efficient web interaction, now just a click away.",
    tags: ["HTML5", "CSS3", "CSS animation"],
    imageUrl: dashboard,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "GraphQL",
  "Apollo",
  "Framer Motion",
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Alexandria, Egypt",
    description:
      "I am currently working as a full-time front-end developer at Egabee.",
    icon: React.createElement(CgWorkAlt),
    date: "October - 2023",
  },
] as const;
