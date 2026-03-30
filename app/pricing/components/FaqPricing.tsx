"use client";

import { useEffect, useState } from "react";

type WebsiteType = { id: number; name: string; basePrice: number };
type Industry = { id: number; name: string; extraPrice: number };
type Feature = { id: number; name: string; price: number };

export default function PricingCalculator() {
    const [websiteTypes, setWebsiteTypes] = useState<WebsiteType[]>([]);
    const [industries, setIndustries] = useState<Industry[]>([]);
    const [features, setFeatures] = useState<Feature[]>([]);

    const [selectedWebsiteType, setSelectedWebsiteType] = useState<number | null>(null);
    const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null);
    const [selectedFeatures, setSelectedFeatures] = useState<number[]>([]);
    const [pages, setPages] = useState<number>(1);

    const [totalPrice, setTotalPrice] = useState<number | null>(null);

    useEffect(() => {
        async function fetchData() {
            const wt = await fetch("/api/websiteType").then(res => res.json());
            const ind = await fetch("/api/industry").then(res => res.json());
            const ft = await fetch("/api/feature").then(res => res.json());
            setWebsiteTypes(wt);
            setIndustries(ind);
            setFeatures(ft);
        }
        fetchData();
    }, []);

    async function calculatePrice() {
        if (!selectedWebsiteType || !selectedIndustry) return;

        const res = await fetch("/api/pricing", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                websiteTypeId: selectedWebsiteType,
                industryId: selectedIndustry,
                featureIds: selectedFeatures,
                pages,
            }),
        });

        const data = await res.json();
        if (!data.error) setTotalPrice(data.totalPrice);
    }

    return (
        <div className="bg-[#fcf8ff] text-[#1b1b24] antialiased min-h-screen">
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
                
                h1, h2, h3, .font-headline { font-family: 'Manrope', sans-serif; }
                .material-symbols-outlined { 
                    font-family: 'Material Symbols Outlined'; 
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; 
                }
                .glass-nav { backdrop-filter: blur(20px); }
                .primary-gradient { background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); }
                .custom-shadow { box-shadow: 0px 4px 20px rgba(99, 102, 241, 0.06), 0px 12px 40px rgba(27, 27, 36, 0.04); }
                input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
            `}</style>

            <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-indigo-100 shadow-sm">
                <div className="flex justify-between items-center px-8 h-20 max-w-7xl mx-auto">
                    <div className="text-2xl font-bold tracking-tight text-indigo-900">EtherealCalc</div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a className="text-slate-600 hover:text-[#6366f1] transition-colors font-medium" href="#">Solutions</a>
                        <a className="text-slate-600 hover:text-[#6366f1] transition-colors font-medium" href="#">Methodology</a>
                        <a className="text-slate-600 hover:text-[#6366f1] transition-colors font-medium" href="#">Pricing</a>
                        <a className="text-slate-600 hover:text-[#6366f1] transition-colors font-medium" href="#">Enterprise</a>
                    </div>
                    <button className="bg-[#6366f1] text-[#ffffff] px-6 py-2.5 rounded-md font-semibold text-sm transition-all active:scale-95 duration-150 primary-gradient">Get Started</button>
                </div>
            </nav>

            <main className="pt-32 pb-40 px-6 max-w-7xl mx-auto">
                <header className="mb-16 text-center md:text-left">
                    <div className="inline-block px-4 py-1 rounded-full bg-[#6366f1]/10 text-[#6366f1] text-[10px] font-bold tracking-widest uppercase mb-4">Pricing Strategy</div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-indigo-950 tracking-tight leading-tight mb-6 font-headline">Website Pricing Calculator</h1>
                    <p className="text-lg text-[#474659] max-w-2xl leading-relaxed">Precision-engineered cost estimation for your next digital architecture. Select your requirements below to receive a real-time investment summary.</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-7 space-y-12">
                        <section className="space-y-4">
                            <label className="block text-xs font-bold uppercase tracking-wider text-[#6366f1]">1. Website Type</label>
                            <div className="relative">
                                <select
                                    className="w-full bg-[#e5e4f5] border-none rounded-lg px-4 py-4 text-[#1b1b24] appearance-none focus:ring-2 focus:ring-[#6366f1]/20 transition-all cursor-pointer font-medium"
                                    value={selectedWebsiteType || ""}
                                    onChange={e => setSelectedWebsiteType(Number(e.target.value))}
                                >
                                    <option value="" disabled>Select Website Type</option>
                                    {websiteTypes.map(w => (
                                        <option key={w.id} value={w.id}>
                                            {w.name} (Base: Rp {w.basePrice.toLocaleString()})
                                        </option>
                                    ))}
                                </select>
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#6366f1]">expand_more</span>
                            </div>
                        </section>

                        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="block text-xs font-bold uppercase tracking-wider text-[#6366f1]">2. Industry Focus</label>
                                <div className="relative">
                                    <select
                                        className="w-full bg-[#e5e4f5] border-none rounded-lg px-4 py-4 text-[#1b1b24] appearance-none focus:ring-2 focus:ring-[#6366f1]/20 transition-all cursor-pointer"
                                        value={selectedIndustry || ""}
                                        onChange={e => setSelectedIndustry(Number(e.target.value))}
                                    >
                                        <option value="" disabled>Select Industry</option>
                                        {industries.map(i => (
                                            <option key={i.id} value={i.id}>
                                                {i.name} (+Rp {i.extraPrice.toLocaleString()})
                                            </option>
                                        ))}
                                    </select>
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#6366f1]">expand_more</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="block text-xs font-bold uppercase tracking-wider text-[#6366f1]">4. Number of Pages</label>
                                <input
                                    className="w-full bg-[#e5e4f5] border-none rounded-lg px-4 py-4 text-[#1b1b24] focus:ring-2 focus:ring-[#6366f1]/20 transition-all font-medium"
                                    placeholder="e.g. 5"
                                    type="number"
                                    value={pages}
                                    onChange={e => setPages(Number(e.target.value))}
                                    min={1}
                                />
                            </div>
                        </section>

                        <section>
                            <label className="block text-xs font-bold uppercase tracking-wider text-[#6366f1] mb-6">3. Advanced Features</label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {features.map(f => (
                                    <label key={f.id} className="relative flex items-center gap-3 p-4 bg-[#f6f5ff] rounded-lg cursor-pointer border border-transparent hover:border-[#6366f1]/20 hover:bg-[#ffffff] transition-all group">
                                        <input
                                            className="w-5 h-5 rounded border-[#ced0eb] text-[#6366f1] focus:ring-[#6366f1]/20"
                                            type="checkbox"
                                            checked={selectedFeatures.includes(f.id)}
                                            onChange={e => {
                                                const val = f.id;
                                                if (e.target.checked) setSelectedFeatures(prev => [...prev, val]);
                                                else setSelectedFeatures(prev => prev.filter(x => x !== val));
                                            }}
                                        />
                                        <span className="text-sm font-medium text-[#1b1b24]">{f.name}</span>
                                    </label>
                                ))}
                            </div>
                        </section>

                        <button
                            className="w-full primary-gradient text-[#ffffff] py-5 rounded-xl font-bold text-lg custom-shadow transition-all active:scale-[0.98] duration-150"
                            onClick={calculatePrice}
                        >
                            Calculate Investment
                        </button>
                    </div>

                    <div className="lg:col-span-5 sticky top-32">
                        <div className="bg-indigo-950 p-8 md:p-12 rounded-2xl custom-shadow relative overflow-hidden text-white">
                            <div className="absolute top-0 right-0 p-6 opacity-10">
                                <span className="material-symbols-outlined text-[120px] text-white">receipt_long</span>
                            </div>
                            <h2 className="text-2xl font-bold font-headline mb-8 text-[#e0e7ff]">Investment Summary</h2>

                            {totalPrice !== null ? (
                                <>
                                    <div className="space-y-6 mb-12">
                                        <div className="flex justify-between items-center pb-4 border-b border-white/10">
                                            <span className="text-indigo-200 font-medium">Core Architecture</span>
                                            <span className="text-white font-bold">{websiteTypes.find(w => w.id === selectedWebsiteType)?.name || "-"}</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-4 border-b border-white/10">
                                            <span className="text-indigo-200 font-medium">Industry Focus</span>
                                            <span className="text-white font-bold">{industries.find(i => i.id === selectedIndustry)?.name || "-"}</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-4 border-b border-white/10">
                                            <span className="text-indigo-200 font-medium">Feature Expansion ({selectedFeatures.length})</span>
                                            <span className="text-white font-bold">Included</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-4 border-b border-white/10">
                                            <span className="text-indigo-200 font-medium">Page Indexing ({pages})</span>
                                            <span className="text-white font-bold">Included</span>
                                        </div>
                                    </div>
                                    <div className="bg-[#6366f1] p-6 rounded-xl mb-8 shadow-inner shadow-black/20">
                                        <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-100 mb-2">Total Project Value</span>
                                        <div className="text-4xl md:text-5xl font-extrabold text-white font-headline tracking-tighter">
                                            Rp {totalPrice.toLocaleString()}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="text-indigo-200 text-center py-12">
                                    Select your requirements and click Calculate Investment to get a quote.
                                </div>
                            )}

                        </div>

                        <div className="mt-8 primary-gradient p-6 rounded-2xl flex items-start gap-4 text-white shadow-lg shadow-[#6366f1]/20">
                            <div className="bg-white/20 p-2 rounded-lg">
                                <span className="material-symbols-outlined">verified</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm mb-1 text-white">Ethereal Assurance</h4>
                                <p className="text-xs text-indigo-100 leading-snug">Includes 12 months of premium performance monitoring and security patches.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </main>

            {totalPrice !== null && (
                <div className="fixed bottom-0 left-0 w-full glass-nav bg-white/95 border-t border-indigo-100 z-40 transform translate-y-0 transition-transform md:px-8">
                    <div className="max-w-7xl mx-auto h-24 flex items-center justify-between px-6">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold uppercase tracking-tighter text-[#6366f1]">Current Estimation</span>
                            <span className="text-2xl font-extrabold text-indigo-950 font-headline">Rp {totalPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="hidden md:block text-[#6366f1] font-bold px-6 py-2 hover:bg-[#6366f1]/10 rounded-lg transition-all">Save Progress</button>
                            <button className="primary-gradient text-[#ffffff] px-8 py-3 rounded-lg font-bold shadow-lg shadow-[#6366f1]/30 active:scale-95 transition-all">Contact Specialist</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}