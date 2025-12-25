import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail, Phone, ArrowRight, Map } from "lucide-react";
import Logo from "../shared/Logo";
import Container from "../shared/Container";

const Footer = () => {
  return (
    <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-sm">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="inline-flex">
              <Logo />
            </div>
            <p className="max-w-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Our goal is to make caregiving easy, secure, and accessible for
              everyone. Find trusted professionals for your family&apos;s needs
              today.
            </p>
            <div className="flex gap-4">
              <SocialLink
                href="https://facebook.com/hadialhamza"
                icon={<FaFacebookF size={20} />}
              />
              <SocialLink
                href="https://x.com/hadialhamza"
                icon={<FaXTwitter size={20} />}
              />
              <SocialLink
                href="https://github.com/hadialhamza"
                icon={<FaGithub size={20} />}
              />
              <SocialLink
                href="https://linkedin.com/in/hadialhamza"
                icon={<FaLinkedinIn size={20} />}
              />
            </div>
          </div>

          <div className="lg:ml-8">
            <h3 className="font-bold text-base text-primary dark:text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/services/baby-sitting">
                Baby Sitting
              </FooterLink>
              <FooterLink href="/services/elderly-care">
                Elderly Care
              </FooterLink>
              <FooterLink href="/services/sick-care">
                Sick People Service
              </FooterLink>
              <FooterLink href="/services/special-needs">
                Special Needs Care
              </FooterLink>
            </ul>
          </div>

          <div className="lg:ml-8">
            <h3 className="font-bold text-base text-primary dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <FooterLink href="about">About Us</FooterLink>
              <FooterLink href="how-it-works">How it Works</FooterLink>
              <FooterLink href="login">Login</FooterLink>
              <FooterLink href="register">Register</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base text-primary dark:text-white mb-2">
              Contact Us
            </h3>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                <Map className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Mahiganj, Rangpur Sadar, Rangpur.</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Phone className="w-4.5 h-4.5 text-primary shrink-0" />
                <span>+880 1765 060 631</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hamzaglory@gmail.com</span>
              </li>
            </ul>

            <div className="flex items-center gap-1">
              <input
                type="email"
                placeholder="Enter email for updates"
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
              />
              <button className="bg-primary hover:bg-primary/80 text-white p-1.5 rounded-md transition-colors">
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 py-4 mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {new Date().getFullYear()} Prime Care. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-500">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Cookies
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Security
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

const FooterLink = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-blue-500 transition-colors flex items-center gap-1 group"
    >
      <span className="w-0 group-hover:w-2 transition-all h-0.5 bg-primary block"></span>
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, icon }) => (
  <a
    target="_blank"
    href={href}
    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-primary dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all hover:-translate-y-1 duration-300"
  >
    {icon}
  </a>
);

export default Footer;
