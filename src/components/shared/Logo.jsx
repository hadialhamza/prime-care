import Link from "next/link";
import React from "react";
import { PT_Serif } from "next/font/google";

const logoFont = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <Link href="/" className="inline-block">
      <div className="flex items-center uppercase tracking-tighter gap-1.5 text-3xl ">
        <span className="font-semibold pl-1 pr-1.5 bg-primary text-primary-foreground">
          prime
        </span>
        <span
          className={`${logoFont.className} text-primary dark:text-primary-foreground font-bold`}
        >
          care
        </span>
      </div>
    </Link>
  );
};

export default Logo;
