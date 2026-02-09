"use client";

import { useState } from "react";
import PricingHero from "./components/PricingHero";
import PricingGrid from "./components/PricingGrid";
import FaqPricing from "./components/FaqPricing";
import CTASection from "../components/cta/CTASection";

export default function PricingPage() {

    return (
        <main className="min-h-screen bg-white font-sans">
            <PricingHero />
            <PricingGrid />
            <CTASection />
            <FaqPricing />
        </main>
    );
}
