import React from "react";
import Link from "next/link";
import { ArrowRight, Baby, HeartPulse, User } from "lucide-react";
import Container from "../shared/Container";
import SectionHeading from "../shared/SectionHeading";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Baby Sitting",
    slug: "baby-sitting", // Will be used for the route /services/baby-sitting
    description:
      "Reliable and caring babysitters to ensure your child's safety and happiness while you are away.",
    icon: <Baby className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    color: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "group-hover:border-purple-500/50",
  },
  {
    id: 2,
    title: "Elderly Care",
    slug: "elderly-care",
    description:
      "Compassionate companions to assist seniors with daily activities, medication, and emotional support.",
    icon: <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    color: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "group-hover:border-blue-500/50",
  },
  {
    id: 3,
    title: "Sick & Special Needs",
    slug: "sick-care",
    description:
      "Specialized care for patients recovering from illness or individuals requiring special attention at home.",
    icon: (
      <HeartPulse className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
    ),
    color: "bg-emerald-50 dark:bg-emerald-900/20",
    borderColor: "group-hover:border-emerald-500/50",
  },
];

const ServiceSection = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <Container>
        {/* reusable Heading */}
        <SectionHeading
          badge="Our Services"
          title="Professional Care Solutions"
          description="We offer a range of specialized services tailored to meet the unique needs of your family members."
          className="mb-16"
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${service.borderColor}`}
            >
              {/* Hover Gradient Overlay (Subtle) */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color} transition-transform duration-300 group-hover:scale-110`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Link Button */}
                <Link href={`/services/${service.slug}`}>
                  <Button
                    variant="link"
                    className="p-0 h-auto font-semibold text-primary text-base hover:no-underline group/btn"
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServiceSection;
