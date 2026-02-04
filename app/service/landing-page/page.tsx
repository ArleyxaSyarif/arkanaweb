import HeroLanding from "./components/HeroLanding";
import StatsLanding from "./components/StatsLanding";
import ShowcaseLanding from "./components/ShowcaseLanding";
import FeaturesLanding from "./components/FeaturesLanding";
import CtaLanding from "./components/CtaLanding";

export default function LandingPageService() {
    return (
        <main className="flex flex-col w-full bg-white font-sans">
            <HeroLanding />
            <StatsLanding />
            <ShowcaseLanding />
            <FeaturesLanding />
            <CtaLanding />
        </main>
    );
}
