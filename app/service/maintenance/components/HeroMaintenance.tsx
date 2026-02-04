'use client';

import { Verified, ArrowDown, Activity } from 'lucide-react';

export default function HeroMaintenance() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-10 md:py-16 gap-6 relative">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7f13ec]/5 rounded-full blur-3xl -z-10"></div>
            <div className="bg-[#7f13ec]/10 p-4 rounded-full size-20 flex items-center justify-center mb-2">
                <Verified className="text-[#7f13ec] w-12 h-12" />
            </div>
            <div className="max-w-3xl flex flex-col gap-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#140d1b]">
                    Ketenangan Pikiran untuk <br className="hidden md:block" /> Bisnis Digital Anda
                </h1>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Pastikan website Anda tetap aman, cepat, dan mutakhir dengan paket pemeliharaan tahunan komprehensif kami. Kami menangani detail teknis sehingga Anda dapat fokus pada pertumbuhan.
                </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
                <button className="bg-[#7f13ec] hover:bg-[#7f13ec]/90 text-white text-base font-bold h-12 px-8 rounded-lg transition-colors shadow-lg shadow-[#7f13ec]/20 flex items-center gap-2">
                    Lihat Paket
                    <ArrowDown className="w-4 h-4" />
                </button>
                <button className="bg-white text-[#140d1b] border border-[#ede7f3] hover:bg-gray-50 text-base font-bold h-12 px-8 rounded-lg transition-colors">
                    Hubungi Penjualan
                </button>
            </div>
            {/* Hero Image / Dashboard Preview */}
            <div className="mt-12 w-full rounded-xl overflow-hidden shadow-2xl border border-[#ede7f3] bg-white">
                <div className="w-full h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2">
                    <div className="size-3 rounded-full bg-red-400"></div>
                    <div className="size-3 rounded-full bg-yellow-400"></div>
                    <div className="size-3 rounded-full bg-green-400"></div>
                </div>
                <div className="w-full aspect-[21/9] bg-gradient-to-br from-white to-purple-50 flex items-center justify-center relative overflow-hidden">
                    {/* Abstract Dashboard Content */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div className="flex flex-col items-center gap-4 z-10">
                        <Activity className="text-[#7f13ec]/30 w-20 h-20" />
                        <div className="text-gray-400 font-medium">Sistem Aman & Teroptimasi</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
