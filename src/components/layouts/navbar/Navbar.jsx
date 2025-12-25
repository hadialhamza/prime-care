import React from "react";
import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 py-3 border">
      <Container className={"flex items-center justify-between"}>
        <div className="flex-1">
          <Logo />
        </div>
        <div className="hidden md:flex flex-1">
          <ul className="text-sm flex items-center justify-center gap-4 uppercase tracking-wider transition-colors duration-500">
            <NavLink />
          </ul>
        </div>
        <div className="flex-1 text-end flex justify-end items-center gap-4">
          <ThemeToggle />
          <Link href={"login"} className="hidden md:flex">
            <Button>Login</Button>
          </Link>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
