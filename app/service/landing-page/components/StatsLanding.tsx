'use client';

import { TrendingUp } from 'lucide-react';

export default function StatsLanding() {
    return (
        <section className="py-20 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Stat 1 */}
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#f9fafb] hover:bg-white transition-all border border-transparent hover:border-gray-100 hover:shadow-lg group">
                        <div className="relative w-32 h-32 mb-6">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle className="text-gray-200" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
                                <circle className="text-[#7f13ec]" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364" strokeDashoffset="10" strokeLinecap="round" strokeWidth="8"></circle>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                <span className="text-3xl font-bold text-[#140d1b]">98</span>
                                <span className="text-xs text-gray-500 font-medium">Skor</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-[#140d1b] mb-2">Loading Cepat</h3>
                        <p className="text-sm text-gray-500">Google PageSpeed dioptimalkan untuk interaktivitas instan.</p>
                    </div>
                    {/* Stat 2 */}
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#f9fafb] hover:bg-white transition-all border border-transparent hover:border-gray-100 hover:shadow-lg group">
                        <div className="relative w-32 h-32 mb-6">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle className="text-gray-200" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
                                <circle className="text-[#5e3aee]" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364" strokeDashoffset="0" strokeLinecap="round" strokeWidth="8"></circle>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                <span className="text-3xl font-bold text-[#140d1b]">100%</span>
                                <span className="text-xs text-gray-500 font-medium">Siap</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-[#140d1b] mb-2">SEO Ready</h3>
                        <p className="text-sm text-gray-500">Data terstruktur dan HTML semantik untuk visibilitas pencarian.</p>
                    </div>
                    {/* Stat 3 */}
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#f9fafb] hover:bg-white transition-all border border-transparent hover:border-gray-100 hover:shadow-lg group">
                        <div className="relative w-32 h-32 mb-6 flex items-center justify-center bg-[#7f13ec]/5 rounded-full border border-[#7f13ec]/10">
                            <TrendingUp className="w-16 h-16 text-[#7f13ec]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#140d1b] mb-2">Konversi Tinggi</h3>
                        <p className="text-sm text-gray-500">Terbukti meningkatkan rata-rata 3x lipat dalam perolehan prospek.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
