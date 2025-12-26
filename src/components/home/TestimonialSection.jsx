"use client";

import React from "react";
import Image from "next/image";
import {
  Star,
  Quote,
  Users,
  MapPin,
  HeartHandshake,
  CalendarCheck,
} from "lucide-react";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// --- DATA ---
const stats = [
  {
    id: 1,
    label: "Happy Families",
    value: "2,500+",
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 2,
    label: "Service Hours",
    value: "150k+",
    icon: <CalendarCheck className="w-6 h-6" />,
  },
  {
    id: 3,
    label: "Expert Caregivers",
    value: "800+",
    icon: <HeartHandshake className="w-6 h-6" />,
  },
  {
    id: 4,
    label: "Service Areas",
    value: "64+",
    icon: <MapPin className="w-6 h-6" />,
  },
];

const reviews = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Working Mom",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review:
      "I was hesitant about leaving my toddler, but the babysitter from PrimeCare was an absolute angel. Professional, punctual, and my son loves her!",
  },
  {
    id: 2,
    name: "Rahim Uddin",
    role: "Son of Elderly Patient",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review:
      "Finding reliable elderly care for my father was a nightmare until I found this platform. The caregiver is very respectful and handles medication perfectly.",
  },
  {
    id: 3,
    name: "Dr. Farhana",
    role: "Client",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 4,
    review:
      "Excellent service for post-surgery support. The nurse was well-trained and very hygienic. Highly recommended for medical assistance.",
  },
  {
    id: 4,
    name: "Tanvir Hasan",
    role: "Parent",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review:
      "Seamless booking process and transparent pricing. I booked a sitter for the weekend and it was a smooth experience.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
      <Container>
        {/* --- Part 1: Success Metrics (Stats) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-slate-100 dark:border-slate-800 pb-12">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center group">
              <div className="w-12 h-12 mx-auto bg-blue-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* --- Part 2: Testimonials Slider --- */}
        <SectionHeading
          badge="Testimonials"
          title="What Families Say"
          description="Don't just take our word for it. Here is what our community has to say about their experience with PrimeCare."
          className="mb-12"
        />

        <div className="relative px-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-16"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="pb-10">
                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl h-full flex flex-col relative group hover:shadow-lg transition-shadow">
                  {/* Quote Icon */}
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-slate-300 dark:text-slate-600"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 dark:text-slate-300 italic mb-6 flex-grow leading-relaxed">
                    &quot;{review.review}&quot;
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-slate-700 shadow-sm">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                        sizes="50px"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                        {review.name}
                      </h4>
                      <p className="text-xs text-primary font-medium">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
