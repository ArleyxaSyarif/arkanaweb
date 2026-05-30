'use client';

import { Palette, Users, Briefcase, Contact, ArrowRight } from 'lucide-react';

export default function KeyElements() {
    return (
        <section className="w-full max-w-[1280px] px-4 md:px-10 py-16 flex flex-col relative overflow-hidden bg-white">
            {/* Background decorative gradients */}
            <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/10 w-72 h-72 bg-indigo-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

            <div className="flex flex-col self-center w-full relative z-10">
                {/* Header Section */}
                <div className="flex flex-col gap-3 mb-12 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7f13ec]/10 w-fit mx-auto md:mx-0">
                        <span className="w-2 h-2 rounded-full bg-[#7f13ec] animate-pulse"></span>
                        <span className="text-xs font-bold text-[#7f13ec] tracking-wider uppercase">Pilar Desain &amp; Teknologi</span>
                    </div>
                    <h2 className="text-[#140d1b] text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                        Elemen <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7f13ec] to-purple-500 italic font-serif">Kunci</span>
                    </h2>
                    <p className="text-[#4d4459] text-base md:text-lg font-normal leading-relaxed max-w-2xl">
                        Membangun masa depan digital melalui presisi desain dan keunggulan teknologi. Kami menyatukan estetika dan fungsionalitas dalam satu kesatuan yang harmonis.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
                    {/* Card 1: Identitas Merek */}
                    <div className="flex flex-1 gap-5 rounded-2xl border border-[#dbcfe7]/60 bg-white/70 backdrop-blur-md p-6 flex-col justify-between shadow-sm hover:shadow-[0_20px_40px_rgba(127,19,236,0.08)] hover:-translate-y-2 hover:border-[#7f13ec]/40 transition-all duration-300 group cursor-pointer">
                        <div className="flex flex-col gap-4">
                            <div className="text-[#7f13ec] p-3 bg-[#7f13ec]/10 rounded-xl w-fit group-hover:bg-[#7f13ec] group-hover:text-white transition-all duration-300 shadow-sm shadow-[#7f13ec]/5">
                                <Palette className="w-7 h-7" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[#140d1b] text-xl font-extrabold leading-tight tracking-tight group-hover:text-[#7f13ec] transition-colors">Identitas Merek</h3>
                                <p className="text-[#5e4b77] text-sm font-normal leading-relaxed">Integrasi bahasa visual yang kohesif yang beresonansi dengan audiens Anda di semua titik kontak digital.</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#7f13ec] group-hover:text-[#7f13ec]/80 transition-colors">
                            <span>Pelajari Lebih Lanjut</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                        </div>
                    </div>

                    {/* Card 2: Tentang Interaktif */}
                    <div className="flex flex-1 gap-5 rounded-2xl border border-[#dbcfe7]/60 bg-white/70 backdrop-blur-md p-6 flex-col justify-between shadow-sm hover:shadow-[0_20px_40px_rgba(127,19,236,0.08)] hover:-translate-y-2 hover:border-[#7f13ec]/40 transition-all duration-300 group cursor-pointer">
                        <div className="flex flex-col gap-4">
                            <div className="text-[#7f13ec] p-3 bg-[#7f13ec]/10 rounded-xl w-fit group-hover:bg-[#7f13ec] group-hover:text-white transition-all duration-300 shadow-sm shadow-[#7f13ec]/5">
                                <Users className="w-7 h-7" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[#140d1b] text-xl font-extrabold leading-tight tracking-tight group-hover:text-[#7f13ec] transition-colors">Tentang Interaktif</h3>
                                <p className="text-[#5e4b77] text-sm font-normal leading-relaxed">Pencitraan cerita yang menarik dan etalase tim untuk membangun kepercayaan dan transparansi dengan klien potensial.</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#7f13ec] group-hover:text-[#7f13ec]/80 transition-colors">
                            <span>Lihat Detail</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                        </div>
                    </div>

                    {/* Card 3: Etalase Layanan */}
                    <div className="flex flex-1 gap-5 rounded-2xl border border-[#dbcfe7]/60 bg-white/70 backdrop-blur-md p-6 flex-col justify-between shadow-sm hover:shadow-[0_20px_40px_rgba(127,19,236,0.08)] hover:-translate-y-2 hover:border-[#7f13ec]/40 transition-all duration-300 group cursor-pointer">
                        <div className="flex flex-col gap-4">
                            <div className="text-[#7f13ec] p-3 bg-[#7f13ec]/10 rounded-xl w-fit group-hover:bg-[#7f13ec] group-hover:text-white transition-all duration-300 shadow-sm shadow-[#7f13ec]/5">
                                <Briefcase className="w-7 h-7" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[#140d1b] text-xl font-extrabold leading-tight tracking-tight group-hover:text-[#7f13ec] transition-colors">Etalase Layanan</h3>
                                <p className="text-[#5e4b77] text-sm font-normal leading-relaxed">Rincian mendalam tentang penawaran inti dan keahlian Anda yang disajikan dalam format yang mudah dicerna.</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#7f13ec] group-hover:text-[#7f13ec]/80 transition-colors">
                            <span>Eksplorasi Layanan</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                        </div>
                    </div>

                    {/* Card 4: Integrasi Kontak */}
                    <div className="flex flex-1 gap-5 rounded-2xl border border-[#dbcfe7]/60 bg-white/70 backdrop-blur-md p-6 flex-col justify-between shadow-sm hover:shadow-[0_20px_40px_rgba(127,19,236,0.08)] hover:-translate-y-2 hover:border-[#7f13ec]/40 transition-all duration-300 group cursor-pointer">
                        <div className="flex flex-col gap-4">
                            <div className="text-[#7f13ec] p-3 bg-[#7f13ec]/10 rounded-xl w-fit group-hover:bg-[#7f13ec] group-hover:text-white transition-all duration-300 shadow-sm shadow-[#7f13ec]/5">
                                <Contact className="w-7 h-7" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-[#140d1b] text-xl font-extrabold leading-tight tracking-tight group-hover:text-[#7f13ec] transition-colors">Integrasi Kontak</h3>
                                <p className="text-[#5e4b77] text-sm font-normal leading-relaxed">Formulir pembuatan prospek yang mulus, peta interaktif, dan integrasi pemesanan langsung.</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#7f13ec] group-hover:text-[#7f13ec]/80 transition-colors">
                            <span>Hubungi Kami</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
