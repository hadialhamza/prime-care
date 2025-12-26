// src/components/home/HeroSlider.jsx
"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const sliderData = [
  {
    id: 1,
    service: "Elderly Care",
    image: "https://plus.unsplash.com/premium_photo-1663036976879-4baf18adfd5b",
  },
  {
    id: 2,
    service: "Baby Sitting",
    image: "https://plus.unsplash.com/premium_photo-1661394973596-adfeaf7cef69",
  },
  {
    id: 3,
    service: "Special Needs",
    image: "https://plus.unsplash.com/premium_photo-1663099847685-f2ef4a65abd9",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl h-[450px] md:h-[550px] w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-full group">
              <Image
                src={item.image}
                alt={item.service}
                fill
                // FIX: Added sizes prop to solve the warning and improve performance
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Floating Label */}
              <div className="absolute bottom-10 left-8 right-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="text-green-400 w-5 h-5" />
                  <span className="text-sm font-medium text-green-400 uppercase tracking-wider">
                    Verified Service
                  </span>
                </div>
                <p className="text-2xl font-bold">{item.service}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
