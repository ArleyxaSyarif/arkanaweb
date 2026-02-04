'use client';

import { Search, Code, Link as LinkIcon, BarChart2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CapabilitiesSeo() {
    return (
        <>
            {/* Section Header */}
            <div className="w-full bg-[#f7f6f8]">
                <div className="max-w-[960px] mx-auto px-4 py-8">
                    <div className="flex flex-col items-center text-center mb-4">
                        <span className="text-[#7f13ec] font-bold text-sm uppercase tracking-wider mb-2">Proses Kami</span>
                        <h2 className="text-[#140d1b] text-3xl font-bold leading-tight tracking-tight">Kemampuan Utama</h2>
                        <div className="w-16 h-1 bg-[#7f13ec] rounded-full mt-4"></div>
                    </div>
                </div>
            </div>

            {/* Feature Section */}
            <section className="w-full bg-[#f7f6f8] pb-20">
                <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        {/* Left: Description */}
                        <div className="lg:w-1/3 flex flex-col gap-6 sticky top-24">
                            <h3 className="text-2xl font-bold text-[#140d1b]">
                                Strategi SEO Komprehensif
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Kami tidak hanya menebak. Kami menganalisis, mengoptimalkan, dan mengulang. Pendekatan holistik kami mencakup setiap sudut optimasi mesin pencari untuk memastikan pertumbuhan jangka panjang yang berkelanjutan bagi merek Anda.
                            </p>
                            <Link href="#" className="text-[#7f13ec] font-bold hover:underline inline-flex items-center gap-1 group">
                                Pelajari metode kami lebih lanjut
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                        {/* Right: Grid */}
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {/* Feature Card 1 */}
                            <div className="flex flex-col gap-4 p-6 rounded-xl border border-gray-200 bg-white hover:shadow-xl hover:border-[#7f13ec]/30 transition-all duration-300 group">
                                <div className="size-12 rounded-lg bg-[#7f13ec]/10 flex items-center justify-center group-hover:bg-[#7f13ec] group-hover:text-white transition-colors text-[#7f13ec]">
                                    <Search className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-lg font-bold text-[#140d1b]">Riset Kata Kunci</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">Mengidentifikasi istilah pencarian bernilai tinggi dan kesenjangan niat pengguna yang mendorong lalu lintas relevan dan berkonversi ke situs Anda.</p>
                                </div>
                            </div>
                            {/* Feature Card 2 */}
                            <div className="flex flex-col gap-4 p-6 rounded-xl border border-gray-200 bg-white hover:shadow-xl hover:border-[#7f13ec]/30 transition-all duration-300 group">
                                <div className="size-12 rounded-lg bg-[#7f13ec]/10 flex items-center justify-center group-hover:bg-[#7f13ec] group-hover:text-white transition-colors text-[#7f13ec]">
                                    <Code className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-lg font-bold text-[#140d1b]">SEO On-Page</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">Mengoptimalkan struktur HTML, meta tag, dan hierarki konten untuk kemampuan crawl dan kecepatan maksimal.</p>
                                </div>
                            </div>
                            {/* Feature Card 3 */}
                            <div className="flex flex-col gap-4 p-6 rounded-xl border border-gray-200 bg-white hover:shadow-xl hover:border-[#7f13ec]/30 transition-all duration-300 group md:col-span-2 lg:col-span-1">
                                <div className="size-12 rounded-lg bg-[#7f13ec]/10 flex items-center justify-center group-hover:bg-[#7f13ec] group-hover:text-white transition-colors text-[#7f13ec]">
                                    <LinkIcon className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-lg font-bold text-[#140d1b]">Strategi Backlink</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">Membangun otoritas domain melalui referensi eksternal berkualitas tinggi dan kemitraan strategis.</p>
                                </div>
                            </div>
                            {/* Feature Card 4 */}
                            <div className="flex flex-col gap-4 p-6 rounded-xl border border-gray-200 bg-white hover:shadow-xl hover:border-[#7f13ec]/30 transition-all duration-300 group md:col-span-2 lg:col-span-1">
                                <div className="size-12 rounded-lg bg-[#7f13ec]/10 flex items-center justify-center group-hover:bg-[#7f13ec] group-hover:text-white transition-colors text-[#7f13ec]">
                                    <BarChart2 className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-lg font-bold text-[#140d1b]">Laporan Kinerja</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">Laporan bulanan transparan yang menunjukkan dengan tepat ke mana anggaran Anda pergi dan bagaimana peringkat Anda meningkat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
