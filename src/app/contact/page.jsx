import React from "react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, MessageCircleQuestion } from "lucide-react";

export const metadata = {
  title: "Contact Us",
};

const ContactPage = () => {
  return (
    <div className="bg-background pb-20">
      {/* --- Page Header --- */}
      <div className="py-16 mb-16">
        <Container className="text-center">
          <SectionHeading
            title={
              <span>
                Contact <span className="text-primary">Us</span>
              </span>
            }
            titleClassName="text-4xl md:text-5xl"
            description="Have questions or need assistance? We are here to help. Reach out to us via phone, email, or the form below."
            align="center"
          />
        </Container>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          {/* --- Left Column: Contact Info --- */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Whether you need to book a service, inquire about pricing, or
                just want to say hello, our support team is ready to assist you
                24/7.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                    Office Address
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Mahiganj, Rangpur Sadar, Rangpur.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                    Phone Number
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    +880 1765 060 631
                  </p>
                  <p className="text-slate-500 text-xs mt-1">
                    Sat - Thu, 9am - 6pm
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                    Email Support
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    hamzaglory@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Column: Contact Form --- */}
          <div className="bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Send a Message
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Hadi"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Hamza"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="hamza@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <Button className="w-full h-12 text-lg font-bold rounded-xl">
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* --- FAQ Section --- */}
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services and caregiving process."
            align="center"
            className="mb-12"
          />

          <div className="grid gap-6">
            {[
              {
                q: "How do you verify your caregivers?",
                a: "All our caregivers undergo a rigorous vetting process including thorough background checks, identity verification, reference checks, and personal interviews to ensure they meet our high standards of safety and professionalism.",
              },
              {
                q: "Can I choose my own caregiver?",
                a: "Yes! We match you with caregivers based on your needs and preferences. You can interview potential caregivers to ensure they are the right fit for your family before service begins.",
              },
              {
                q: "What areas do you serve?",
                a: "We currently serve families across the entire metropolitan area and surrounding suburbs. Please contact us with your location to confirm service availability in your specific neighborhood.",
              },
              {
                q: "Is there a minimum number of hours required?",
                a: "We offer flexible scheduling options. While we recommend a minimum of 4 hours per visit to ensure consistency and quality of care, we can discuss tailored plans to suit your specific or short-term needs.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    <MessageCircleQuestion className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
