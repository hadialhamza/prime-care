'use client'
import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import Container from "@/components/shared/Container";
import RegisterBanner from "@/components/auth/registerPage/RegisterBanner";
import RegisterForm from "@/components/auth/registerPage/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-48 -translate-x-48" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-48 translate-x-48" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <div className="py-8 pl-5 inline-block group">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-medium bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2.5 rounded-xl"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to Home</span>
            <Sparkles className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:p-8 items-center min-h-[calc(100vh-120px)]">
          <RegisterBanner />
          <RegisterForm />
        </div>
      </Container>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
          75% {
            transform: translateY(-10px) translateX(-20px);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RegisterPage;
