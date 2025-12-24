"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path === href
          ? "font-medium text-primary dark:text-primary-foreground"
          : "text-muted-foreground hover:text-primary dark:hover:text-primary-foreground transition-colors duration-300"
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
