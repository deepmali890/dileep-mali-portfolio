"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { socials } from "@/constants/socials";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            exit={{ x: -280, transition: { duration: 0.2 } }}
            className="px-6 z-[100] py-6 bg-white max-w-[16rem] lg:w-fit fixed lg:relative h-screen left-0 flex flex-col justify-between border-r border-neutral-200"
          >
            <div className="flex-1 overflow-auto custom-scrollbar">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed lg:hidden bottom-6 right-6 h-12 w-12 bg-neutral-900 rounded-full flex items-center justify-center z-50 shadow-lg"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <IconX className="h-5 w-5 text-white" />
        ) : (
          <IconMenu2 className="h-5 w-5 text-white" />
        )}
      </motion.button>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(163, 163, 163, 0.3);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(163, 163, 163, 0.5);
        }
      `}</style>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col my-6 relative z-[100]">
      <div className="mb-6">
        {/* Navigation Links */}
        <div className="space-y-1">
          {navlinks.map((link: Navlink) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => isMobile() && setOpen(false)}
              className={twMerge(
                "group relative flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200",
                isActive(link.href)
                  ? "text-neutral-900 bg-neutral-100"
                  : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
              )}
            >
              <link.icon className="h-5 w-5 flex-shrink-0" />
              <span>{link.label}</span>
              
              {isActive(link.href) && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute right-2 h-1.5 w-1.5 rounded-full bg-neutral-900"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Socials Section */}
      <div className="pt-6 border-t border-neutral-200">
        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider px-3 mb-3">
          Connect
        </p>
        <div className="space-y-1">
          {socials.map((link: Navlink) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-all duration-200"
            >
              <link.icon className="h-5 w-5 flex-shrink-0" />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200">
        <div className="relative h-12 w-12 rounded-full flex-shrink-0">
          <Image
            src="/images/Dilip.jpg"
            alt="Dilip Mali"
            fill
            className="rounded-full object-cover"
          />
         <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white">
                  <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                </span>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-neutral-900 text-sm truncate">
            Dileep Mali
          </h3>
          <p className="text-xs text-neutral-500">
            Full-Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
};