import { NextResponse } from "next/server";
import { connectToDatabase, collections } from "@/lib/dbConnect";
import { sendInvoiceEmail } from "@/lib/emailService";

export async function POST(req) {
  try {
    const bookingData = await req.json();

    // Validation
    if (!bookingData.userEmail || !bookingData.serviceId || !bookingData.date) {
      return NextResponse.json(
        { message: "Missing required booking fields" },
        { status: 400 }
      );
    }

    const bookingsCollection = connectToDatabase(collections.bookings);

    // Insert into DB
    const result = await bookingsCollection.insertOne({
      ...bookingData,
      createdAt: new Date(),
    });

    if (result.acknowledged) {
      sendInvoiceEmail(bookingData).catch((err) =>
        console.error("Email failed:", err)
      );

      return NextResponse.json(
        {
          message: "Booking confirmed successfully",
          bookingId: result.insertedId,
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "Failed to create booking" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
