"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-4xl">👋</span>

        <Heading className="font-black mt-4">
          Hello, I&apos;m Dileep Mali
        </Heading>

        <Paragraph className="max-w-xl mt-4">
          A <Highlight>full-stack developer</Highlight> focused on building
          production-ready applications — not just UI screens or isolated APIs,
          but complete systems designed to perform reliably in real-world usage.
        </Paragraph>

        <Paragraph className="max-w-xl mt-4">
          I work across the entire stack, from modern frontend experiences using
          React and Next.js to backend systems with Node.js, databases, and
          scalable architecture. Every project I build is optimized for
          performance, security, and long-term maintainability.
        </Paragraph>

        <Paragraph className="max-w-xl mt-4">
          My approach is simple — build software that solves real problems,
          handles real users, and stays stable as it grows.
        </Paragraph>

        {/* Simple CTA Buttons */}
        <div className="flex flex-wrap gap-3 mt-8">
          <a
            href="/projects"
            className="inline-flex items-center px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 border border-neutral-300 text-neutral-700 text-sm font-medium rounded-lg hover:bg-neutral-50 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>

      {/* Projects Section */}
      <div className="mt-20" id="projects">
        <Heading
          as="h2"
          className="font-black text-lg md:text-lg lg:text-lg mb-4"
        >
          Selected Work
        </Heading>
        <Products />
      </div>

      {/* Tech Stack Section */}
      <TechStack />
    </Container>
  );
}