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
                src="/images/dileepmali.jpg"
                alt="Dileep Mali"
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
              Full Stack Developer — React · Next.js · Node.js · Docker
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-neutral-700 leading-relaxed">
          <Paragraph>
            I&apos;m Dileep — a full stack developer who builds systems that are
            production-ready from day one. Not just frontend pages or backend
            routes in isolation, but complete, deployable applications with real
            architecture behind them.
          </Paragraph>

          <Paragraph>
            My stack covers the full cycle: React, Next.js, TypeScript, and
            Tailwind CSS on the frontend — Node.js, Express, NestJS, WebSockets,
            and BullMQ on the backend — PostgreSQL and MongoDB for data, Redis for
            caching and queues, and Docker with GitHub Actions for CI/CD. I
            deploy on Azure, Vercel, and Railway, and I have hands-on experience
            with Kubernetes and cloud infrastructure on AWS and GCP.
          </Paragraph>

          <Paragraph>
            What separates my work from typical portfolio projects is the
            production thinking behind it. I implement JWT authentication with
            refresh token rotation, Redis caching layers that measurably reduce
            API latency, WebSocket-powered real-time systems, background job
            queues with BullMQ, structured logging with Winston, and error
            tracking with Sentry. These aren&apos;t features I&apos;ve read
            about — I&apos;ve built and debugged them.
          </Paragraph>

          <Paragraph>
            I have built projects like a real-time collaborative code editor for
            technical interviews — with multi-user editing via Yjs CRDT,
            sandboxed code execution using Docker, and session replay via event
            sourcing. And a SaaS invoicing platform with Razorpay and Stripe
            webhook integration, multi-tenant PostgreSQL architecture, and PDF
            generation through Puppeteer. These projects reflect how I think
            about software: scalable, maintainable, and built to handle real
            load.
          </Paragraph>

          <Paragraph>
            I also care deeply about developer experience and clean code. Good
            architecture should make a codebase easier to work in six months
            later, not harder. I write Swagger/OpenAPI docs, use Zod for
            validation, and set up GitHub Actions pipelines so deployments are
            boring and predictable.
          </Paragraph>

          <Paragraph>
            If you&apos;re looking for someone who can take ownership from
            requirements to deployment — and explain every decision along the
            way — you&apos;re in the right place. I&apos;m currently open to
            full-time roles and select freelance projects.
          </Paragraph>
        </div>

        {/* Tech Stack */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-5">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: "Frontend",
                items:
                  "React · Next.js · TypeScript · Tailwind CSS · Redux · React Query · Framer Motion",
              },
              {
                label: "Backend",
                items:
                  "Node.js · Express · NestJS · REST APIs · WebSockets · BullMQ",
              },
              {
                label: "Database & Cache",
                items:
                  "PostgreSQL · MongoDB · Redis · Prisma · Mongoose · Elasticsearch",
              },
              {
                label: "DevOps & Cloud",
                items:
                  "Docker · Kubernetes · GitHub Actions · CI/CD · Azure · AWS · GCP",
              },
              {
                label: "Auth & Security",
                items: "JWT · Firebase Auth · Auth0 · OAuth2 · Zod · Rate Limiting",
              },
              {
                label: "Integrations",
                items:
                  "Stripe · Razorpay · Cloudinary · SendGrid · Sentry · Winston · Swagger",
              },
            ].map((section) => (
              <div
                key={section.label}
                className="bg-neutral-50 rounded-xl p-4 border border-neutral-100"
              >
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  {section.label}
                </div>
                <div className="text-sm text-neutral-700 leading-relaxed">
                  {section.items}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-neutral-200">
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-neutral-900">3</div>
            <div className="text-sm text-neutral-600 mt-1">
              Production Projects
            </div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-neutral-900">15+</div>
            <div className="text-sm text-neutral-600 mt-1">
              Technologies Used
            </div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-neutral-900">Full</div>
            <div className="text-sm text-neutral-600 mt-1">
              Stack Ownership
            </div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-neutral-900">Open</div>
            <div className="text-sm text-neutral-600 mt-1">
              To Opportunities
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}