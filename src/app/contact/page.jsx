"use client";

import React from "react";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import toast from "react-hot-toast";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message sent successfully! We will get back to you soon.");
    e.target.reset();
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pb-20">
      {/* --- Page Header --- */}
      <div className="bg-slate-50 dark:bg-slate-900 py-16 mb-16 border-b border-slate-100 dark:border-slate-800">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have questions or need assistance? We are here to help. Reach out to
            us via phone, email, or the form below.
          </p>
        </Container>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
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
                    Level-4, 34, Awal Centre, Banani, Dhaka
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
                    +880 1322-810867
                  </p>
                  <p className="text-slate-500 text-xs mt-1">
                    Mon - Fri, 9am - 6pm
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
                    support@primecare.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Column: Contact Form --- */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Doe"
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
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-lg font-bold rounded-xl"
              >
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
