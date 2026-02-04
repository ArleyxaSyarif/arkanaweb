import AboutSection from "./components/about/AboutSection";
import HeroSection from "./components/hero/HeroSection";
import ServiceSection from "./components/service/ServiceSection";
import TeamSection from "./components/team/TeamSection";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />


      <AboutSection />

      <ServiceSection />

      <TestimonialsSection />

      <TeamSection />

    </div>
  );
}
