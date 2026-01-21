import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Dilip Mali",
  description:
    "A collection of projects I've built for startups and businesses - from web applications to mobile apps and complete digital solutions.",
};

export default function Projects() {
  return (
    <Container>
      <div className="max-w-4xl">
        {/* Header Section */}
        <div className="mb-12">
          {/* <span className="text-4xl mb-4 inline-block">⚡</span> */}
          
          <Heading className="font-black text-3xl md:text-4xl mb-4">
            Projects
          </Heading>
          
          <Paragraph className="text-neutral-600 text-lg">
            A showcase of projects I&apos;ve built for startups, businesses, and clients. 
            Each project reflects my approach to solving real-world problems with clean code and practical solutions.
          </Paragraph>
        </div>
      </div>

      {/* Projects Grid */}
      <Products />
    </Container>
  );
}