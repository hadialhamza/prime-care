"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { MapPin, Clock, CreditCard, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";

const servicesDB = {
  "baby-sitting": {
    title: "Baby Sitting",
    price: 15,
    image: "https://i.ibb.co.com/Y43CRjS4/baby-caregiver.png",
  },
  "elderly-care": {
    title: "Elderly Care",
    price: 18,
    image: "https://i.ibb.co.com/3Y0PPPWf/old-caregiver.jpg",
  },
  "sick-care": {
    title: "Sick & Special Needs",
    price: 25,
    image: "https://i.ibb.co.com/PZxSDyC4/nerd-caregiver.png",
  },
};

const divisions = ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Sylhet"];
const districts = {
  Dhaka: ["Dhaka City", "Gazipur", "Narayanganj"],
  Chittagong: ["Chittagong City", "Cox's Bazar", "Comilla"],
};

const BookingPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const { data: session } = useSession();

  const service = servicesDB[id] || servicesDB["baby-sitting"];

  const [formData, setFormData] = useState({
    date: "",
    days: 0,
    duration: 1,
    division: "Dhaka",
    district: "Dhaka City",
    address: "",
  });

  const [totalCost, setTotalCost] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let cost = 0;
    const days = parseInt(formData.days || 0);
    if (days > 0) {
      cost = service.price * 24 * days;
    } else {
      cost = service.price * formData.duration;
    }
    setTotalCost(cost);
  }, [formData.duration, formData.days, service.price]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const bookingData = {
      serviceId: id,
      serviceName: service.title,
      userEmail: session?.user?.email,
      userName: session?.user?.name,
      ...formData,
      totalCost,
      status: "Pending",
      bookingDate: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/booking/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (res.ok) {
        toast.success("Booking Confirmed Successfully!");
        router.push("/my-bookings");
      } else {
        toast.error("Failed to book service.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <Container>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
          Complete Your Booking
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Schedule
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Service Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Duration (Days)
                  </label>
                  <select
                    name="days"
                    value={formData.days}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white"
                  >
                    <option value="0">Select Days</option>
                    {[1, 2, 3, 4, 5, 7, 10, 15, 30].map((d) => (
                      <option key={d} value={d}>
                        {d} Days
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Duration (Hours)
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    disabled={parseInt(formData.days || 0) > 0}
                    className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white disabled:opacity-50"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12, 24].map((h) => (
                      <option key={h} value={h}>
                        {h} Hours
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" /> Location Details
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Division
                  </label>
                  <select
                    name="division"
                    onChange={handleChange}
                    value={formData.division}
                    className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white"
                  >
                    {divisions.map((div) => (
                      <option key={div} value={div}>
                        {div}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    District
                  </label>
                  <select
                    name="district"
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white"
                  >
                    {(districts[formData.division] || ["Dhaka City"]).map(
                      (dist) => (
                        <option key={dist} value={dist}>
                          {dist}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Full Address / Area
                </label>
                <textarea
                  name="address"
                  required
                  placeholder="House No, Road No, Flat No..."
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm opacity-70">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" /> Payment Method
              </h2>
              <p className="text-sm text-slate-500">
                Payment will be collected after service completion (Cash on
                Delivery).
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-24 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b pb-4 border-slate-100 dark:border-slate-800">
                Booking Summary
              </h3>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </p>
                  <p className="text-sm text-slate-500">
                    ${service.price} / hour
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex justify-between">
                  <span>Rate</span>
                  <span>${service.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration</span>
                  <span>{formData.duration} Hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Charge</span>
                  <span>$0.00</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-lg text-slate-900 dark:text-white">
                  <span>Total Cost</span>
                  <span>${totalCost}</span>
                </div>
              </div>

              <Button
                onClick={handleBooking}
                disabled={isSubmitting || !formData.date || !formData.address}
                className="w-full h-12 text-lg font-bold rounded-xl"
              >
                {isSubmitting ? "Confirming..." : "Confirm Booking"}
              </Button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-green-600 font-medium bg-green-50 dark:bg-green-900/20 py-2 rounded-lg">
                <CheckCircle2 className="w-3 h-3" /> No upfront payment required
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookingPage;
