import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/components/shared/AuthProvider";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteName = "PrimeCare";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://prime-care-service.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,

  title: {
    default: "PrimeCare | Trusted Care Service Booking Platform",
    template: "%s | PrimeCare",
  },
  description:
    "PrimeCare helps you book trusted baby care, elderly care, and sick care services with flexible scheduling, transparent pricing, and a simple booking experience.",

  keywords: [
    "PrimeCare",
    "care service booking",
    "baby care",
    "elderly care",
    "sick care",
    "home care",
    "caregiver service",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "healthcare",

  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: "PrimeCare | Trusted Care Service Booking Platform",
    description:
      "Book trusted baby care, elderly care, and sick care services with flexible duration and transparent pricing.",
    images: [
      {
        url: "https://i.ibb.co.com/ycPCDS7z/Home-page.png",
        width: 1200,
        height: 630,
        alt: "PrimeCare — Home",
      },
      {
        url: "https://i.ibb.co.com/h1LYwTZ4/logo.png",
        alt: "PrimeCare logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PrimeCare | Trusted Care Service Booking Platform",
    description:
      "Book trusted baby care, elderly care, and sick care services with flexible duration and transparent pricing.",
    images: ["https://i.ibb.co.com/ycPCDS7z/Home-page.png"],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={`${montserrat.className} antialiased`}>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <header className="py-3 sticky top-0 z-50 border-b dark:border-border/20 bg-background/80 backdrop-blur shadow-md">
              <Navbar />
            </header>
            <main className="flex-1 flex flex-col">{children}</main>
            <footer>
              <Footer />
            </footer>
            <Toaster />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
