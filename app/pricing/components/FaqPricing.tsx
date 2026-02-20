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
        <div className="space-y-4 p-4 max-w-md mx-auto">
            <h1 className="text-xl font-bold">Website Pricing Calculator</h1>

            <div>
                <label>Website Type</label>
                <select onChange={e => setSelectedWebsiteType(Number(e.target.value))}>
                    <option value="">Select</option>
                    {websiteTypes.map(w => (
                        <option key={w.id} value={w.id}>
                            {w.name} ({w.basePrice.toLocaleString()})
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>Industry</label>
                <select onChange={e => setSelectedIndustry(Number(e.target.value))}>
                    <option value="">Select</option>
                    {industries.map(i => (
                        <option key={i.id} value={i.id}>
                            {i.name} ({i.extraPrice.toLocaleString()})
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>Features</label>
                {features.map(f => (
                    <div key={f.id}>
                        <input
                            type="checkbox"
                            value={f.id}
                            onChange={e => {
                                const val = Number(e.target.value);
                                if (e.target.checked) setSelectedFeatures(prev => [...prev, val]);
                                else setSelectedFeatures(prev => prev.filter(x => x !== val));
                            }}
                        />
                        {f.name} ({f.price.toLocaleString()})
                    </div>
                ))}
            </div>

            <div>
                <label>Pages</label>
                <input
                    type="number"
                    value={pages}
                    onChange={e => setPages(Number(e.target.value))}
                    min={1}
                />
            </div>

            <button onClick={calculatePrice} className="bg-blue-500 text-white px-4 py-2 rounded">
                Calculate
            </button>

            {totalPrice !== null && (
                <div className="mt-4">
                    <strong>Total Price:</strong> Rp {totalPrice.toLocaleString()}
                </div>
            )}
        </div>
    );
}