'use client';

import { Users, Headset, Rocket } from 'lucide-react';

export default function ChooseService() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mengapa Memilih Kami?</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Kami tidak hanya membangun website; kami membangun pengalaman digital yang memberikan hasil bisnis nyata.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transition-shadow">
                        <div className="w-16 h-16 bg-[#7f13ec]/10 rounded-full flex items-center justify-center text-[#7f13ec] mb-6">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Tim Ahli</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Tim pengembang senior dan desainer pemenang penghargaan yang berdedikasi siap untuk proyek Anda.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transition-shadow">
                        <div className="w-16 h-16 bg-[#7f13ec]/10 rounded-full flex items-center justify-center text-[#7f13ec] mb-6">
                            <Headset className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Dukungan 24/7</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Dukungan teknis sepanjang waktu memastikan kehadiran digital Anda selalu aktif.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] transition-shadow">
                        <div className="w-16 h-16 bg-[#7f13ec]/10 rounded-full flex items-center justify-center text-[#7f13ec] mb-6">
                            <Rocket className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Pengiriman Cepat</h3>
                        <p className="text-slate-500 leading-relaxed">
                            Alur kerja yang dioptimalkan menjamin pengiriman proyek tepat waktu tanpa mengorbankan kualitas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
