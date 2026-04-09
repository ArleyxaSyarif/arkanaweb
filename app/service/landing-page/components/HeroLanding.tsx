'use client';

import { TrendingUp, ArrowRight, PlayCircle } from 'lucide-react';
import Link from 'next/link';

export default function HeroLanding() {
    return (
        <section className="relative pt-20 pb-32 overflow-hidden bg-[#f9fafb] text-[#140d1b]">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-[#7f13ec]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-[#5e3aee]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7f13ec]/10 text-[#7f13ec] text-xs font-bold mb-6 border border-[#7f13ec]/20">
                            <TrendingUp className="w-4 h-4" />
                            Fokus Konversi
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#140d1b] leading-[1.15] mb-6">
                            Landing Page <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7f13ec] to-[#5e3aee]">Pendorong Konversi</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-500 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Sebagai web company profile yang terpercaya, kami menyediakan jasa pembuatan Landing Page berkinerja tinggi untuk mengubah trafik menjadi pendapatan. Dengan berpegang teguh pada komitmen dan kejujuran, kami menghadirkan desain yang berfokus pada hasil dan pengalaman pengguna.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="h-12 px-8 bg-[#7f13ec] hover:bg-[#630ebb] text-white font-bold rounded-lg shadow-xl shadow-[#7f13ec]/25 transition-all flex items-center justify-center gap-2 group">
                                Dapatkan Audit Gratis
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <Link href="https://lamontefe.vercel.app" target="_blank">
                                <button className="h-12 px-8 bg-white border border-gray-200 hover:border-[#7f13ec]/50 text-[#140d1b] font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                                    <PlayCircle className="w-5 h-5 text-[#7f13ec]" />
                                    Lihat Contoh
                                </button>
                            </Link>

                        </div>
                    </div>
                    <div className="flex-1 w-full max-w-[600px] lg:max-w-none">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#7f13ec]/20 bg-white border border-gray-100 p-2 group transition-all duration-500 hover:shadow-[#7f13ec]/30">
                            {/* Decorative Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#7f13ec]/5 to-transparent opacity-50 z-0"></div>

                            <div className="relative z-10 overflow-hidden rounded-xl">
                                <img
                                    src="/projek/landingpage/lp2.png"
                                    alt="Landing Page Showcase"
                                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
