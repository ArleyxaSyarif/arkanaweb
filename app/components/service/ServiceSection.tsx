'use client';

import React from 'react';
import {
    Building2,
    ArrowRight,
    CheckCircle2,
    LayoutTemplate,
    ShieldCheck,
    TrendingUp
} from 'lucide-react';
import Link from 'next/link';

interface ServiceSectionProps {
    darkMode?: boolean;
}

export default function ServiceSection({ darkMode = false }: ServiceSectionProps) {
    return (
        <section id="services" className={`py-12 px-6 lg:px-40 flex justify-center font-sans ${darkMode ? 'dark' : ''}`}>
            <div className="layout-content-container flex flex-col max-w-[1200px] w-full">
                <div className="mb-10 text-center lg:text-left">
                    <span className="text-[#7f13ec] font-bold text-sm tracking-widest bg-[#7f13ec]/10 px-3 py-1 rounded-full">Layanan Kami</span>
                    <h1 className="text-black text-4xl lg:text-5xl font-extrabold leading-tight mt-4 tracking-[-0.02em]">
                        Layanan Website Profesional <br className="hidden lg:block" /> <span className="text-[#7f13ec]">Untuk Bisnis Anda</span>.
                    </h1>
                    <p className="text-[#734c9a] dark:text-[#a686c5] mt-4 text-lg max-w-2xl leading-relaxed">
                        Kami menyediakan berbagai layanan pembuatan dan pengembangan website yang dirancang untuk membantu bisnis tampil lebih profesional, cepat, dan siap berkembang di dunia digital.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 lg:gap-6 min-h-[750px]">
                    {/* Item 1: Company Profile */}
                    <div className="md:col-span-2 md:row-span-3 flex flex-col justify-between rounded-3xl border-none bg-[#f3e8ff] p-10 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-0 opacity-[0.03] pointer-events-none">
                            <Building2 className="w-[400px] h-[400px] text-[#7f13ec]" strokeWidth={0.5} />
                        </div>
                        <div className="relative z-10">
                            <div className="bg-gradient-to-br from-[#9d5cff] to-[#7f13ec] text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#7f13ec]/30">
                                <Building2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-extrabold text-[#140d1b] mb-6">Company Profile</h3>
                            <p className="text-[#734c9a] dark:text-[#a686c5] text-lg leading-relaxed mb-10 max-w-md">
                                Website company profile profesional untuk memperkenalkan bisnis Anda kepada calon klien secara lebih terpercaya dan menarik.
                            </p>
                            <ul className="space-y-5 mb-12">
                                <li className="flex items-center gap-4 text-base font-bold text-[#140d1b] ">
                                    <div className="w-6 h-6 rounded-full bg-[#7f13ec] flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                    </div>
                                    Profil perusahaan yang profesional
                                </li>
                                <li className="flex items-center gap-4 text-base font-bold text-[#140d1b]">
                                    <div className="w-6 h-6 rounded-full bg-[#7f13ec] flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                    </div>
                                    Desain modern dan responsif
                                </li>
                                <li className="flex items-center gap-4 text-base font-bold text-[#140d1b] ">
                                    <div className="w-6 h-6 rounded-full bg-[#7f13ec] flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                    </div>
                                    Mudah diakses di semua perangkat
                                </li>
                            </ul>
                        </div>
                        <Link href="/service/company-profile">

                            <button className="w-full lg:w-fit flex items-center justify-center gap-2 rounded-xl h-14 px-8 bg-[#7f13ec] text-white font-bold transition-all hover:bg-[#690fd0] hover:shadow-lg relative z-10 cursor-pointer">
                                Lihat Layanan Kami
                                <ArrowRight className="w-5 h-5" />
                            </button>

                        </Link>
                    </div>

                    {/* Item 2: Landing Page */}
                    <Link href="/service/landing-page" className="md:col-span-2 md:row-span-1">
                        <div className="h-full flex items-center gap-8 rounded-3xl border border-[#ede7f3] bg-white p-10 hover:border-[#7f13ec] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex-shrink-0 bg-[#f3e8ff] p-6 rounded-2xl text-[#7f13ec] transition-transform group-hover:scale-110">
                                <LayoutTemplate className="w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-xl font-extrabold text-[#140d1b] mb-2">Landing Page</h3>
                                <p className="text-[#734c9a] dark:text-[#a686c5] text-base leading-relaxed">
                                    Landing page yang dirancang khusus untuk meningkatkan konversi dan membantu bisnis Anda mendapatkan lebih banyak pelanggan.
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* Item 3: Website Custom */}
                    <Link href="/service/website-custom" className="md:col-span-2 md:row-span-1">
                        <div className="h-full flex flex-col justify-center rounded-3xl relative overflow-hidden transition-all duration-300 group shadow-lg p-10 bg-gradient-to-br from-[#7f13ec] via-[#9b4de0] to-[#5e0eb1]">
                            <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-20 transition-transform group-hover:translate-x-2">
                                <div className="flex gap-1">
                                    <span className="text-6xl text-white font-mono">&lt;</span>
                                    <span className="text-6xl text-white font-mono">/&gt;</span>
                                </div>
                            </div>
                            <div className="relative z-10 max-w-[70%]">
                                <h3 className="text-2xl font-extrabold text-white mb-3">Website Custom</h3>
                                <p className="text-white/90 text-base leading-relaxed">
                                    Pembuatan website custom sesuai kebutuhan bisnis Anda, dengan fitur yang dapat disesuaikan untuk berbagai jenis industri.
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* Item 4: Maintenance */}
                    <Link href="/service/maintenance" className="md:col-span-1 md:row-span-1">
                        <div className="h-full flex flex-col justify-between rounded-3xl border border-[#ede7f3] bg-white p-8 hover:border-[#7f13ec] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                            <div className="text-[#7f13ec] mb-4">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#140d1b]">Maintenance Tahunan</h3>
                                <p className="text-[#734c9a] dark:text-[#a686c5] text-xs leading-relaxed mt-2">Monitoring dan pembaruan website secara berkala</p>
                            </div>
                        </div>
                    </Link>

                    {/* Item 5: SEO */}
                    <Link href="/service/seo-optimization" className="md:col-span-1 md:row-span-1">
                        <div className="h-full flex flex-col justify-between rounded-3xl border border-[#ede7f3] bg-[#fcfaff] p-8 hover:border-[#7f13ec] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                            <div className="text-[#7f13ec] mb-4">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#140d1b]">SEO Optimization</h3>
                                <p className="text-[#734c9a] dark:text-[#a686c5] text-xs leading-relaxed mt-2">Optimasi agar website Anda lebih mudah ditemukan di Google.</p>
                            </div>
                        </div>
                    </Link>
                </div>


            </div>
        </section>
    );
}
