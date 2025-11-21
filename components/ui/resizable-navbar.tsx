"use client";

import { cn } from "@/app/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import React, { useState } from "react";

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  return (
    <motion.div className="fixed inset-x-0 top-0 z-50 w-full">
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ scrolled?: boolean }>, { scrolled })
          : child
      )}
    </motion.div>
  );
};

/* Desktop & Mobile — Always Rounded */
export const NavContainer = ({ children, scrolled }: { children: React.ReactNode; scrolled: boolean }) => {
  return (
    <motion.div
      animate={{
        width: scrolled ? "82%" : "90%",
        height: scrolled ? 54 : 64,
        y: scrolled ? 12 : 16,
        backdropFilter: "blur(32px) saturate(180%)",
        backgroundColor: scrolled ? "rgba(10, 10, 10, 0.92)" : "rgba(15, 15, 15, 0.85)",
        boxShadow: scrolled
          ? "0 16px 48px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.12)"
          : "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
      }}
      transition={{ type: "spring", stiffness: 380, damping: 34, mass: 0.9 }}
      className={cn(
        "mx-auto flex h-24 items-center justify-between rounded-full px-8",
        "border border-indigo-900/12 bg-neutral-950/90 backdrop-blur-3xl shadow-2xl",
        "lg:justify-between"
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, onItemClick }: { items: { name: string; link: string }[]; onItemClick?: () => void }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="hidden items-center  lg:flex">
      {items.map((item, i) => (
        <a
          key={i}
          href={item.link}
          onClick={onItemClick}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          className="relative px-5 py-2 text-md font-medium text-neutral-300 transition-all hover:text-white"
        >
          {hovered === i && (
            <motion.span
              layoutId="navpill"
              className="absolute inset-0 -z-10 rounded-full bg-white/10"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export const MobileNavHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="flex w-full items-center justify-between px-6 lg:hidden">{children}</div>
);

export const MobileNavMenu = ({ children, isOpen }: { children: React.ReactNode; isOpen: boolean }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute left-4 right-4 top-28 z-50 rounded-3xl border border-white/10 bg-neutral-950/95 p-8 shadow-2xl backdrop-blur-3xl"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="rounded-full p-3 transition hover:bg-white/10 lg:hidden"
    aria-label="Toggle menu"
  >
    {isOpen ? <IconX className="h-6 w-6 text-white" /> : <IconMenu2 className="h-6 w-6 text-white" />}
  </button>
);

export const NavbarLogo = () => (
  <a href="/" className="flex items-center space-x-3">
    {/* Replace with your logo */}
    <span className="text-lg font-medium text-white">TheAlphaSpace</span>
  </a>
);

export const NavbarButton = ({
  children,
  variant = "primary",
  href,
  onClick,
  className,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
}) => {
  const base = cn(
    "rounded-full px-5 py-1 font-medium transition-all duration-200",
    "hover:scale-105 active:scale-95 focus:outline-none focus:ring-1 focus:ring-white/50",
    "inline-flex items-center justify-center"
  );

  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200 shadow-lg",
    secondary: "border border-white/12 text-white hover:bg-white/10",
  };

  const Comp = href ? "a" : "button";

  return (
    <Comp
      href={href}
      onClick={onClick}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </Comp>
  );
};