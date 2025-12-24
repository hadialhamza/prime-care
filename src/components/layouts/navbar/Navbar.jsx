import React from "react";
import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/services">Services</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </>
  );
  return (
    <nav className="sticky top-0 py-3 border">
      <Container className={"flex items-center justify-between"}>
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-1">
          <ul className="text-sm flex items-center justify-center gap-4 uppercase tracking-wider transition-colors duration-500">
            {navLinks}
          </ul>
        </div>
        <div className="flex-1 text-end flex justify-end items-center gap-4">
          <ThemeToggle />
          <Button>Login</Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
