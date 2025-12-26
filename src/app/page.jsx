import AboutSection from "@/components/home/AboutSection";
import BannerSection from "@/components/home/BannerSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BannerSection />
      <AboutSection />
    </main>
  );
}
