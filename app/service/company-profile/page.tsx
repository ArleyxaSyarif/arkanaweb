import HeroProfile from "./components/HeroProfile";
import KeyElements from "./components/KeyElements";
import PortfolioPreview from "./components/PortfolioPreview";
import CtaProfile from "./components/CtaProfile";

export default function CompanyProfilePage() {
    return (
        <main className="flex h-full grow flex-col items-center bg-white font-sans">
            <HeroProfile />
            <KeyElements />
            <PortfolioPreview />
            <CtaProfile />
        </main>
    );
}
