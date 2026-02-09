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

            <div className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">

                    <PricingGrid />
                </div>
            </div>
            <CTASection />
            <FaqPricing />
        </main>
    );
}
