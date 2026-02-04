'use client';

import { CheckCircle, XCircle } from 'lucide-react';

export default function PricingMaintenance() {
    return (
        <section className="py-16 w-full" id="pricing">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#140d1b] mb-4">Pilih Paket Pemeliharaan Anda</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Harga transparan tanpa biaya tersembunyi. Upgrade atau downgrade kapan saja.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic Plan */}
                <div className="bg-white rounded-2xl p-8 border border-[#ede7f3] flex flex-col h-full hover:border-gray-300 transition-colors">
                    <h3 className="text-lg font-bold text-gray-500 uppercase tracking-wider mb-2">Basic</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-black text-[#140d1b]">Rp 499k</span>
                        <span className="text-gray-500 font-medium">/bulan</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-6">Pemeliharaan penting untuk website pribadi dan blog.</p>
                    <div className="space-y-4 mb-8 grow">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-green-500 w-5 h-5" />
                            <span className="text-sm font-medium">Pembaruan Mingguan</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-green-500 w-5 h-5" />
                            <span className="text-sm font-medium">Cadangan Harian</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-green-500 w-5 h-5" />
                            <span className="text-sm font-medium">Pemantauan Keamanan</span>
                        </div>
                        <div className="flex items-center gap-3 opacity-50">
                            <XCircle className="text-gray-400 w-5 h-5" />
                            <span className="text-sm font-medium line-through">Dukungan Prioritas</span>
                        </div>
                        <div className="flex items-center gap-3 opacity-50">
                            <XCircle className="text-gray-400 w-5 h-5" />
                            <span className="text-sm font-medium line-through">Optimasi Performa</span>
                        </div>
                    </div>
                    <button className="w-full py-3 px-4 rounded-lg font-bold text-[#7f13ec] bg-[#7f13ec]/10 hover:bg-[#7f13ec]/20 transition-colors">
                        Pilih Basic
                    </button>
                </div>
                {/* Pro Plan (Most Popular) */}
                <div className="bg-white rounded-2xl p-8 border-2 border-[#7f13ec] relative flex flex-col h-full shadow-xl shadow-[#7f13ec]/10 scale-105 md:z-10">
                    <div className="absolute top-0 right-0 bg-[#7f13ec] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                        PALING POPULER
                    </div>
                    <h3 className="text-lg font-bold text-[#7f13ec] uppercase tracking-wider mb-2">Pro</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-black text-[#140d1b]">Rp 999k</span>
                        <span className="text-gray-500 font-medium">/bulan</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-6">Sempurna untuk bisnis kecil dan startup yang sedang berkembang.</p>
                    <div className="space-y-4 mb-8 grow">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-[#7f13ec] w-5 h-5" />
                            <span className="text-sm font-medium">Pembaruan Harian</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-[#7f13ec] w-5 h-5" />
                            <span className="text-sm font-medium">Cadangan Real-time</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-[#7f13ec] w-5 h-5" />
                            <span className="text-sm font-medium">Keamanan Tingkat Lanjut</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-[#7f13ec] w-5 h-5" />
                            <span className="text-sm font-medium">Dukungan Email Prioritas</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-[#7f13ec] w-5 h-5" />
                            <span className="text-sm font-medium">Optimasi Performa</span>
                        </div>
                    </div>
                    <button className="w-full py-3 px-4 rounded-lg font-bold text-white bg-[#7f13ec] hover:bg-[#7f13ec]/90 transition-colors shadow-lg shadow-[#7f13ec]/25">
                        Mulai Sekarang
                    </button>
                </div>
                {/* Enterprise Plan */}
                <div className="bg-white rounded-2xl p-8 border border-[#ede7f3] flex flex-col h-full hover:border-gray-300 transition-colors">
                    <h3 className="text-lg font-bold text-gray-500 uppercase tracking-wider mb-2">Enterprise</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-black text-[#140d1b]">Rp 2.499k</span>
                        <span className="text-gray-500 font-medium">/bulan</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-6">Sumber daya khusus untuk website yang sangat penting.</p>
                    <div className="space-y-4 mb-8 grow">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-green-500 w-5 h-5" />
                            <span className="text-sm font-medium">Semua yang ada di Pro</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-green-500 w-5 h-5" />
                            <span className="text-sm font-medium">1 Jam Pengerjaan Dev Custom</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-green-500 w-5 h-5" />
                            <span className="text-sm font-medium">Dukungan Telepon & Slack</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-green-500 w-5 h-5" />
                            <span className="text-sm font-medium">Lingkungan Staging</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-green-500 w-5 h-5" />
                            <span className="text-sm font-medium">Panggilan Konsultasi</span>
                        </div>
                    </div>
                    <button className="w-full py-3 px-4 rounded-lg font-bold text-[#7f13ec] bg-[#7f13ec]/10 hover:bg-[#7f13ec]/20 transition-colors">
                        Hubungi Penjualan
                    </button>
                </div>
            </div>
        </section>
    );
}
