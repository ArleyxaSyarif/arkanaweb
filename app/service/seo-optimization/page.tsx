import HeroSeo from "./components/HeroSeo";
import CapabilitiesSeo from "./components/CapabilitiesSeo";
import ResultsSeo from "./components/ResultsSeo";

export default function SeoOptimizationPage() {
    return (
        <main className="min-h-screen bg-white font-sans">
            <HeroSeo />
            <CapabilitiesSeo />
            {/* <ResultsSeo /> */}
        </main>
    );
}
