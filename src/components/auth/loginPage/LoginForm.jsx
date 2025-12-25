"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
        toast.success("Login successful!");
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
    <div className="w-full max-w-md mx-auto bg-white/10 dark:bg-background p-8 rounded-2xl border border-white/10 shadow-2xl">
      <div className="w-full space-y-8">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-blue-100/70 dark:text-gray-400">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none text-white">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="name@example.com"
              // Input Styling: White in Light Mode (Classic), Glass in Dark Mode
              className="flex h-11 w-full rounded-lg border border-transparent bg-white dark:bg-white/10 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-all shadow-sm"
            />
            {errors.email && (
              <p className="text-xs text-red-300 font-medium mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium leading-none text-white">
                Password
              </label>
              <Link href="#" className="text-sm text-blue-100 hover:text-white hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                {...register("password", { required: "Password is required" })}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="flex h-11 w-full rounded-lg border border-transparent bg-white dark:bg-white/10 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 pr-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-all shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-300 font-medium mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center justify-center rounded-lg text-sm font-bold bg-white text-blue-600 hover:bg-blue-50 h-11 w-full disabled:opacity-70 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {isLoading ? (
              <AiOutlineLoading3Quarters className="animate-spin mr-2" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/20" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            {/* Transparent background so it doesn't look like a box on the gradient */}
            <span className="bg-transparent px-2 text-white/70">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login */}
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="inline-flex items-center justify-center rounded-lg text-sm font-medium border border-white/20 bg-white/10 hover:bg-white/20 text-white h-11 w-full gap-2 transition-colors backdrop-blur-sm"
        >
          <FcGoogle className="w-5 h-5" />
          Google
        </button>

        {/* Register Link */}
        <p className="text-center text-sm text-white/80">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-white hover:underline underline-offset-4"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;