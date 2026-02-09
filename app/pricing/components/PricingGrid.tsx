"use client";

import { CheckCircle2, X } from "lucide-react";

export default function PricingGrid() {
    const plans = [
        {
            name: "Starter",
            desc: "Fitur dasar untuk individu dan proyek kecil.",
            price: 99,
            features: [
                { text: "Website 5 Halaman", basic: true },
                { text: "Desain Mobile Responsif", basic: true },
                { text: "Optimasi SEO Dasar", basic: true },
                { text: "Termasuk Hosting Standar", basic: true },
                { text: "Integrasi CMS", basic: false },
            ]
        },
        {
            name: "Professional",
            desc: "Sempurna untuk bisnis berkembang yang butuh lebih.",
            price: 199,
            isPopular: true,
            features: [
                { text: "Hingga 10 Halaman", basic: true },
                { text: "Integrasi CMS Lengkap", basic: true },
                { text: "Suite SEO Lanjutan", basic: true },
                { text: "Dukungan Email & Chat Prioritas", basic: true },
                { text: "Domain Gratis selama 1 Tahun", basic: true },
            ]
        },
        {
            name: "Enterprise",
            desc: "Dukungan dan infrastruktur khusus untuk skala besar.",
            price: 499,
            features: [
                { text: "Halaman Tak Terbatas", basic: true },
                { text: "Siap E-commerce", basic: true },
                { text: "Integrasi API Kustom", basic: true },
                { text: "Manajer Proyek Khusus", basic: true },
                { text: "Hosting Premium Kecepatan Tinggi", basic: true },
            ]
        }
    ];

    return (
        <section className="px-4 sm:px-6 lg:px-8 relative z-20 pb-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-2xl p-8 flex flex-col transition-all duration-300 group shadow-lg ${plan.isPopular
                            ? 'border-2 border-[#7f13ec] shadow-[0_0_20px_-5px_rgba(127,19,236,0.3)] z-10 relative'
                            : 'border border-gray-200 hover:-translate-y-1'
                            }`}
                    >
                        {plan.isPopular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7f13ec] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                Paling Populer
                            </div>
                        )}

                        <div className="mb-6">
                            <h3 className={`text-lg font-bold mb-2 ${plan.isPopular ? 'text-[#7f13ec]' : 'text-slate-900'}`}>
                                {plan.name}
                            </h3>
                            <p className="text-sm text-slate-500">{plan.desc}</p>
                        </div>

                        <div className="flex items-baseline mb-8">
                            <span className="text-4xl font-black text-slate-900 tracking-tight">${plan.price}</span>
                            <span className="text-base font-medium text-slate-500 ml-1">/bulan</span>
                        </div>

                        <ul className="flex-col gap-4 mb-8 flex-grow space-y-4">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className={`flex items-start gap-3 text-sm ${feature.basic ? 'text-slate-900' : 'text-slate-400 opacity-60'}`}>
                                    {feature.basic ? (
                                        <CheckCircle2 className="w-5 h-5 text-[#7f13ec] shrink-0" />
                                    ) : (
                                        <X className="w-5 h-5 shrink-0" />
                                    )}
                                    <span className={feature.basic ? "font-medium" : ""}>{feature.text}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            className={`w-full py-3 px-4 rounded-lg font-bold text-sm transition-colors mt-auto ${plan.isPopular
                                ? 'bg-[#7f13ec] text-white hover:bg-[#5e0eb0] shadow-lg shadow-[#7f13ec]/30'
                                : 'border border-gray-200 bg-white text-slate-900 hover:border-[#7f13ec] hover:text-[#7f13ec]'
                                }`}
                        >
                            {index === 2 ? 'Hubungi Penjualan' : 'Mulai Sekarang'}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
