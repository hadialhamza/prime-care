import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  Clock,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";

const servicesData = [
  {
    id: "baby-sitting",
    title: "Baby Sitting & Child Care",
    tagline: "Safe, engaging, and loving care for your little ones.",
    description:
      "Our verified babysitters provide more than just supervision. We engage your children in educational activities, ensure their safety, and maintain their daily routine while you are away. All caregivers are background-checked and trained in child first-aid.",
    features: [
      "Background verified caregivers",
      "Educational games & activities",
      "Meal preparation & feeding assistance",
      "Bedtime routine management",
      "Emergency first-aid trained",
    ],
    price: "From $15/hour",
    rating: 4.9,
    reviews: 120,
    image: "https://i.ibb.co.com/Y43CRjS4/baby-caregiver.png",
    metaImage: "https://i.ibb.co.com/Hc95j6C/Baby-Care.png",
  },
  {
    id: "elderly-care",
    title: "Elderly Care & Companionship",
    tagline: "Dignified support for independent living.",
    description:
      "We understand that aging loved ones need patience and respect. Our companions assist with daily living activities, medication reminders, and provide emotional support to combat loneliness.",
    features: [
      "Assistance with hygiene & dressing",
      "Medication management & reminders",
      "Light housekeeping & meal prep",
      "Mobility assistance",
      "Companionship & conversation",
    ],
    price: "From $18/hour",
    rating: 4.8,
    reviews: 85,
    image: "https://i.ibb.co.com/3Y0PPPWf/old-caregiver.jpg",
    metaImage: "https://i.ibb.co.com/MxVF1GX1/Elderly-Service.png",
  },
  {
    id: "sick-care",
    title: "Special Needs Care",
    tagline: "Professional medical assistance at home.",
    description:
      "Recovery at home is faster with the right support. Our specialized caregivers and nurses handle post-surgery care, chronic illness management, and special needs assistance with clinical expertise.",
    features: [
      "Post-surgery recovery support",
      "Vital signs monitoring",
      "Wound care & dressing changes",
      "Physical therapy assistance",
      "Certified nursing assistants available",
    ],
    price: "From $25/hour",
    rating: 5.0,
    reviews: 42,
    image: "https://i.ibb.co.com/PZxSDyC4/nerd-caregiver.png",
    metaImage: "https://i.ibb.co.com/99dt66pW/Sick-People.png",
  },
];

export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return {
      title: "Service Not Found | PrimeCare",
      description: "The requested service could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const title = `${service.title} | PrimeCare`;
  const desc = service.tagline;
  const url = `/services/${id}`;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      images: [
        {
          url: service.metaImage,
          width: 1200,
          height: 630,
          alt: `PrimeCare — ${service.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [service.metaImage],
    },
  };
}

const ServiceDetailsPage = async ({ params }) => {
  const { id } = await params;

  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      {/* --- Header Image Banner --- */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
        <Container className="relative h-full flex flex-col justify-end pb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md mb-4">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Verified Service
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-slate-200 font-light">
              {service.tagline}
            </p>
          </div>
        </Container>
      </div>

      <Container className="mt-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Service Overview
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                {service.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                What&apos;s Included
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-200 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
              <div className="flex gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-full h-fit">
                  <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                    100% Safe & Secure
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    All our caregivers undergo rigorous background checks, NID
                    verification, and face-to-face interviews. We prioritize
                    your family&apos;s safety above all else.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="relative">
            <div className="sticky top-24 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase">
                    Starting Price
                  </p>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                    {service.price}
                  </h3>
                </div>
                <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg border border-yellow-100 dark:border-yellow-800">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-slate-900 dark:text-white">
                    {service.rating}
                  </span>
                  <span className="text-xs text-slate-500">
                    ({service.reviews})
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <Clock className="w-5 h-5" />
                  <span>Flexible Duration (Hourly/Daily)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <MapPin className="w-5 h-5" />
                  <span>Available in your area</span>
                </div>
              </div>

              <Link href={`/booking/${service.id}`} className="w-full">
                <Button className="w-full h-12 text-lg rounded-xl shadow-lg shadow-primary/20">
                  Book This Service <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <p className="text-xs text-center text-slate-400 mt-4">
                No payment required until service is confirmed.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetailsPage;
