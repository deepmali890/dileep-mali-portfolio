"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import { IconArrowUpRight, IconExternalLink } from "@tabler/icons-react";

export const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {products.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Link
              href={product.slug ? `/projects/${product.slug}` : product.href}
              className="group block h-full"
            >
              <div className="relative h-full bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500 hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-neutral-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <IconArrowUpRight className="h-4 w-4 text-sky-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-[calc(100%-14rem)]">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <Heading
                        as="h4"
                        className="font-bold text-xl text-neutral-900 group-hover:text-sky-600 transition-colors duration-300"
                      >
                        {product.title}
                      </Heading>
                    </div>
                    
                    <Paragraph className="text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                      {product.description}
                    </Paragraph>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-neutral-100">
                    {product.stack?.slice(0, 4).map((stack: string) => (
                      <span
                        key={stack}
                        className="inline-flex items-center text-xs font-medium bg-neutral-50 text-neutral-700 px-3 py-1.5 rounded-lg border border-neutral-200 group-hover:border-sky-200 group-hover:bg-sky-50 group-hover:text-sky-700 transition-all duration-300"
                      >
                        {stack}
                      </span>
                    ))}
                    {product.stack && product.stack.length > 4 && (
                      <span className="inline-flex items-center text-xs font-medium text-neutral-500 px-2 py-1.5">
                        +{product.stack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};