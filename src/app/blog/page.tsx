import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Dilip Mali",
  description:
    "Thoughts on software development, product building, and lessons learned from working with startups and businesses.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <div className="max-w-4xl">
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-4xl mb-4 inline-block">📝</span>
          
          <Heading className="font-black text-3xl md:text-4xl mb-4">
            Blog
          </Heading>
          
          <Paragraph className="text-neutral-600 text-lg">
            I write about <Highlight>software development</Highlight>, building products, 
            and sharing practical insights from my experience working with startups and businesses.
          </Paragraph>
        </div>

        {/* Blog Count */}
        <div className="mb-8 pb-4 border-b border-neutral-200">
          <Paragraph className="text-sm text-neutral-500">
            {data.length} {data.length === 1 ? 'article' : 'articles'} published
          </Paragraph>
        </div>
      </div>

      {/* Blogs List */}
      <Blogs blogs={data} />
    </Container>
  );
}