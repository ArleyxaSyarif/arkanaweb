'use client';

import { TrendingUp, ArrowRight, PlayCircle } from 'lucide-react';

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
                            Ubah trafik menjadi pendapatan dengan desain berkinerja tinggi yang berfokus pada kecepatan, SEO, dan psikologi pengguna. Kami membangun halaman yang menjual.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="h-12 px-8 bg-[#7f13ec] hover:bg-[#630ebb] text-white font-bold rounded-lg shadow-xl shadow-[#7f13ec]/25 transition-all flex items-center justify-center gap-2 group">
                                Dapatkan Audit Gratis
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="h-12 px-8 bg-white border border-gray-200 hover:border-[#7f13ec]/50 text-[#140d1b] font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                                <PlayCircle className="w-5 h-5 text-[#7f13ec]" />
                                Lihat Contoh
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 w-full max-w-[600px] lg:max-w-none">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#7f13ec]/10 bg-white border border-gray-100 p-2">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#7f13ec]/20 to-transparent opacity-20 z-10 pointer-events-none"></div>
                            <div className="aspect-[4/3] w-full bg-cover bg-center rounded-xl overflow-hidden relative group" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDula4FgZB693GoYeC-1OzbGEqUBKslV9oIaF9bCT7nXoYnluaOOE_gb4iLYKY7QTYZL92nOHyFlcGe26aPtpP9L3Ph2_K4vNLSzFn-UkgKEfHwG8FCAFKv02HoO0Jkg_S3RMx_b3ckB2NdTy7My0lOEUUZo6VV4fJ2HOVAf0lfUkq_L80qQ4Dt1kv9ZoRafnmubxvGIuZg9DeBQhYRzDBHCX2Ne6y9_Qv7TWVwYlrVN-2ax0vcDpCwnapT6oBRunh6M1yU_6YRx4E")' }}>
                                {/* Overlay UI Mockup Elements */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <div className="flex items-center gap-4 text-white">
                                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center font-bold">
                                            <TrendingUp className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium opacity-80">Rasio Konversi</p>
                                            <p className="text-2xl font-bold">+124%</p>
                                        </div>
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
