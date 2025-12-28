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
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
  {
    id: 5,
    name: "Nusrat Jahan",
    role: "Mother of Twins",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review:
      "Handling twins is tough, but the nanny provided by PrimeCare was experienced and calm. She managed their feeding schedule perfectly.",
  },
  {
    id: 6,
    name: "Arik Morshed",
    role: "Business Traveler",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review:
      "I travel frequently and needed someone to check in on my elderly mother. The companion service gives me total peace of mind while I'm away.",
  },
  {
    id: 7,
    name: "Sabrina Karim",
    role: "New Mom",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
    rating: 4,
    review:
      "The night nurse service was a lifesaver during my first month postpartum. I finally got some sleep knowing my baby was in safe hands.",
  },
  {
    id: 8,
    name: "Michael H.",
    role: "Expat",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review:
      "Arranging care for my parents in Dhaka while living abroad was stressful, but this team communicates effectively and provides great English-speaking caregivers.",
  },
  {
    id: 9,
    name: "Mitu Chowdhury",
    role: "Teacher",
    image:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review:
      "I needed an after-school sitter for a few hours daily. The sitter engages my kids with crafts and reading instead of just giving them screens.",
  },
  {
    id: 10,
    name: "James Wilson",
    role: "Tourist",
    image:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review:
      "We needed emergency childcare for a day trip. The verified profile system made us feel safe booking a stranger in a new city.",
  },
  {
    id: 11,
    name: "Rasheda Begum",
    role: "Senior Citizen",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review:
      "My caregiver acts more like a friend. She helps me walk to the park and reminds me of my medicines with a smile.",
  },
  {
    id: 12,
    name: "Sajid Alam",
    role: "IT Professional",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    rating: 4,
    review:
      "Very professional service for bedridden patients. The nurse knew exactly how to handle patient transfer and hygiene.",
  },
  {
    id: 13,
    name: "Farid Ahmed",
    role: "Brother of Patient",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review:
      "Special needs care requires patience, and our caregiver has it in abundance. My brother is very comfortable with him.",
  },
  {
    id: 14,
    name: "Laila Yasmin",
    role: "Banker",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review:
      "Punctuality is key for me, and they have never been late. The tracking feature in the app is also a nice touch.",
  },
  {
    id: 15,
    name: "Hassan Mahamud",
    role: "Uncle",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop",
    rating: 4,
    review:
      "Booked a sitter for my nephews during a family wedding. She managed three energetic boys effortlessly!",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-background overflow-hidden">
      <Container>
        {/* --- Part 2: Testimonials Slider --- */}
        <SectionHeading
          badge="Testimonials"
          title={
            <span>
              What <span className="text-primary">Families Say</span>
            </span>
          }
          description="Don't just take our word for it. Here is what our community has to say about their experience with PrimeCare."
          className="mb-12"
        />

        <div className="relative p-4">
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
            className="py-2!"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={review.id} className="pb-10 h-auto!">
                <div className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl h-full flex flex-col relative group shadow-lg hover:-translate-y-1 transition-transform duration-200">
                  {/* Quote Icon */}
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/40 transition-colors" />

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
                  <p className="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">
                    &quot;{review.review}&quot;
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-slate-700 shadow-sm">
                      <Image
                        src={`https://i.pravatar.cc/150?img=${i + 10}`}
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-20">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center group bg-white dark:bg-slate-950 p-4 rounded-2xl shadow-lg"
            >
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
      </Container>
    </section>
  );
};

export default TestimonialSection;
