import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const benefits = [
    "Verified & Background Checked Professionals",
    "24/7 Customer Support & Emergency Assistance",
    "Affordable & Transparent Pricing Models",
    "Personalized Care Plans for Every Family",
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* --- Left Side: Image Composition --- */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                alt="Caregiver helping senior"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Secondary Image (Bottom Right) */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-950 shadow-xl hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop"
                alt="Happy Doctor"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>

            {/* Decorative Dot Pattern */}
            <div className="absolute -z-10 top-10 -left-10 text-slate-100 dark:text-slate-900">
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
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/about">
                <Button className="h-12 px-8 rounded-full text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all">
                  Learn More About Us <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
