import HeroCustom from "./components/HeroCustom";
import ProcessCustom from "./components/ProcessCustom";
import FeatureCustom from "./components/FeatureCustom";
import CtaCustom from "./components/CtaCustom";

export default function WebsiteCustomPage() {
    return (
        <main className="min-h-screen bg-white font-sans">
            <HeroCustom />
            <ProcessCustom />
            <FeatureCustom />
            <CtaCustom />
        </main>
    );
}
