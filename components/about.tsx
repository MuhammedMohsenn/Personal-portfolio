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
        My journey from <span className="font-medium">Quality Control</span> to
        tech wasn't a pivot – it was an evolution. At{" "}
        <span className="font-medium">Egabee</span>, a Web3 development
        platform, I engineered UIs for real-time smart contract monitoring
        dashboards, collaborating with design and backend teams to transform
        blockchain data into actionable user insights.
      </p>

      <p className="mb-3">
        <span className="font-medium">My technical approach</span>:<br />
        ⚡️ <span className="font-medium">React/Next.js Specialist</span>: Built
        performant interfaces for analytics-heavy Web3 products
        <br />
        ⚡️ <span className="font-medium">UI Problem-Solver</span>: Scaled
        dashboard UX for Egabee's multi-chain monitoring tools
        <br />
        ⚡️ <span className="font-medium">Cross-Functional Partner</span>:
        Worked with backend teams on SDK integration and data flow optimization
      </p>

      <p className="mb-3">
        Over 2 years, I've transformed complex requirements like Egabee's
        <span className="font-medium">
          {" "}
          real-time contract state visualization
        </span>{" "}
        into intuitive interfaces. My background gives me a unique edge: I
        architect solutions balancing technical scalability with user psychology
        – especially for data-dense environments like blockchain explorers.
      </p>

      {/* <p>
        When I'm not optimizing rendering performance, I explore Web3 UI
        patterns and mentor junior developers in component architecture best
        practices.
      </p> */}
    </motion.section>
  );
}
