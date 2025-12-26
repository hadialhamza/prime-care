"use server";

import { collections, connectToDatabase } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const registerUser = async (userData) => {
  const { name, email, contact, nid, password } = userData;

  // 1. check if all fields are present
  if (!email || !password || !name || !contact || !nid) {
    return {
      acknowledged: false,
      message: "Please provide all required fields",
    };
  }

  try {
    const usersCollection = connectToDatabase(collections.users);

    // 2. check existing user
    const isExist = await usersCollection.findOne({ email });
    if (isExist) {
      return { acknowledged: false, message: "User already exists" };
    }

    // 3. create user data and hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      name,
      email,
      contact,
      nid,
      password: hashedPassword,
      role: "user",
      provider: "credentials",
      createdAt: new Date(),
    };

    // 4. insert user to database
    const result = await usersCollection.insertOne(newUser);
    if (result.acknowledged) {
      return {
        acknowledged: true,
        insertedId: result.insertedId.toString(),
        message: "User registered successfully",
      };
    } else {
      return { acknowledged: false, message: "Failed to insert user" };
    }
  } catch (error) {
    console.error("Registration Error:", error);
    return { acknowledged: false, message: "Server error occurred" };
  }
};
