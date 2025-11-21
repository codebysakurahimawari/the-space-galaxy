"use client";

import {
  Navbar,
  NavContainer,
  NavItems,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export default function GlobalNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "AboutUs", link: "/about" },
    { name: "Pricing", link: "#pricing" },
    { name: "Blog", link: "#blog" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <Navbar>
      <NavContainer scrolled={false}>
        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Links */}
        <NavItems items={links} />

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <NavbarButton variant="secondary" href="#login">
            Sign in
          </NavbarButton>
          <NavbarButton variant="primary" href="#signup">
            Get Started
          </NavbarButton>
        </div>

        {/* Mobile Menu Toggle */}
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>
      </NavContainer>

      {/* Mobile Menu */}
      <MobileNavMenu isOpen={isOpen}>
        {links.map((item) => (
          <a
            key={item.name}
            href={item.link}
            onClick={() => setIsOpen(false)}
            className="block py-4 text-lg font-medium text-white hover:text-neutral-300"
          >
            {item.name}
          </a>
        ))}
        <div className="mt-8 space-y-3">
          <NavbarButton variant="secondary" href="#login" className="w-full">
            Sign in
          </NavbarButton>
          <NavbarButton variant="primary" href="#signup" className="w-full">
            Get Started
          </NavbarButton>
        </div>
      </MobileNavMenu>
    </Navbar>
  );
}