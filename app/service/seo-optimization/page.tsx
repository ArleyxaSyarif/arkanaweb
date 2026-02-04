import HeroSeo from "./components/HeroSeo";
import CapabilitiesSeo from "./components/CapabilitiesSeo";
import ResultsSeo from "./components/ResultsSeo";
import CtaSeo from "./components/CtaSeo";

export default function SeoOptimizationPage() {
    return (
        <main className="min-h-screen bg-white font-sans">
            <HeroSeo />
            <CapabilitiesSeo />
            <ResultsSeo />
            <CtaSeo />
        </main>
    );
}
