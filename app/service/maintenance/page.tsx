import HeroMaintenance from "./components/HeroMaintenance";
import FeaturesMaintenance from "./components/FeaturesMaintenance";
import SupportMaintenance from "./components/SupportMaintenance";
import PricingMaintenance from "./components/PricingMaintenance";

export default function MaintenancePage() {
    return (
        <main className="flex flex-col items-center w-full bg-white">
            <div className="w-full max-w-[1280px] flex flex-col px-4 md:px-10 lg:px-40 pb-20">
                <HeroMaintenance />
                <FeaturesMaintenance />
                <SupportMaintenance />
                <PricingMaintenance />
            </div>
        </main>
    );
}
