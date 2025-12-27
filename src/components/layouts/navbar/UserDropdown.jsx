"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { LogOut, CalendarDays } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserDropdown = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="hidden md:flex items-center">
        <div className="h-10 w-10 rounded-full animate-pulse bg-slate-300 dark:bg-slate-600" />
      </div>
    );
  }

  if (!session) {
    return (
      <Link href="/login" className="hidden md:flex">
        <Button>Login</Button>
      </Link>
    );
  }

  const { name, email } = session.user || {};

  const avatar = "https://i.ibb.co.com/p6XGXzmf/avatar.jpg";

  return (
    <div className="hidden md:flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-10 w-10 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <AvatarImage src={avatar} alt="User Avatar" />
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-64 p-2 rounded-2xl shadow-2xl bg-background border-border/20"
          align="end"
        >
          {/* User Profile Section */}
          <DropdownMenuLabel className="p-3">
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-lg font-semibold leading-none text-gray-900 dark:text-white truncate">
                {name}
              </h3>
              <p className="text-sm leading-none text-muted-foreground truncate pb-px">
                {email}
              </p>
            </div>
          </DropdownMenuLabel>

          {/* Menu Items */}
          <DropdownMenuGroup>
            <Link href="/my-bookings">
              <DropdownMenuItem className="cursor-pointer p-3 rounded-lg hover:bg-primary/5 hover:text-primary transition-all duration-200 group">
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <CalendarDays className="h-4 w-4 text-blue-500" />
                </div>
                <span className="ml-3 font-medium">My Bookings</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>

          {/* Logout Section */}
          <DropdownMenuItem
            className="cursor-pointer p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 group mt-1"
            onClick={() => signOut()}
          >
            <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
              <LogOut className="h-4 w-4 text-red-500" />
            </div>
            <span className="ml-3 font-medium">Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserDropdown;
