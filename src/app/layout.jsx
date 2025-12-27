import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/components/shared/AuthProvider";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "PrimeCare | Premium Care Services for Your Loved Ones",
  description:
    "PrimeCare helps you book trusted baby care, elderly care, and sick care services with flexible scheduling, transparent pricing, and a simple booking experience.",
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
