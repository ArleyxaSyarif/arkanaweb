'use client';

import { ArrowRight, ShieldCheck, CloudUpload, RefreshCw, Timer, Zap, FileText } from 'lucide-react';
import Link from 'next/link';

export default function FeaturesMaintenance() {
    return (
        <section className="py-16 w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-[#140d1b] tracking-tight mb-3">
                        Apa yang <span className="text-[#7f13ec]">Termasuk?</span>
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg">Segala yang Anda butuhkan untuk menjaga situs Anda berjalan lancar dengan standar performa tertinggi.</p>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Feature 1 */}
                <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#ede7f3] flex flex-col gap-6 md:gap-8 transition-all duration-300 hover:shadow-[0_40px_80px_rgba(127,19,236,0.06)] hover:-translate-y-2 group cursor-pointer">
                    <div className="size-16 rounded-2xl bg-[#7f13ec]/10 flex items-center justify-center shrink-0 group-hover:bg-[#7f13ec] transition-all duration-300">
                        <ShieldCheck className="text-[#7f13ec] group-hover:text-white w-8 h-8 transition-colors duration-300" />
                    </div>
                    <div>
                        <h3 className="font-extrabold text-xl text-[#140d1b] mb-3 group-hover:text-[#7f13ec] transition-colors duration-300">Pemantauan Keamanan 24/7</h3>
                        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                            Pemindaian berkelanjutan untuk malware dan kerentanan agar ancaman tetap jauh dari infrastruktur digital Anda.
                        </p>
                    </div>
                </div>
                {/* Feature 2 */}
                <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#ede7f3] flex flex-col gap-6 md:gap-8 transition-all duration-300 hover:shadow-[0_40px_80px_rgba(127,19,236,0.06)] hover:-translate-y-2 group cursor-pointer">
                    <div className="size-16 rounded-2xl bg-[#7f13ec]/10 flex items-center justify-center shrink-0 group-hover:bg-[#7f13ec] transition-all duration-300">
                        <CloudUpload className="text-[#7f13ec] group-hover:text-white w-8 h-8 transition-colors duration-300" />
                    </div>
                    <div>
                        <h3 className="font-extrabold text-xl text-[#140d1b] mb-3 group-hover:text-[#7f13ec] transition-colors duration-300">Cadangan Cloud Harian</h3>
                        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                            Data Anda aman. Kami melakukan pencadangan otomatis harian ke penyimpanan cloud yang aman, terenkripsi, dan terdistribusi.
                        </p>
                    </div>
                </div>
                {/* Feature 3 */}
                <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#ede7f3] flex flex-col gap-6 md:gap-8 transition-all duration-300 hover:shadow-[0_40px_80px_rgba(127,19,236,0.06)] hover:-translate-y-2 group cursor-pointer">
                    <div className="size-16 rounded-2xl bg-[#7f13ec]/10 flex items-center justify-center shrink-0 group-hover:bg-[#7f13ec] transition-all duration-300">
                        <RefreshCw className="text-[#7f13ec] group-hover:text-white w-8 h-8 transition-colors duration-300" />
                    </div>
                    <div>
                        <h3 className="font-extrabold text-xl text-[#140d1b] mb-3 group-hover:text-[#7f13ec] transition-colors duration-300">Pembaruan Plugin Mingguan</h3>
                        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                            Pemeriksaan kompatibilitas mendalam dan pembaruan aman untuk memastikan seluruh ekosistem situs Anda tetap modern.
                        </p>
                    </div>
                </div>
                {/* Feature 4 */}
                <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#ede7f3] flex flex-col gap-6 md:gap-8 transition-all duration-300 hover:shadow-[0_40px_80px_rgba(127,19,236,0.06)] hover:-translate-y-2 group cursor-pointer">
                    <div className="size-16 rounded-2xl bg-[#7f13ec]/10 flex items-center justify-center shrink-0 group-hover:bg-[#7f13ec] transition-all duration-300">
                        <Timer className="text-[#7f13ec] group-hover:text-white w-8 h-8 transition-colors duration-300" />
                    </div>
                    <div>
                        <h3 className="font-extrabold text-xl text-[#140d1b] mb-3 group-hover:text-[#7f13ec] transition-colors duration-300">Pemantauan Uptime</h3>
                        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                            Kami memantau ketersediaan situs Anda setiap menit. Respon instan dari tim teknis jika terjadi anomali pada server atau jaringan.
                        </p>
                    </div>
                </div>
                {/* Feature 5 */}
                <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#ede7f3] flex flex-col gap-6 md:gap-8 transition-all duration-300 hover:shadow-[0_40px_80px_rgba(127,19,236,0.06)] hover:-translate-y-2 group cursor-pointer">
                    <div className="size-16 rounded-2xl bg-[#7f13ec]/10 flex items-center justify-center shrink-0 group-hover:bg-[#7f13ec] transition-all duration-300">
                        <Zap className="text-[#7f13ec] group-hover:text-white w-8 h-8 transition-colors duration-300" />
                    </div>
                    <div>
                        <h3 className="font-extrabold text-xl text-[#140d1b] mb-3 group-hover:text-[#7f13ec] transition-colors duration-300">Optimasi Kecepatan</h3>
                        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                            Pembersihan database rutin dan konfigurasi cache tingkat lanjut untuk pengalaman pengguna yang sangat responsif dan cepat.
                        </p>
                    </div>
                </div>
                {/* Feature 6 */}
                <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#ede7f3] flex flex-col gap-6 md:gap-8 transition-all duration-300 hover:shadow-[0_40px_80px_rgba(127,19,236,0.06)] hover:-translate-y-2 group cursor-pointer">
                    <div className="size-16 rounded-2xl bg-[#7f13ec]/10 flex items-center justify-center shrink-0 group-hover:bg-[#7f13ec] transition-all duration-300">
                        <FileText className="text-[#7f13ec] group-hover:text-white w-8 h-8 transition-colors duration-300" />
                    </div>
                    <div>
                        <h3 className="font-extrabold text-xl text-[#140d1b] mb-3 group-hover:text-[#7f13ec] transition-colors duration-300">Laporan Bulanan</h3>
                        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                            Wawasan mendalam melalui laporan transparan bulanan yang merinci seluruh aktivitas pembaruan, uptime, dan kesehatan situs Anda.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
