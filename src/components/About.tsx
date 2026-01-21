"use client";
import { Paragraph } from "@/components/Paragraph";
import { Heading } from "@/components/Heading";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="relative flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-neutral-200 shadow-sm">
              <Image
                src="/images/Dilip.jpg"
                alt="Dilip Mali"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <Heading as="h1" className="font-black text-3xl mb-3">
              About Me
            </Heading>
            <p className="text-lg text-neutral-600 font-medium">
              Full-Stack Developer & Founder of Deeprise Solution
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-neutral-700 leading-relaxed">
          <Paragraph>
            Hey, I&apos;m Dilip. I&apos;m the founder of Deeprise Solution and a
            full-stack developer by craft. I enjoy building things on the internet
            that actually solve problems and help businesses grow.
          </Paragraph>

          <Paragraph>
            My journey started with writing code out of curiosity, and over time
            it turned into a profession. Today, I work closely with startups,
            clinics, and businesses to build websites, mobile apps, and complete
            digital solutions that are reliable and easy to scale.
          </Paragraph>

          <Paragraph>
            At Deeprise Solution, we don&apos;t just deliver projects. We focus on
            understanding the business first, then designing and developing
            solutions that make sense in the real world.
          </Paragraph>

          <Paragraph>
            I&apos;m a hands-on developer. From backend logic to frontend UI, from
            database design to deployment, I like being involved in every stage of
            the product. This helps me ensure quality and long-term stability.
          </Paragraph>

          <Paragraph>
            Along with development, I strongly believe good design and SEO are
            equally important. A product should not only work well but also look
            clean and reach the right audience.
          </Paragraph>

          <Paragraph>
            Through this platform, I share my work, my experiences, and the kind of
            solutions we build at Deeprise Solution. If you&apos;re looking for a
            tech partner who thinks practically and builds with purpose, you&apos;re
            in the right place.
          </Paragraph>

          <Paragraph>
            Thanks for stopping by. I&apos;m always open to building something
            meaningful together.
          </Paragraph>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-neutral-200">
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-neutral-900">1+</div>
            <div className="text-sm text-neutral-600 mt-1">Years Experience</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-neutral-900">5+</div>
            <div className="text-sm text-neutral-600 mt-1">Projects Delivered</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-neutral-900">3+</div>
            <div className="text-sm text-neutral-600 mt-1">Happy Clients</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-neutral-900">100%</div>
            <div className="text-sm text-neutral-600 mt-1">Commitment</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}