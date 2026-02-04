import AboutSection from "./components/about/AboutSection";
import PartnerSection from "./components/partner/PartnerSection";
import ChooseSection from "./components/choose/ChooseSection";
import HeroSection from "./components/hero/HeroSection";
import ServiceSection from "./components/service/ServiceSection";
import TeamSection from "./components/team/TeamSection";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <PartnerSection />

      <AboutSection />

      <ServiceSection />

      <ChooseSection />

      <TestimonialsSection />

      <TeamSection />

    </div>
  );
}
