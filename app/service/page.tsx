
import PartnerSection from "../components/partner/PartnerSection";
import CardService from "./components/CardService";
import ChooseService from "./components/ChooseService";
import HeroService from "./components/HeroService";
import RoadmapService from "./components/RoadmapService";

export default function ServicePage() {
    return (
        <div>
            <HeroService />
            <CardService />
            <ChooseService />

            <RoadmapService />
            <PartnerSection />
        </div>
    );
}