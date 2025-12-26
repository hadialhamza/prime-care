// src/components/home/BannerSection.jsx
import React from "react";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "../shared/Container";
import Slider from "./Slider"; // Import the client component

const BannerSection = () => {
  return (
    // Removed background animation/blobs
    <section className="relative w-full min-h-[90vh] flex items-center bg-linear-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-10 lg:py-0">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* --- Left Side: Static Server Content --- */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 border border-slate-200 dark:border-slate-800 backdrop-blur-sm shadow-xs">
              <span className="p-1 rounded-full bg-blue-100 dark:bg-slate-800 text-primary">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200 tracking-wide">
                #1 Trusted Care Platform
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Expert Care for <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Your Loved Ones
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
              Connect with verified professionals for babysitting, elderly care,
              and special needs support. Safe, reliable, and always there for
              you.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/services">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg rounded-full shadow-lg text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition-transform hover:scale-105 duration-300"
                >
                  Find a Caregiver <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg rounded-full border-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Stats Footer */}
            <div className="pt-6 flex items-center gap-8 border-t border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  500+
                </h3>
                <p className="text-sm text-slate-500">Verified Pros</p>
              </div>
              <div className="w-px h-10 bg-slate-300 dark:bg-slate-700"></div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-1">
                  4.8{" "}
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </h3>
                <p className="text-sm text-slate-500">User Rating</p>
              </div>
            </div>
          </div>

          {/* --- Right Side: Client Component Slider --- */}
          <div>
            <Slider />
            {/* Decorative Elements (Static CSS only) */}
            <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BannerSection;
