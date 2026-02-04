'use client';

import { TrendingUp, ArrowRight, ArrowUp } from 'lucide-react';

export default function HeroSeo() {
    return (
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -z-10 w-[50%] h-full bg-gradient-to-l from-[#7f13ec]/5 to-transparent"></div>
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col gap-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7f13ec]/10 border border-[#7f13ec]/20 self-center lg:self-start">
                            <TrendingUp className="text-[#7f13ec] w-4 h-4" />
                            <span className="text-[#7f13ec] text-xs font-bold uppercase tracking-wider">Mesin Pertumbuhan</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#140d1b]">
                            Peringkat Lebih Tinggi, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7f13ec] to-purple-400">Tumbuh Lebih Cepat.</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Strategi SEO berbasis data yang disesuaikan untuk menempatkan bisnis Anda di halaman pertama. Kami membantu Anda mendominasi hasil pencarian dan mengubah trafik menjadi pendapatan.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <button className="flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-[#7f13ec] hover:bg-[#7f13ec]/90 text-white font-bold transition-all shadow-lg shadow-[#7f13ec]/25">
                                <span>Dapatkan Audit Gratis</span>
                                <ArrowRight className="text-lg w-5 h-5" />
                            </button>
                            <button className="flex items-center justify-center gap-2 h-12 px-8 rounded-lg border border-gray-200 hover:bg-gray-50 text-[#140d1b] font-medium transition-all">
                                <span>Lihat Studi Kasus</span>
                            </button>
                        </div>
                    </div>
                    {/* Dashboard Preview Image */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#7f13ec] to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-xl shadow-2xl overflow-hidden border border-gray-200" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDotML_Yb3uWi8cCvAsEu8vHPBcIPz6W9yuxqgeepPllca-dZxF5Lgb-E40oCFbdRJ-C2R6IEF68zBo41hLRlowdGbyAiYGeTXLgDhW7aMFJgVXX3aQAP-S2qwMIrutxYJs_pilMKR3yjcqYrJnrzh1mIVnlBXUbA5iQzL4NvsiUDIds-UyhKT48Iyky4XFdCeeXety_Ks1IYPqC2_8zqVaL_QEmc5Aua5Fc7FaFBM0jeFl9ShnDqQgY3J-Ch_5Thki2vkYGUQXiEc')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#f7f6f8]/80 to-transparent flex items-end justify-center p-6">
                                <div className="bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg w-full max-w-sm border border-gray-100">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-bold text-gray-500 uppercase">Trafik Organik</span>
                                        <span className="text-xs font-bold text-green-500 flex items-center gap-1">+24% <ArrowUp className="w-3 h-3" /></span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#7f13ec] w-[75%] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
