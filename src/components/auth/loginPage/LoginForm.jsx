"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/shared/FormInput";
import { Lock, Mail } from "lucide-react";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle Credentials Login
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (res?.error) {
        toast.error("Invalid email or password");
      } else {
        toast.success("Welcome back! Login successful");
        router.push("/");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="w-full max-w-md mx-auto relative">
      <div className="relative bg-linear-to-br from-white/15 to-white/5 dark:from-background/90 dark:to-background/80 p-8 rounded-3xl border border-white/20 shadow-2xl backdrop-blur-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl text-white/95 font-bold tracking-tight">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-blue-100/80 dark:text-gray-300">
            Sign in to continue to your account
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Mail className="w-5 h-5 text-white/60" />
            </div>
            <FormInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="your.email@example.com"
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

          {/* Password Field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Lock className="w-5 h-5 text-white/60" />
            </div>
            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              register={register}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
              error={errors.password}
              className="pl-12 bg-white/5 border-white/20 focus:border-primary/50"
            >
              <Link
                href="/forgot-password"
                className="text-sm text-blue-100 hover:text-white hover:underline underline-offset-4 transition-colors"
              >
                Forgot password?
              </Link>
            </FormInput>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="cursor-pointer mt-2 rounded-xl text-sm font-bold h-12 w-full 
            disabled:opacity-70 transition-all duration-300 bg-linear-to-r from-primary to-primary/80 
            hover:from-primary/90 hover:to-primary/70 hover:shadow-2xl hover:-translate-y-0.5 
            border border-primary/30 shadow-lg"
          >
            {isLoading ? (
              <>
                <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        {/* Divider */}
        <div className="my-6">
          <div className="flex justify-center text-sm">
            <span className="px-4 bg-linear-to-b from-white/15 to-white/5 text-white/70 rounded-full">
              Or continue with
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

        {/* Register Link */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-white/80 text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-white hover:text-primary/90 hover:underline 
              underline-offset-4 transition-colors group"
            >
              Create account
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

export default LoginForm;
