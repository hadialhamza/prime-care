"use client";

import { Menu, LogOut, LogIn, User } from "lucide-react";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "@/components/shared/Logo";
import NavLink from "./NavLink";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MobileMenu = () => {
  const { data: session } = useSession();

  // Static Image URL
  const avatar = "https://i.ibb.co.com/p6XGXzmf/avatar.jpg";

  return (
    <div className="flex md:hidden items-center gap-4">
      <Sheet>
        <SheetTrigger asChild>
          <button className="bg-primary p-1.5 rounded-sm text-primary-foreground cursor-pointer">
            <Menu />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 px-5 border-border/20">
          <SheetHeader>
            <SheetTitle className="flex justify-center">
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Mobile navigation menu
            </SheetDescription>
          </SheetHeader>

          {/* User Info Section for Mobile */}
          {session && (
            <div className="flex flex-col items-center gap-2 mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
              <Avatar className="h-16 w-16 border-2 border-slate-200 dark:border-slate-700">
                {/* Using Static Image */}
                <AvatarImage src={avatar} />
                <AvatarFallback>
                  <User className="w-8 h-8 text-slate-400" />
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="font-bold">{session.user?.name}</p>
                <p className="text-xs text-muted-foreground">
                  {session.user?.email}
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-6 mt-8">
            <ul className="flex flex-col gap-4 text-lg uppercase tracking-wider text-center">
              <NavLink />
              {session && (
                <Link
                  href="/my-bookings"
                  className="text-foreground/80 hover:text-primary transition-transform"
                >
                  My Bookings
                </Link>
              )}
            </ul>

            <div className="mt-4">
              {session ? (
                <Button
                  variant="destructive"
                  className="w-full gap-2"
                  onClick={() => signOut()}
                >
                  <LogOut className="w-4 h-4" /> Logout
                </Button>
              ) : (
                <Link href="/login">
                  <Button className="w-full gap-2">
                    <LogIn className="w-4 h-4" /> Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
