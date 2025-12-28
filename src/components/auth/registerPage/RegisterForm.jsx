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
import { User, Mail, Phone, IdCard, Lock } from "lucide-react";

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
    <div className="w-full max-w-md mx-auto relative">
      <div className="relative bg-linear-to-br from-white/15 to-white/5 dark:from-background/90 dark:to-background/80 p-8 rounded-3xl border border-white/20 shadow-2xl backdrop-blur-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl text-white/95 font-bold tracking-tight">
            Join PrimeCare
          </h2>
          <p className="mt-2 text-sm text-blue-100/80 dark:text-gray-300">
            Create your account to get started
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <User className="w-5 h-5 text-white/60" />
            </div>
            <FormInput
              label="Full Name"
              name="name"
              type="text"
              placeholder="Your full name"
              register={register}
              rules={{ required: "Name is required" }}
              error={errors.name}
              className="pl-12 bg-white/5 border-white/20 focus:border-primary/50"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Mail className="w-5 h-5 text-white/60" />
            </div>
            <FormInput
              label="Email Address"
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
              className="pl-12 bg-white/5 border-white/20 focus:border-primary/50"
            />
          </div>

          {/* Contact No Field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Phone className="w-5 h-5 text-white/60" />
            </div>
            <FormInput
              label="Contact Number"
              name="contact"
              type="tel"
              placeholder="Ex: 01000000000"
              register={register}
              rules={{
                required: "Contact number is required",
                maxLength: 11,
                pattern: {
                  value: /^01[3-9]\d{8}$/,
                  message: "Please enter a valid Bangladeshi phone number",
                },
              }}
              error={errors.contact}
              className="pl-12 bg-white/5 border-white/20 focus:border-primary/50"
            />
          </div>

          {/* NID No Field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <IdCard className="w-5 h-5 text-white/60" />
            </div>
            <FormInput
              label="NID Number"
              name="nid"
              type="text"
              placeholder="Enter your NID number"
              register={register}
              rules={{
                required: "NID number is required",
                pattern: {
                  value: /^[0-9]{10,17}$/,
                  message: "Please enter a valid NID number",
                },
              }}
              error={errors.nid}
              className="pl-12 bg-white/5 border-white/20 focus:border-primary/50"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Lock className="w-5 h-5 text-white/60" />
            </div>
            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="Create a strong password"
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
              className="pl-12 bg-white/5 border-white/20 focus:border-primary/50"
            />
          </div>

          {/* Password strength indicator */}
          <div className="text-xs text-white/60 text-right mt-1">
            At least 6 characters with uppercase & lowercase letters
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="cursor-pointer mt-4 rounded-xl text-sm font-bold h-12 w-full 
            disabled:opacity-70 transition-all duration-300 bg-linear-to-r from-primary to-primary/80 
            hover:from-primary/90 hover:to-primary/70 hover:shadow-2xl hover:-translate-y-0.5 
            border border-primary/30 shadow-lg"
          >
            {isLoading ? (
              <>
                <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </Button>
        </form>

        {/* Divider */}
        <div className="my-6">
          <div className="flex justify-center text-sm">
            <span className="px-4 bg-linear-to-b from-white/15 to-white/5 text-white/70 rounded-full">
              Or register with
            </span>
          </div>
        </div>

        {/* Social Login */}
        <Button
          onClick={handleGoogleLogin}
          type="button"
          className="inline-flex items-center justify-center rounded-xl text-sm font-medium 
          border border-white/20 bg-white/10 hover:bg-white/20 text-white h-12 w-full gap-3 
          transition-all duration-300 backdrop-blur-sm hover:border-white/30 hover:shadow-xl"
        >
          <div className="p-1.5 bg-white rounded-lg">
            <FcGoogle className="w-5 h-5" />
          </div>
          <span>Continue with Google</span>
        </Button>

        {/* Login Link */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-white/80 text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-white hover:text-primary/90 hover:underline 
              underline-offset-4 transition-colors group"
            >
              Sign in here
              <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
