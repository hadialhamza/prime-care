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
          <button
            aria-label="Open menu"
            className="group relative inline-flex items-center justify-center h-9 w-9 rounded-lg bg-primary text-primary-foreground shadow-sm transition-all duration-200 ease-out hover:shadow-md hover:scale-[1.04] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Menu className="h-5 w-5 transition-transform duration-200 group-hover:rotate-90" />

            <span className="pointer-events-none absolute inset-0 rounded-lg bg-primary/20 opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-100" />
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
