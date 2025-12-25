import LoginBanner from "@/components/auth/loginPage/LoginBanner";
import LoginForm from "@/components/auth/loginPage/LoginForm";
import Container from "@/components/shared/Container";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div
      className={`bg-linear-to-r from-primary to-primary/80 dark:from-sidebar dark:to-sidebar/90`}
    >
      <Container>
        <div className="pt-8 pl-5 inline-block">
        <Link
          href="/"
          className="group flex items-center gap-1 text-white/80 hover:text-white hover:scale-102 transition-transform duration-200 w-fit font-medium"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/> Back to Home
        </Link>
      </div>
        <div className="grid lg:grid-cols-2 gap-10 p-6 items-center">
          <LoginBanner />
          <LoginForm />
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;