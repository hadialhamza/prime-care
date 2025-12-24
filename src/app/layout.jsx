import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";

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
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
