"use client";

import { ArrowRight, BadgeCheck, Rocket, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#7f13ec 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

            <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex-1">
                    {/* Heading yang lebih kuat */}
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Siap Mewujudkan Ide Anda Menjadi Nyata?
                    </h2>
                    {/* Deskripsi yang lebih persuasif */}
                    <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                        Kami nggak cuma janji. Kami berkomitmen penuh untuk mengawal ide Anda sampai jadi, dengan hasil yang benar-benar sesuai ekspektasi. Tanpa tapi, tanpa ribet.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                            <div className="w-8 h-8 rounded-full bg-[#7f13ec]/10 flex items-center justify-center text-[#7f13ec]">
                                <BadgeCheck className="w-5 h-5" />
                            </div>
                            Tim Berdedikasi
                        </div>
                        <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                            <div className="w-8 h-8 rounded-full bg-[#7f13ec]/10 flex items-center justify-center text-[#7f13ec]">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            Hasil Teruji & Aman
                        </div>
                        <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                            <div className="w-8 h-8 rounded-full bg-[#7f13ec]/10 flex items-center justify-center text-[#7f13ec]">
                                <Rocket className="w-5 h-5" />
                            </div>
                            Solusi Tepat Sasaran
                        </div>
                    </div>
                </div>

                <div className="flex-shrink-0 w-full md:w-auto">
                    {/* Button dengan teks CTA yang lebih mengundang */}
                    <Link href="/contact" className="w-full md:w-auto bg-[#7f13ec] hover:bg-[#6a11c9] text-white text-lg font-bold py-5 px-10 rounded-2xl shadow-lg shadow-[#7f13ec]/20 transition-all flex items-center justify-center gap-3 group">
                        Diskusikan Proyek Anda
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
