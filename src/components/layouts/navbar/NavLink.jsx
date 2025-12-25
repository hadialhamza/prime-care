"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = () => {
  const navLinks = [
    { href: "/", path: "Home" },
    { href: "/about", path: "About" },
    { href: "/services", path: "Services" },
    { href: "/contact", path: "Contact" },
  ];
  const path = usePathname();
  return (
    <>
      {navLinks.map((navLink) => (
        <Link
          href={navLink.href}
          key={navLink.path}
          className={
            path === navLink.href
              ? "font-medium text-primary dark:text-primary-foreground"
              : "text-foreground/80 hover:text-primary dark:hover:text-primary-foreground transition-transform duration-200 hover:scale-103"
          }
        >
          {navLink.path}
        </Link>
      ))}
    </>
  );
};

export default NavLink;
