'use client';

import Link from "next/link";

export default function HeroProfile() {
    return (
        <section className="w-full max-w-[1280px] px-4 md:px-10 py-10">
            <div className="@container">
                <div className="flex flex-col-reverse gap-6 py-10 @[480px]:gap-12 @[864px]:flex-row @[864px]:items-center">
                    <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 flex-1">
                        <div className="flex flex-col gap-4 text-left">
                            <h1 className="text-[#140d1b] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[864px]:text-6xl">
                                Elegan Bertemu Profesionalisme
                            </h1>
                            <h2 className="text-[#734c9a] text-base font-normal leading-relaxed @[480px]:text-lg">
                                Sebagai web company profile profesional, kami menyediakan layanan pembuatan Website Company Profile yang siap menceritakan kisah unik merek Anda. Kami selalu mengedepankan komitmen dan kejujuran dalam bekerja untuk membangun kepercayaan melalui desain sempurna dan pengalaman pengguna yang mulus.
                            </h2>
                        </div>
                        <div className="flex gap-4">
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#7f13ec] hover:bg-[#7f13ec]/90 transition-all shadow-lg shadow-[#7f13ec]/30 text-white text-base font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Mulai Proyek Anda</span>
                            </button>
                            <Link href="https://compro-lamonte.vercel.app" target="_blank" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#7f13ec]/10 hover:bg-[#7f13ec]/20 transition-all text-[#7f13ec] text-base font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Lihat Contoh</span>
                            </Link>
                        </div>
                    </div>
                    {/* Bagian Gambar: Dibuat besar dan premium */}
                    <div className="w-full flex-1 lg:flex-[1.2] relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-[#7f13ec]/20 bg-white border border-gray-100 p-2 group transition-all duration-500 hover:shadow-[#7f13ec]/30">
                            <div className="relative z-10 overflow-hidden rounded-xl">
                                <img
                                    src="/projek/compro/compro1.png"
                                    alt="Company Profile Preview"
                                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Efek Aura di belakang gambar */}
                        <div className="absolute -inset-6 bg-[#7f13ec]/10 blur-3xl rounded-full -z-10 opacity-50"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
