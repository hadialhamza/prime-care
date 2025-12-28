"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/shared/Container";
import RegisterBanner from "@/components/auth/registerPage/RegisterBanner";
import RegisterForm from "@/components/auth/registerPage/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="bg-linear-to-r from-primary to-primary/80 dark:from-sidebar dark:to-sidebar/90 pb-20">
      <Container>
        <div className="py-6 pl-5 inline-block">
          <Link
            href="/"
            className="group flex items-center gap-1 text-white/80 hover:text-white hover:scale-102 transition-transform duration-200 font-medium"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Home
          </Link>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 md:p-6">
          <RegisterBanner />
          <RegisterForm />
        </div>
      </Container>
    </div>
  );
};

export default RegisterPage;
