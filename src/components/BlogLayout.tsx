"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { formatDate } from "../../lib/formatDate";
import { Prose } from "@/components/Prose";
import { Container } from "./Container";
import { Heading } from "./Heading";
import Link from "next/link";
import { Paragraph } from "./Paragraph";

function ArrowLeftIcon(props: any) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}: any) {
  let router = useRouter();

  return (
    <Container>
      <article className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 mb-8 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4 stroke-current" />
          <span>Back to Blog</span>
        </Link>

        {/* Featured Image */}
        <div className="w-full rounded-xl overflow-hidden mb-8 border border-neutral-200">
          <Image
            src={meta.image}
            alt={meta.title}
            width={1200}
            height={600}
            className="object-cover w-full h-96"
          />
        </div>

        {/* Header */}
        <header className="mb-10">
          <Heading className="text-4xl font-black mb-4">
            {meta.title}
          </Heading>
          
          <div className="flex items-center gap-3 text-sm text-neutral-500">
            <span>{formatDate(meta.date)}</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Content */}
        <Prose className="prose-lg">
          {children}
        </Prose>
      </article>
    </Container>
  );
}