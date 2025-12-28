"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Star,
  HeartPulse,
  Baby,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from "../shared/Container";

const heroContent = [
  {
    id: 1,
    service: "Elderly Care",
    icon: <User className="w-4 h-4" />,
    title: "Dignified Care for",
    highlight: "Your Parents",
    description:
      "Professional companions to support independent living. From medication management to daily assistance, we ensure your loved ones age with grace and comfort.",
    image: "https://plus.unsplash.com/premium_photo-1663036976879-4baf18adfd5b",
    badgeColor: "bg-cyan-500",
    btnColor: "bg-cyan-600 hover:bg-cyan-700",
    textColor: "text-cyan-400",
  },
  {
    id: 2,
    service: "Baby Sitting",
    icon: <Baby className="w-4 h-4" />,
    title: "Nurturing Love for",
    highlight: "Your Little Ones",
    description:
      "Verified babysitters who provide more than just supervision. We create a safe, engaging, and playful environment for your child's growth while you work.",
    image: "https://plus.unsplash.com/premium_photo-1661394973596-adfeaf7cef69",
    badgeColor: "bg-purple-500",
    btnColor: "bg-purple-600 hover:bg-purple-700",
    textColor: "text-purple-400",
  },
  {
    id: 3,
    service: "Special Needs",
    icon: <HeartPulse className="w-4 h-4" />,
    title: "Medical Support at",
    highlight: "Your Home",
    description:
      "Specialized assistance for post-surgery recovery and special needs. Our certified caregivers bring hospital-grade care directly to your doorstep.",
    image: "https://plus.unsplash.com/premium_photo-1663099847685-f2ef4a65abd9",
    badgeColor: "bg-emerald-500",
    btnColor: "bg-emerald-600 hover:bg-emerald-700",
    textColor: "text-emerald-400",
  },
  {
    id: 4,
    service: "Sick Care",
    icon: <HeartPulse className="w-4 h-4" />,
    title: "Compassionate Support for",
    highlight: "Sick & Recovering",
    description:
      "Specialized assistance for loved ones recovering from illness or surgery. We manage medication, monitor vitals, and ensure maximum comfort during recovery.",
    image: "https://i.ibb.co.com/3Y0PPPWf/old-caregiver.jpg",
    badgeColor: "bg-rose-500",
    btnColor: "bg-rose-600 hover:bg-rose-700",
    textColor: "text-rose-500",
  },
];

const BannerSection = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [paginationEl, setPaginationEl] = useState(null);

  return (
    <section className="relative w-full h-[70vh] min-h-150 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        speed={1000}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevEl,
          nextEl: nextEl,
        }}
        pagination={{
          el: paginationEl,
          clickable: true,
        }}
        className="h-full w-full"
      >
        {heroContent.map((item) => (
          <SwiperSlide key={item.id} className="relative w-full h-full">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={item.image}
                alt={item.service}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content Overlay */}
            <Container className="relative z-10 h-full flex flex-col justify-center items-center text-center">
              <div className="max-w-3xl space-y-4">
                {/* Badge */}
                <div
                  className="slide-up-content inline-flex items-center gap-2 p-1 md:p-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white mx-auto"
                  style={{ transitionDelay: "800ms" }}
                >
                  <span
                    className={`p-1 rounded-full ${item.badgeColor} text-white`}
                  >
                    {item.icon}
                  </span>
                  <span className="text-xs md:text-sm font-semibold uppercase pr-1">
                    {item.service}
                  </span>
                </div>

                {/* Heading */}
                <h1
                  className="slide-up-content w-full text-3xl md:text-5xl font-bold md:font-extrabold text-white leading-[1.1]"
                  style={{ transitionDelay: "1000ms" }}
                >
                  {item.title} <br />
                  <span className={item.textColor}>{item.highlight}</span>
                </h1>

                {/* Description */}
                <p
                  className="slide-up-content max-w-lg lg:max-w-full mx-auto text-sm md:text-lg text-slate-200 leading-relaxed"
                  style={{ transitionDelay: "1200ms" }}
                >
                  {item.description}
                </p>

                {/* Buttons */}
                <div
                  className="slide-up-content flex items-center justify-center gap-2 md:gap-4 pt-3"
                  style={{ transitionDelay: "1400ms" }}
                >
                  <Link href="/services">
                    <Button
                      size="lg"
                      className={`group h-10 md:h-12 text-sm md:text-base rounded-full text-white border-0 transition-transform hover:scale-105 duration-300 ${item.btnColor}`}
                    >
                      Book Now{" "}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-10 md:h-12 text-sm md:text-base rounded-full border border-transparent text-white bg-white/40 hover:bg-white hover:text-slate-900 transition-all hover:scale-105 duration-300"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div
                  className="slide-up-content pt-3 flex flex-col md:flex-row items-center justify-center gap-4"
                  style={{ transitionDelay: "1600ms" }}
                >
                  <div className="flex -space-x-4">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-200 overflow-hidden"
                      >
                        <Image
                          src={`https://i.pravatar.cc/100?img=${i + 10}`}
                          width={40}
                          height={40}
                          alt="User"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center justify-center md:justify-start gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-xs md:text-sm text-slate-300 font-medium">
                      Trusted by 500+ Families
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </SwiperSlide>
        ))}

        {/* --- CUSTOM CONTROLS LAYER --- */}
        <div className="absolute top-1/2 left-0 w-full z-20 -translate-y-1/2 pointer-events-none">
          <Container className="flex items-center justify-between px-4">
            <button
              ref={(node) => setPrevEl(node)}
              className="pointer-events-auto group custom-prev w-12 h-12 rounded-full md:border border-white/30 bg-transparent md:bg-white/10 md:backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-slate-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              ref={(node) => setNextEl(node)}
              className="pointer-events-auto custom-next w-12 h-12 rounded-full md:border border-white/30 md:bg-white/10 md:backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-slate-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Container>
        </div>

        {/* Pagination Indicator */}
        <div className="absolute bottom-10 left-0 w-full z-20 pointer-events-none">
          <Container className="w-full flex items-center justify-center">
            <div
              ref={(node) => setPaginationEl(node)}
              className="custom-pagination flex items-center justify-center gap-2 pointer-events-auto"
            ></div>
          </Container>
        </div>
      </Swiper>
    </section>
  );
};

export default BannerSection;
