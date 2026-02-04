'use client';

export default function RoadmapService() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1000px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 md:gap-20">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 top-24">
                            Proses kami yang <br />
                            <span className="text-[#7f13ec]">Mulus</span>
                        </h2>
                        <p className="text-slate-500 mb-8 top-48">
                            Kami mengikuti metodologi yang terbukti untuk memastikan setiap proyek dikirimkan dengan standar tertinggi, mulai dari konsep awal hingga peluncuran akhir.
                        </p>
                    </div>
                    <div className="md:w-2/3">
                        <div className="border-l-2 border-slate-100 pl-8 space-y-12 relative">
                            {/* Step 1 */}
                            <div className="relative group">
                                <span className="absolute -left-[41px] top-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#7f13ec] ring-4 ring-white group-hover:scale-125 transition-transform"></span>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[#7f13ec] font-bold text-sm tracking-widest uppercase">Minggu 1</span>
                                    <h3 className="text-2xl font-bold text-slate-900">Penemuan & Strategi</h3>
                                    <p className="text-slate-500 leading-relaxed">Kami mendalami tujuan bisnis, audiens target, dan lanskap pasar Anda untuk membangun fondasi yang kokoh.</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative group">
                                <span className="absolute -left-[41px] top-0 flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 ring-4 ring-white group-hover:bg-[#7f13ec] transition-colors"></span>
                                <div className="flex flex-col gap-2">
                                    <span className="text-slate-400 font-bold text-sm tracking-widest uppercase group-hover:text-[#7f13ec] transition-colors">Minggu 2-3</span>
                                    <h3 className="text-2xl font-bold text-slate-900">Desain & Prototyping</h3>
                                    <p className="text-slate-500 leading-relaxed">Desainer kami membuat identitas visual yang memukau dan prototipe interaktif yang selaras dengan visi merek Anda.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative group">
                                <span className="absolute -left-[41px] top-0 flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 ring-4 ring-white group-hover:bg-[#7f13ec] transition-colors"></span>
                                <div className="flex flex-col gap-2">
                                    <span className="text-slate-400 font-bold text-sm tracking-widest uppercase group-hover:text-[#7f13ec] transition-colors">Minggu 4-6</span>
                                    <h3 className="text-2xl font-bold text-slate-900">Pengembangan</h3>
                                    <p className="text-slate-500 leading-relaxed">Kami menulis kode yang bersih dan semantik untuk menghidupkan desain, memastikan responsivitas dan kinerja.</p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="relative group">
                                <span className="absolute -left-[41px] top-0 flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 ring-4 ring-white group-hover:bg-[#7f13ec] transition-colors"></span>
                                <div className="flex flex-col gap-2">
                                    <span className="text-slate-400 font-bold text-sm tracking-widest uppercase group-hover:text-[#7f13ec] transition-colors">Minggu 7</span>
                                    <h3 className="text-2xl font-bold text-slate-900">Peluncuran & Pertumbuhan</h3>
                                    <p className="text-slate-500 leading-relaxed">Kami menangani proses penyebaran dan memberikan dukungan pasca-peluncuran untuk membantu Anda berkembang secara efektif.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
