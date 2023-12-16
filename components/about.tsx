"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

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
        After graduating with a degree in{" "}
        <span className="font-medium">Quality Control</span>, I decided to
        pursue my passion for programming. I enrolled in a coding bootcamp and
        learned <span className="font-medium">front-end web development</span>.{" "}
        My core stack is <span className="font-medium">React, Next.js</span>. I
        am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently working{" "}
        <span className="font-medium">
          {" "}
          as a front-end developer at{" "}
          <Link
            href="https://www.linkedin.com/company/egabee/about/"
            target="_blank"
            className="underline"
          >
            Egabee
          </Link>{" "}
          .
        </span>
      </p>
    </motion.section>
  );
}
