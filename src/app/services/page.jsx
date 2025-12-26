import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

// --- Service Data (Matches your Details Page IDs) ---
const allServices = [
  {
    id: "baby-sitting",
    title: "Baby Sitting & Child Care",
    description:
      "Professional care for your little ones. We provide engaging activities, safe supervision, and routine management while you are away.",
    price: "From $15/hr",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=600&auto=format&fit=crop",
    features: ["Safe Supervision", "Homework Help", "Bedtime Routines"],
  },
  {
    id: "elderly-care",
    title: "Elderly Care & Companionship",
    description:
      "Compassionate support for seniors. We assist with daily living, medication reminders, and provide meaningful companionship.",
    price: "From $18/hr",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop",
    features: ["Mobility Support", "Medication Reminders", "Meal Prep"],
  },
  {
    id: "sick-care",
    title: "Sick & Special Needs Care",
    description:
      "Specialized medical assistance at home. Our trained caregivers help with post-surgery recovery and chronic illness management.",
    price: "From $25/hr",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1584515933487-9bfa05d1c20f?q=80&w=600&auto=format&fit=crop",
    features: ["Vitals Monitoring", "Wound Care", "Post-Op Support"],
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pb-20">
      {/* --- Page Header --- */}
      <div className="bg-slate-50 dark:bg-slate-900 py-16 mb-16 border-b border-slate-100 dark:border-slate-800">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Choose from our range of professional caregiving services tailored
            to meet the unique needs of your family.
          </p>
        </Container>
      </div>

      <Container>
        {/* --- Services Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  {service.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Quick Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Footer (Price & Action) */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500 uppercase">
                      Starts from
                    </p>
                    <p className="text-lg font-bold text-primary">
                      {service.price}
                    </p>
                  </div>

                  <Link href={`/services/${service.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full group-hover:bg-primary group-hover:text-white transition-colors"
                    >
                      View Details <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Custom Request CTA --- */}
        <div className="mt-24 bg-primary rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need something specific?</h2>
          <p className="text-primary-foreground/90 max-w-xl mx-auto mb-8">
            If you have special requirements or need a custom care plan, please
            contact us directly. We are happy to tailor our services to your
            needs.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="font-bold rounded-full"
            >
              Contact Support
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ServicesPage;
