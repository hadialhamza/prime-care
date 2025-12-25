import { Menu } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "@/components/shared/Logo";
import NavLink from "./NavLink";

const MobileMenu = () => {
  return (
    <div className="flex md:hidden items-center gap-4">
      <Sheet>
        <SheetTrigger asChild>
          <button className="bg-primary p-1.5 rounded-sm text-primary-foreground cursor-pointer">
            <Menu />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 px-5">
          <SheetHeader>
            <SheetTitle className="flex justify-center">
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-6 mt-8">
            <ul className="flex flex-col gap-4 text-lg uppercase tracking-wider">
              <NavLink />
            </ul>
            <div className="mt-4">
              <Button className="w-full">Login</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
