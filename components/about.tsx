"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        Over <span className="font-medium">3 years</span>, I've grown from a{" "}
        <span className="font-medium">Quality Control</span> background into a
        front-end developer who builds interfaces people actually enjoy using —
        across <span className="font-medium">Web3</span>,{" "}
        <span className="font-medium">AI</span>, and{" "}
        <span className="font-medium">data-heavy platforms</span>.
      </p>

      <p className="mb-3">
        At <span className="font-medium">Egabee</span>, I engineered React
        dashboards for real-time smart contract monitoring, translating raw
        blockchain data into clear, actionable UIs for EVM network analysis. At{" "}
        <span className="font-medium">Lucidminds</span> (Amsterdam), I build and
        maintain a suite of AI-powered products — including{" "}
        <span className="font-medium">gAIa</span>, an interactive urban tree map
        where users explore, contribute, and chat with trees through an AI
        assistant, and <span className="font-medium">Dataville</span>, a
        privacy-preserving data science platform backed by the City of
        Amsterdam.
      </p>

      <p className="mb-3">
        <span className="font-medium">What I bring to a team:</span>
        <br />
        ⚡️ <span className="font-medium">React / Next.js</span> — performant,
        scalable interfaces for complex data environments
        <br />
        ⚡️ <span className="font-medium">Design-to-code</span> — close
        collaboration with designers to ship pixel-accurate, accessible UIs
        <br />
        ⚡️ <span className="font-medium">Cross-functional mindset</span> —
        comfortable bridging frontend with blockchain, AI, and backend teams
      </p>

      <p className="mb-3">
        I care about the{" "}
        <span className="font-medium">details that users feel</span> — fast load
        times, intuitive flows, and interfaces that make complex systems
        approachable. Whether it's a Web3 explorer or an AI-powered map, I build
        with both technical precision and user empathy in mind.
      </p>
    </motion.section>
  );
}
