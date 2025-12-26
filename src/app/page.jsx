import AboutSection from "@/components/home/AboutSection";
import BannerSection from "@/components/home/BannerSection";
import ServiceSection from "@/components/home/ServiceSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <AboutSection />
      <ServiceSection />
      <TestimonialSection />
    </div>
  );
}
