import Image from "next/image";
import ToolsSection from "./components/tools/ToolsSection";
import ServiceSection from "./components/service/ServiceSection";
import HeroSection from "./components/hero/HeroSection";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <AboutSection />
      <ServiceSection />
      <ToolsSection />
      <ContactSection />

    </div>
  );
}
