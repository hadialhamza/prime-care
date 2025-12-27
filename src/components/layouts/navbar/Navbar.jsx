import React from "react";
import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  return (
    <nav>
      <Container className={"flex items-center justify-between"}>
        <div className="flex-1">
          <Logo />
        </div>
        <div className="hidden md:flex flex-1">
          <ul className="text-sm flex-1 flex items-center justify-center gap-4 uppercase tracking-wider transition-colors duration-500">
            <NavLink />
          </ul>
        </div>
        <div className="h-10 flex-1 text-end flex justify-end items-center gap-2 md:gap-4">
          <ThemeToggle />
          <UserDropdown />
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
