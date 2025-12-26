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
    <div className="w-full max-w-md mx-auto bg-white/10 dark:bg-background p-5 md:p-8 rounded-2xl border border-white/10 shadow-xl">
      <div className="">
        <div className="text-center mb-6">
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
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your name"
            register={register}
            rules={{ required: "Email is required" }}
            error={errors.email}
          />

          {/* Password Field */}
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            register={register}
            rules={{ required: "Password is required" }}
            error={errors.password}
          >
            <Link
              href="#"
              className="text-sm text-blue-100 hover:text-white hover:underline underline-offset-4"
            >
              Forgot password?
            </Link>
          </FormInput>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="cursor-pointer mt-3 rounded-lg text-sm font-bold h-11 w-full disabled:opacity-70 transition-all shadow-sm hover:shadow-xl hover:-translate-y-0.5"
          >
            {isLoading ? (
              <AiOutlineLoading3Quarters className="animate-spin mr-2" />
            ) : (
              "Login"
            )}
          </Button>
        </form>

        <p className="my-4 text-center text-xs text-white/90 uppercase">
          Or continue with
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

        {/* Register Link */}
        <p className="mt-4 text-center text-sm text-white/80">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-white hover:underline underline-offset-4"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
