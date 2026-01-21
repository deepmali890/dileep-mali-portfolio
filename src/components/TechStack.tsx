import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "HTML5",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "CSS3",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "TypeScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "Next.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "Node.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "Express.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "NestJS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "Tailwind CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "MongoDB",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "PostgreSQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "Prisma",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "Docker",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "Kubernetes",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      className: "h-10 w-10",
    },
    {
      title: "AWS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      className: "h-10 w-10",
    },
    {
      title: "Vercel",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "GitHub",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "GitLab",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "Jenkins",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "Jira",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "Slack",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "Postman",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "Java",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "C",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "Socket.io",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "Terraform",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "Redis",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "GraphQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      className: "h-10 w-10",
    },
    {
      title: "Nginx",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "Linux",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "VS Code",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      className: "h-10 w-10",
    },
    {
      title: "Figma",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      className: "h-10 w-10",
    },
  ];

  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap gap-4">
        {stack.map((item) => (
          <div
            key={item.title}
            className="group relative flex items-center justify-center p-3 bg-white rounded-xl border border-neutral-200 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100 transition-all duration-300 cursor-pointer"
          >
            <Image
              src={item.src}
              width={40}
              height={40}
              alt={item.title}
              className={twMerge(
                "object-contain group-hover:scale-110 transition-transform duration-300",
                item.className
              )}
            />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 z-[100] group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <span className="text-xs font-medium text-neutral-600 bg-white px-2 py-1 rounded-md shadow-md whitespace-nowrap">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};