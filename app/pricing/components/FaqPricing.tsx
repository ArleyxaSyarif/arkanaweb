"use client";

import { MessageSquare, Plus } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function FaqPricing() {
    return (
        <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
                {/* Left Side: Content & Visual */}
                <div className="lg:w-5/12 space-y-8">
                    <div>
                        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-[#7f13ec]/10 text-[#7f13ec] rounded-full">Support Center</span>
                        <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-slate-900">
                            Masih Ada <br /><span className="text-[#7f13ec]">Pertanyaan?</span>
                        </h2>
                        <p className="text-lg text-slate-500 leading-relaxed max-w-md">
                            Semua yang perlu Anda ketahui tentang paket dan penagihan. Tidak menemukan jawaban yang Anda cari? Hubungi tim support kami.
                        </p>
                    </div>

                    <div className="relative w-full max-w-sm aspect-square bg-gradient-to-br from-[#7f13ec]/5 to-[#7f13ec]/20 rounded-3xl overflow-hidden flex items-center justify-center p-12">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#7f13ec]/10 via-transparent to-transparent opacity-50"></div>
                        {/* 3D Question Mark Image from HTML */}
                        <div
                            className="relative w-full h-full bg-contain bg-center bg-no-repeat"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDasTbadGpDNc8ek_xegauU4FF9BmQdhSHaQdDWTRe4jBOcDY0IIwHycc1kCUqDQcU6RvjKBaxC7yrNvX1_E-fqtwZ4h3DycVOuPtY3ISTmGvO2ODnvEnZ74TGJ-MqnSZZ6q-o-Q9Zm0tUe9C2nkBnP0gIZ5MElGdz7FYG7VnHCzw06eGVfTyWl47lPAbFtVwgrY2LYR7budw1p5HjoN88pfvTvrWxgApAMJbHdZhmUd_9vjgKgevLjZizyu6leRaOVPIAs5caE_Q0')" }}
                        ></div>
                    </div>

                    <div className="p-6 bg-white border border-[#7f13ec]/10 rounded-2xl shadow-sm flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#7f13ec]/10 flex items-center justify-center text-[#7f13ec]">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Masih punya pertanyaan?</h4>
                            <p className="text-sm text-slate-500">Kami di sini untuk membantu Anda 24/7</p>
                        </div>
                        <Link href="/contact" className="ml-auto text-[#7f13ec] font-bold text-sm hover:underline">
                            Hubungi Kami
                        </Link>
                    </div>
                </div>

                {/* Right Side: Accordion */}
                <div className="lg:w-7/12 flex flex-col gap-4">
                    <FaqItem
                        question="Bisakah saya mengubah paket saya nanti?"
                        answer="Ya, Anda dapat upgrade atau downgrade paket Anda kapan saja dari pengaturan akun Anda. Perubahan akan berlaku segera untuk upgrade. Jika Anda upgrade, selisih harga akan diproratakan. Jika Anda downgrade, tarif baru akan berlaku pada siklus tagihan berikutnya."
                    />
                    <FaqItem
                        question="Metode pembayaran apa yang Anda terima?"
                        answer="Kami mendukung semua kartu kredit utama termasuk Visa, Mastercard, dan American Express. Selain itu, Anda dapat membayar melalui PayPal. Untuk paket tahunan Enterprise, kami juga mendukung transfer bank."
                    />
                    <FaqItem
                        question="Apakah ada uji coba gratis?"
                        answer="Tentu saja! Kami menawarkan uji coba gratis 14 hari dengan fitur lengkap di semua paket kami. Tidak perlu kartu kredit untuk memulai uji coba Anda. Anda akan memiliki akses penuh ke semua fitur sehingga Anda dapat merasakan kekuatan platform kami sebelum berkomitmen."
                    />
                    <FaqItem
                        question="Bagaimana cara membatalkan langganan saya?"
                        answer="Pembatalan itu mudah dan dapat dilakukan kapan saja. Cukup buka tab 'Billing' di dashboard Anda dan klik 'Cancel Subscription'. Anda akan tetap memiliki akses ke paket Anda hingga akhir periode penagihan Anda saat ini. Tidak ada biaya tersembunyi."
                    />
                    <FaqItem
                        question="Apakah Anda menawarkan diskon untuk nirlaba?"
                        answer="Ya, kami senang mendukung organisasi yang membuat perubahan. Kami menawarkan diskon 50% untuk semua paket kami bagi organisasi nirlaba terdaftar dan institusi pendidikan. Hubungi tim penjualan kami dengan dokumentasi Anda untuk mendapatkan kode diskon."
                    />
                </div>
            </div>
        </section>
    );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`group bg-white border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${isOpen ? 'border-[#7f13ec]/40 bg-gray-50' : 'border-[#7f13ec]/10 hover:border-[#7f13ec]/40'
                }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex cursor-pointer items-center justify-between p-6 lg:p-8 outline-none text-left"
            >
                <h3 className={`text-lg lg:text-xl font-bold transition-colors ${isOpen ? 'text-[#7f13ec]' : 'text-slate-900'
                    }`}>
                    {question}
                </h3>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform ${isOpen ? 'bg-[#7f13ec] text-white rotate-45' : 'bg-[#7f13ec]/5 text-[#7f13ec] group-hover:bg-[#7f13ec] group-hover:text-white'
                    }`}>
                    <Plus className="w-5 h-5 font-bold" />
                </div>
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden px-6 lg:px-8 pb-8 pt-0">
                    <div className="w-full h-px bg-[#7f13ec]/10 mb-6"></div>
                    <p className="text-slate-500 leading-relaxed">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
}
