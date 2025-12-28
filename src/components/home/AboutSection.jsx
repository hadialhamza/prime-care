import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";
import MyBtn from "../shared/MyBtn";

const AboutSection = () => {
  const benefits = [
    "Verified & Background Checked Professionals",
    "24/7 Customer Support & Emergency Assistance",
    "Affordable & Transparent Pricing Models",
    "Personalized Care Plans for Every Family",
  ];

  return (
    <section className="py-20 sm:py-30 bg-background overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* --- Left Side: Image Composition --- */}
          <div className="relative sm:mx-10 lg:mx-0">
            {/* Main Image */}
            <div className="relative h-100 md:h-125 w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
              <Image
                src="https://plus.unsplash.com/premium_photo-1663134144095-a1cf58ce152f"
                alt="Caregiver helping senior"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Secondary Image (Bottom Right) */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-950 shadow-xl hidden md:block">
              <Image
                src="https://plus.unsplash.com/premium_photo-1664046912267-5c169746fdb6"
                alt="Happy Doctor"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>

            {/* Decorative Dot Pattern */}
            <div className="absolute z-10 -top-5 -left-5 text-primary/50 dark:text-white/80">
              <svg
                width="100"
                height="100"
                fill="currentColor"
                viewBox="0 0 100 100"
              >
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="2" />
                </pattern>
                <rect width="100" height="100" fill="url(#dots)" />
              </svg>
            </div>
          </div>

          {/* --- Right Side: Content --- */}
          <div className="space-y-8">
            <SectionHeading
              align="left"
              badge="Our Mission"
              title={
                <span>
                  Making Caregiving <br />
                  <span className="text-primary">
                    Easy, Secure & Accessible
                  </span>
                </span>
              }
              description="At PrimeCare, we believe everyone deserves reliable support. Our mission is to bridge the gap between families and professional caregivers, ensuring peace of mind through a secure and transparent platform."
            />

            {/* Feature List */}
            <div className="grid gap-4">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 text-sm md:text-base font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/about">
                <MyBtn icon={ArrowRight}>More About Us</MyBtn>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
