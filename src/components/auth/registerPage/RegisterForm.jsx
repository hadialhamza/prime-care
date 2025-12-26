"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/shared/FormInput";
import { registerUser } from "@/actions/server/auth";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await registerUser(data);

      if (response?.acknowledged) {
        toast.success("Account created successfully!");
        router.push("/login");
      } else {
        throw new Error(response?.message || "Registration failed");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: callbackUrl });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/10 dark:bg-background p-5 md:p-8 rounded-2xl border border-white/10 shadow-xl">
      <div className="">
        <div className="text-center mb-3">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Create Account
          </h2>
          <p className="text-sm text-blue-100/70 dark:text-gray-400">
            Join us to find the best care for your family
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Name Field */}
          <FormInput
            label="Full Name"
            name="name"
            type="text"
            placeholder="Your name"
            register={register}
            rules={{ required: "Name is required" }}
            error={errors.name}
          />

          {/* Email Field */}
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="name@example.com"
            register={register}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            error={errors.email}
          />

          {/* Contact No Field */}
          <FormInput
            label="Contact Number"
            name="contact"
            type="tel"
            placeholder="Ex: 01000000000"
            register={register}
            rules={{ required: "Contact number is required", maxLength: 11 }}
            error={errors.contact}
          />

          {/* NID No Field */}
          <FormInput
            label="NID Number"
            name="nid"
            type="text"
            placeholder="Enter your NID number"
            register={register}
            rules={{ required: "NID number is required" }}
            error={errors.nid}
          />

          {/* Password Field */}
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Create a password"
            register={register}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              pattern: {
                value: /(?=.*[a-z])(?=.*[A-Z])/,
                message:
                  "Must contain at least 1 uppercase and 1 lowercase letter",
              },
            }}
            error={errors.password}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="mt-3 rounded-lg text-sm font-bold h-11 w-full disabled:opacity-70 transition-all shadow-sm hover:shadow-xl hover:-translate-y-0.5"
          >
            {isLoading ? (
              <AiOutlineLoading3Quarters className="animate-spin mr-2" />
            ) : (
              "Register"
            )}
          </Button>
        </form>

        <p className="my-3 text-center text-xs text-white/90 uppercase">
          Or register with
        </p>

        {/* Social Login */}
        <Button
          onClick={handleGoogleLogin}
          type="button"
          className="inline-flex items-center justify-center rounded-lg text-sm font-medium border border-white/20 bg-white/10 hover:bg-white/20 text-white h-11 w-full gap-2 transition-colors backdrop-blur-sm"
        >
          <FcGoogle className="w-5 h-5" />
          Google
        </Button>

        {/* Login Link */}
        <p className="mt-4 text-center text-sm text-white/80">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-white hover:underline underline-offset-4"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
