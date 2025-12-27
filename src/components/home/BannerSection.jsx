"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, HeartPulse, Baby, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from "../shared/Container";

const heroContent = [
  {
    id: 1,
    service: "Elderly Care",
    icon: <User className="w-5 h-5" />,
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
    icon: <Baby className="w-5 h-5" />,
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
    icon: <HeartPulse className="w-5 h-5" />,
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
    icon: <HeartPulse className="w-5 h-5" />,
    title: "Compassionate Support for",
    highlight: "Sick & Recovering",
    description:
      "Specialized assistance for loved ones recovering from illness or surgery. We manage medication, monitor vitals, and ensure maximum comfort during recovery.",
    image:
      "https://cdn.pixabay.com/photo/2016/12/12/17/11/hospice-1902144_960_720.jpg",
    badgeColor: "bg-rose-500",
    btnColor: "bg-rose-600 hover:bg-rose-700",
    textColor: "text-rose-400",
  },
];

const BannerSection = () => {
  return (
    <section className="relative w-full h-[85vh] min-h-150 bg-slate-900">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1000}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full w-full group"
      >
        {heroContent.map((item) => (
          <SwiperSlide key={item.id} className="relative w-full h-full">
            {/* --- Background Image --- */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={item.image}
                alt={item.service}
                fill
                className="object-cover"
                priority
              />
              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* --- Content Overlay --- */}
            <Container className="relative z-10 h-full flex flex-col justify-center">
              <div className="max-w-4xl mx-auto space-y-6 text-center">
                {/* Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white w-fit`}
                >
                  <span
                    className={`p-1.5 rounded-full ${item.badgeColor} text-white`}
                  >
                    {item.icon}
                  </span>
                  <span className="text-sm font-bold tracking-wide uppercase">
                    {item.service}
                  </span>
                </div>

                {/* Heading */}
                <h1 className="w-full text-5xl font-black text-white leading-[1.1]">
                  {item.title} <br />
                  <span className={item.textColor}>{item.highlight}</span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                  {item.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col items-center justify-center sm:flex-row gap-4 pt-4">
                  <Link href="/services">
                    <Button
                      size="lg"
                      className={`h-14 px-8 text-lg rounded-full text-white border-0 transition-all hover:scale-105 duration-300 ${item.btnColor}`}
                    >
                      Book Now <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-14 px-8 text-lg rounded-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-slate-900 transition-colors"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="pt-8 flex items-center justify-center gap-6">
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
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-sm text-slate-300 font-medium">
                      Trusted by 500+ Families
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSection;
