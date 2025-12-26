import { NextResponse } from "next/server";
import { connectToDatabase, collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function PATCH(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "Booking ID is required" },
        { status: 400 }
      );
    }

    const bookingsCollection = await connectToDatabase(collections.bookings);

    // Update the status to 'Cancelled'
    const result = await bookingsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: "Cancelled" } }
    );

    if (result.modifiedCount > 0) {
      return NextResponse.json({ message: "Booking cancelled successfully" });
    } else {
      return NextResponse.json(
        { message: "Booking not found or already cancelled" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
