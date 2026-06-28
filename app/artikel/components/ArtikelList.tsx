"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, ArrowRight, Calendar, Tag } from "lucide-react";
import { artikels } from "@/data/artikels";

export default function ArtikelPage() {
    const [selectedCategory, setSelectedCategory] = useState("semua");

    // Mendapatkan daftar semua kategori unik (dalam huruf kecil)
    const categories = [
        "semua",
        ...Array.from(new Set(artikels.map((article) => article.category.toLowerCase()))),
    ];

    // Filter artikel berdasarkan kategori terpilih
    const filteredArticles =
        selectedCategory === "semua"
            ? artikels
            : artikels.filter(
                (article) => article.category.toLowerCase() === selectedCategory
            );

    return (
        <div className="min-h-screen bg-slate-50/50 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 text-[#7f13ec] mb-4">
                        <BookOpen className="w-3.5 h-3.5" />
                        Eksplorasi Wawasan
                    </span>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-905 sm:text-5xl font-display mb-4">
                        Artikel & <span className="bg-gradient-to-r from-[#7f13ec] to-indigo-600 bg-clip-text text-transparent">Wawasan Terbaru</span>
                    </h1>
                    <p className="text-base text-slate-650">
                        Temukan panduan pemrograman, tips teknologi, trik bisnis, dan informasi terbaru yang dirancang untuk mendukung perjalanan digital Anda.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((category) => {
                        const isActive = selectedCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold capitalize transition-all duration-300 cursor-pointer ${isActive
                                    ? "bg-gradient-to-r from-[#7f13ec] to-indigo-600 text-white shadow-md shadow-[#7f13ec]/20 scale-105"
                                    : "bg-white border border-slate-200 text-slate-600 hover:text-[#7f13ec] hover:border-[#7f13ec] hover:bg-slate-50"
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                {/* Empty State */}
                {filteredArticles.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm max-w-md mx-auto">
                        <Tag className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                        <p className="text-slate-500 font-medium">Tidak ada artikel di kategori ini.</p>
                    </div>
                ) : (
                    /* List Artikel */
                    <div className="grid md:grid-cols-2 gap-8 max-w-container-max mx-auto">
                        {filteredArticles.map((article) => (
                            <Link
                                key={article.slug}
                                href={`/artikel/${article.category.toLowerCase()}/${article.slug}`}
                                className="p-8 bg-white border border-slate-200 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#7F13EC] hover:shadow-[0_10px_35px_-5px_rgba(127,19,236,0.08)] group flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 bg-[#7f13ec]/10 text-[#7f13ec] font-semibold text-xs rounded-full capitalize">
                                            {article.category}
                                        </span>
                                        <span className="text-slate-500 text-xs font-semibold">
                                            • {article.date}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold mb-4 group-hover:text-[#7f13ec] transition-colors leading-snug line-clamp-2">
                                        {article.title}
                                    </h2>

                                    <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                                        {article.content}
                                    </p>
                                </div>

                                <div className="inline-flex items-center gap-2 text-[#7f13ec] font-bold group-hover:underline">
                                    Baca Selengkapnya
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
