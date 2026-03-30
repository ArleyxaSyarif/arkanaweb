'use client';

import { Users, Headset, Rocket, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function ChooseService() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Layanan  <span className="text-[#7f13ec]">Dari Kami</span></h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Di Arkana Web, kami mengutamakan kejujuran. Anda bebas chat kami kapan saja untuk cek progres, agar setiap langkah kerja kami tetap sesuai dengan keinginan Anda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1: Tim */}
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transition-shadow">
                        <div className="w-16 h-16 bg-[#7f13ec]/10 rounded-full flex items-center justify-center text-[#7f13ec] mb-6">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Tim Berdedikasi</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Bekerja langsung dengan tim yang fokus penuh mengurus proyek Anda dari awal hingga selesai.
                        </p>
                    </div>

                    {/* Feature 2: Jujur & Komitmen */}
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transition-shadow">
                        <div className="w-16 h-16 bg-[#7f13ec]/10 rounded-full flex items-center justify-center text-[#7f13ec] mb-6">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Jujur & Terbuka</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Tidak ada biaya tersembunyi. Kami berikan laporan progres berkala agar Anda selalu tenang.
                        </p>
                    </div>

                    {/* Feature 3: Layanan 24 Jam */}
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transition-shadow">
                        <div className="w-16 h-16 bg-[#7f13ec]/10 rounded-full flex items-center justify-center text-[#7f13ec] mb-6">
                            <HeartHandshake className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Siap Sedia 24/7</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Kami selalu ada saat Anda butuh diskusi atau bantuan teknis kapan pun, tanpa harus menunggu lama.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
