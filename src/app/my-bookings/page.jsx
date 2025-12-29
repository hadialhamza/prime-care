"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Container from "@/components/shared/Container";
import { Calendar, MapPin, Clock, X, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const MyBookingsPage = () => {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // State for View Details Modal
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Fetch Bookings
  useEffect(() => {
    const fetchBookings = async () => {
      if (session?.user?.email) {
        try {
          const res = await fetch(
            `/api/booking/my-bookings?email=${session.user.email}`
          );
          const data = await res.json();
          setBookings(data);
        } catch (error) {
          console.error("Error fetching bookings:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchBookings();
  }, [session]);

  // Handle Cancel
  const handleCancel = async (id) => {
    if (!confirm("Are you sure you want to cancel this booking?")) return;

    try {
      const res = await fetch("/api/booking/cancel", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        toast.success("Booking cancelled successfully");
        // Update UI locally
        setBookings((prev) =>
          prev.map((booking) =>
            booking._id === id ? { ...booking, status: "Cancelled" } : booking
          )
        );
      } else {
        toast.error("Failed to cancel booking");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 relative">
      <Container>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          My Bookings
        </h1>
        <p className="text-slate-500 mb-8">
          Manage your scheduled care services
        </p>

        {bookings.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              No bookings found
            </h3>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wider">
                    <th className="p-6 font-semibold">Service</th>
                    <th className="p-6 font-semibold">Status</th>
                    <th className="p-6 font-semibold">Date</th>
                    <th className="p-6 font-semibold">Cost</th>
                    <th className="p-6 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {bookings.map((booking) => (
                    <tr
                      key={booking._id}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="p-6">
                        <span className="font-bold text-slate-900 dark:text-white block">
                          {booking.serviceName}
                        </span>
                        <span className="text-xs text-slate-500">
                          ID: {booking._id.slice(-6)}
                        </span>
                      </td>

                      <td className="p-6">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold capitalize
                          ${booking.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
                              : ""
                            }
                          ${booking.status === "Confirmed"
                              ? "bg-green-100 text-green-700 border border-green-200"
                              : ""
                            }
                          ${booking.status === "Cancelled"
                              ? "bg-red-100 text-red-700 border border-red-200"
                              : ""
                            }
                        `}
                        >
                          {booking.status}
                        </span>
                      </td>

                      <td className="p-6 text-sm text-slate-600 dark:text-slate-300">
                        {new Date(booking.date).toLocaleDateString()}
                      </td>

                      <td className="p-6 font-bold text-slate-900 dark:text-white">
                        ${booking.totalCost}
                      </td>

                      <td className="p-6 text-right space-x-2">
                        {/* VIEW DETAILS BUTTON (Triggers Modal) */}
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-9 text-xs"
                          onClick={() => setSelectedBooking(booking)}
                        >
                          View Details
                        </Button>

                        {/* CANCEL BUTTON (Disabled if Cancelled) */}
                        <Button
                          variant="destructive"
                          size="sm"
                          className="h-9 text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                          onClick={() => handleCancel(booking._id)}
                          disabled={booking.status === "Cancelled"}
                        >
                          {booking.status === "Cancelled"
                            ? "Cancelled"
                            : "Cancel"}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Container>

      {/* --- DETAILS MODAL --- */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Booking Details
              </h3>
              <button
                onClick={() => setSelectedBooking(null)}
                className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-full text-primary">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900 dark:text-white">
                    {selectedBooking.serviceName}
                  </h4>
                  <span className="text-xs text-slate-500 uppercase tracking-wide">
                    ID: {selectedBooking._id}
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Status</span>
                  <span
                    className={`font-bold capitalize ${selectedBooking.status === "Cancelled"
                        ? "text-red-500"
                        : "text-green-600"
                      }`}
                  >
                    {selectedBooking.status}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Date</span>
                  <span className="text-slate-900 dark:text-white font-medium">
                    {new Date(selectedBooking.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Duration</span>
                  <span className="text-slate-900 dark:text-white font-medium">
                    {selectedBooking.duration} Hours
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Total Cost</span>
                  <span className="text-slate-900 dark:text-white font-bold text-lg">
                    ${selectedBooking.totalCost}
                  </span>
                </div>

                <div className="pt-2">
                  <span className="text-slate-500 block mb-1">
                    Location / Address
                  </span>
                  <p className="text-slate-900 dark:text-white font-medium bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                    {selectedBooking.address}, {selectedBooking.district},{" "}
                    {selectedBooking.division}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 pt-0">
              <Button
                onClick={() => setSelectedBooking(null)}
                className="w-full"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;
