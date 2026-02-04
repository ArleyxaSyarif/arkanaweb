'use client';

import { ArrowRight, ShieldCheck, CloudUpload, RefreshCw, Timer, Zap, FileText } from 'lucide-react';
import Link from 'next/link';

export default function FeaturesMaintenance() {
    return (
        <section className="py-16 w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#140d1b] mb-2">Apa yang Termasuk?</h2>
                    <p className="text-gray-600">Segala yang Anda butuhkan untuk menjaga situs Anda berjalan lancar.</p>
                </div>
                <Link href="#" className="text-[#7f13ec] font-bold flex items-center gap-1 hover:underline">
                    Lihat spesifikasi teknis lengkap
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Feature 1 */}
                <div className="bg-white p-6 rounded-xl border border-[#ede7f3] flex gap-4 transition-all hover:shadow-md">
                    <div className="size-12 rounded-lg bg-[#7f13ec]/10 flex items-center justify-center shrink-0">
                        <ShieldCheck className="text-[#7f13ec] w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Pemantauan Keamanan 24/7</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Pemindaian berkelanjutan untuk malware dan kerentanan agar ancaman tetap jauh.</p>
                    </div>
                </div>
                {/* Feature 2 */}
                <div className="bg-white p-6 rounded-xl border border-[#ede7f3] flex gap-4 transition-all hover:shadow-md">
                    <div className="size-12 rounded-lg bg-[#7f13ec]/10 flex items-center justify-center shrink-0">
                        <CloudUpload className="text-[#7f13ec] w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Cadangan Cloud Harian</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Data Anda aman. Kami melakukan pencadangan otomatis harian ke penyimpanan cloud yang aman.</p>
                    </div>
                </div>
                {/* Feature 3 */}
                <div className="bg-white p-6 rounded-xl border border-[#ede7f3] flex gap-4 transition-all hover:shadow-md">
                    <div className="size-12 rounded-lg bg-[#7f13ec]/10 flex items-center justify-center shrink-0">
                        <RefreshCw className="text-[#7f13ec] w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Pembaruan Plugin Mingguan</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Pemeriksaan kompatibilitas dan pembaruan aman untuk semua plugin dan tema Anda.</p>
                    </div>
                </div>
                {/* Feature 4 */}
                <div className="bg-white p-6 rounded-xl border border-[#ede7f3] flex gap-4 transition-all hover:shadow-md">
                    <div className="size-12 rounded-lg bg-[#7f13ec]/10 flex items-center justify-center shrink-0">
                        <Timer className="text-[#7f13ec] w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Pemantauan Uptime</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Kami memantau situs Anda setiap menit. Jika down, kami tahu seketika.</p>
                    </div>
                </div>
                {/* Feature 5 */}
                <div className="bg-white p-6 rounded-xl border border-[#ede7f3] flex gap-4 transition-all hover:shadow-md">
                    <div className="size-12 rounded-lg bg-[#7f13ec]/10 flex items-center justify-center shrink-0">
                        <Zap className="text-[#7f13ec] w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Optimasi Kecepatan</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Pembersihan database rutin dan konfigurasi cache untuk kecepatan kilat.</p>
                    </div>
                </div>
                {/* Feature 6 */}
                <div className="bg-white p-6 rounded-xl border border-[#ede7f3] flex gap-4 transition-all hover:shadow-md">
                    <div className="size-12 rounded-lg bg-[#7f13ec]/10 flex items-center justify-center shrink-0">
                        <FileText className="text-[#7f13ec] w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Laporan Bulanan</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Laporan PDF transparan yang merinci pembaruan, uptime, dan pemindaian keamanan.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
