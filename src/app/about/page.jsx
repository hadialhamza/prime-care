import React from "react";
import Image from "next/image";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Heart, ShieldCheck, Users, Clock } from "lucide-react";

export const metadata = {
  title: "About Us",
};

const AboutPage = () => {
  return (
    <div className="bg-background pb-20">
      {/* --- Page Header --- */}
      <div className="py-16 mb-16">
        <Container className="text-center">
          <SectionHeading
            title={
              <span>
                About <span className="text-primary">Prime Care</span>
              </span>
            }
            titleClassName="text-4xl md:text-5xl"
            description="We are dedicated to providing compassionate, professional, and trusted care services for families across the country."
            align="center"
          />
        </Container>
      </div>

      <Container>
        {/* --- Section 1: Our Story --- */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-100 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1000&auto=format&fit=crop"
              alt="Caregiver holding hands"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              title={
                <span>
                  Our Journey to{" "}
                  <span className="text-primary">Trusted Care</span>
                </span>
              }
              description={
                <>
                  PrimeCare was founded with a simple yet powerful belief:
                  everyone deserves to feel safe and supported in their own
                  home. We realized that finding reliable care for children,
                  elderly parents, or sick family members was a stressful
                  challenge for many.
                  <br />
                  <br />
                  Today, we connect thousands of families with verified,
                  trained, and compassionate caregivers. We are not just a
                  service provider; we are a partner in your family&apos;s
                  well-being, ensuring peace of mind when you need it most.
                </>
              }
              align="left"
            />
          </div>
        </div>

        {/* --- Section 2: Mission & Vision --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white dark:bg-slate-950 p-10 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-lg">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              To empower families by providing accessible, high-quality, and
              trustworthy caregiving solutions that improve the quality of life
              for their loved ones.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-950 p-10 rounded-3xl border border-slate-100 dark:border-slate-800 text-center shadow-lg">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Our Vision
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              To become the nation&apos;s most trusted platform for home care
              services, setting the standard for safety, empathy, and
              professionalism in the industry.
            </p>
          </div>
        </div>

        {/* --- Section 3: Core Values --- */}
        <SectionHeading
          title={
            <span>
              Why Families <span className="text-primary">Trust Us</span>
            </span>
          }
          description="Our core values define who we are and how we serve your family."
          className="mb-12"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: "Safety First",
              desc: "Every caregiver undergoes rigorous background checks and identity verification.",
            },
            {
              icon: <Heart className="w-6 h-6" />,
              title: "Compassionate Care",
              desc: "We hire caregivers who lead with empathy and treat your family like their own.",
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: "Reliability",
              desc: "We value your time. Our professionals are punctual and committed to their schedules.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-6 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 shrink-0 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
