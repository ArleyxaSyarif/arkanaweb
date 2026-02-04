'use client';

import { Laptop, TrendingUp, BadgeCheck, LayoutTemplate, PenTool } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CardService() {
    return (
        <section className="px-4 py-10 max-w-[1200px] mx-auto font-sans">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
                {/* Card 1: Large Featured (Website Custom) */}
                <Link href="/service/website-custom" className="group md:col-span-2 lg:col-span-2 row-span-2 bg-white rounded-2xl p-8 border border-slate-100 flex flex-col justify-between overflow-hidden relative shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-[#7f13ec]/10 rounded-xl flex items-center justify-center text-[#7f13ec] mb-6">
                            <Laptop className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Website Custom</h3>
                        <p className="text-slate-500 mb-6 max-w-sm">Solusi web yang sepenuhnya disesuaikan, dibangun dari awal untuk memenuhi kebutuhan bisnis unik Anda dengan presisi pixel-perfect.</p>
                    </div>
                    <div className="relative w-full h-64 rounded-xl overflow-hidden mt-4 group-hover:scale-[1.02] transition-transform duration-500 shadow-xl border border-slate-100">
                        {/* Placeholder for dashboard image or use a gradient/icon composition if no image available */}
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center bg-cover bg-top" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDsGL6TU3wIwbXm0tuS7wrOciMZqwp_WkWhdzHvzuUjcc5Pz3gPyw8yfOHG-3R6bRy91wYSx_4DL5Z7ML1TZPzo8igw6Ka1aC0Oejstbab4ODKWqCmgPTaIq6eTZYXIZIovFB1cWd7egR2sdZcjS2W1cgisFq3OoehsjYaHgwSmOlknK6NV7EM_WIOwq0Z0dNA4LkgXoHEIyU67uwoyWezBGZSzSDORycy2j_JBUarl8KP3YaFtjBEZnXzuhcmEr-oU9RuKb8sBsM')" }}>
                        </div>
                    </div>
                </Link>

                {/* Card 2: SEO */}
                <Link href="/service/seo-optimization" className="md:col-span-1 lg:col-span-2 bg-slate-900 rounded-2xl p-8 flex flex-col justify-between text-white relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
                    <div className="absolute bottom-0 right-0 opacity-20 transform translate-x-1/4 translate-y-1/4">
                        <TrendingUp className="w-[200px] h-[200px]" />
                    </div>
                    <div className="relative z-10">
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Optimasi SEO</h3>
                        <p className="text-slate-300 text-sm">Peringkat #1 di Google</p>
                    </div>
                    <div className="relative z-10 mt-8">
                        <div className="flex items-end gap-2 h-24 pb-2 border-b border-white/10">
                            <div className="w-1/5 bg-[#7f13ec]/40 h-[40%] rounded-t-sm"></div>
                            <div className="w-1/5 bg-[#7f13ec]/60 h-[60%] rounded-t-sm"></div>
                            <div className="w-1/5 bg-[#7f13ec]/80 h-[50%] rounded-t-sm"></div>
                            <div className="w-1/5 bg-[#7f13ec] h-[85%] rounded-t-sm shadow-[0_0_15px_rgba(127,19,236,0.5)]"></div>
                            <div className="w-1/5 bg-white h-[100%] rounded-t-sm"></div>
                        </div>
                    </div>
                </Link>

                {/* Card 3: Company Profile */}
                <Link href="/service/company-profile" className="bg-white rounded-2xl p-6 border border-slate-100 flex flex-col gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex justify-between items-start">
                        <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                            <BadgeCheck className="w-6 h-6" />
                        </div>
                        <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">Populer</span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">Profil Perusahaan</h3>
                        <p className="text-sm text-slate-500 mt-1">Identitas merek profesional</p>
                    </div>
                </Link>

                {/* Card 4: Landing Page */}
                <Link href="/service/landing-page" className="bg-white rounded-2xl p-6 border border-slate-100 flex flex-col gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                        <LayoutTemplate className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">Landing Page</h3>
                        <p className="text-sm text-slate-500 mt-1">Halaman konversi tinggi</p>
                    </div>
                </Link>

                {/* Card 5: Maintenance */}
                <Link href="/service/maintenance" className="md:col-span-2 lg:col-span-2 bg-gradient-to-r from-purple-50 to-white rounded-2xl p-6 border border-slate-100 flex items-center justify-between gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex flex-col gap-2">
                        <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                            <PenTool className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">Maintenance Tahunan</h3>
                            <p className="text-sm text-slate-500">Pemeliharaan tahunan & pembaruan keamanan yang andal</p>
                        </div>
                    </div>
                    <button className="shrink-0 w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#7f13ec] hover:text-white hover:border-[#7f13ec] transition-colors">
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </Link>
            </div>
        </section>
    );
}
