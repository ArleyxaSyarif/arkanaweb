'use client';

export default function RoadmapService() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1000px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 md:gap-20">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 top-24">
                            Langkah Kerja <br />
                            <span className="text-[#7f13ec]">Arkana Web</span>
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
                                    <span className="text-[#7f13ec] font-bold text-sm tracking-widest uppercase">Tahap 1</span>
                                    <h3 className="text-2xl font-bold text-slate-900">Diskusi & Perencanaan</h3>
                                    <p className="text-slate-500 leading-relaxed">Kita berdiskusi untuk menyamakan visi. Kami pastikan fitur dan harga jujur sesuai kebutuhan bisnis Anda, tanpa biaya tersembunyi.</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative group">
                                <span className="absolute -left-[41px] top-0 flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 ring-4 ring-white group-hover:bg-[#7f13ec] transition-colors"></span>
                                <div className="flex flex-col gap-2">
                                    <span className="text-slate-400 font-bold text-sm tracking-widest uppercase group-hover:text-[#7f13ec] transition-colors">Tahap 2</span>
                                    <h3 className="text-2xl font-bold text-slate-900">Desain & Masukan</h3>
                                    <p className="text-slate-500 leading-relaxed">Kami membuat desain awal sesuai kesepakatan. Anda bisa memberikan masukan kapan saja sampai tampilannya pas di mata.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative group">
                                <span className="absolute -left-[41px] top-0 flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 ring-4 ring-white group-hover:bg-[#7f13ec] transition-colors"></span>
                                <div className="flex flex-col gap-2">
                                    <span className="text-slate-400 font-bold text-sm tracking-widest uppercase group-hover:text-[#7f13ec] transition-colors">Tahap 3</span>
                                    <h3 className="text-2xl font-bold text-slate-900">Proses Bangun (Update Rutin)</h3>
                                    <p className="text-slate-500 leading-relaxed">Kami mulai proses coding. Kami akan kirimkan link progres secara rutin supaya Anda bisa pantau perkembangan website Anda kapan saja.</p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="relative group">
                                <span className="absolute -left-[41px] top-0 flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 ring-4 ring-white group-hover:bg-[#7f13ec] transition-colors"></span>
                                <div className="flex flex-col gap-2">
                                    <span className="text-slate-400 font-bold text-sm tracking-widest uppercase group-hover:text-[#7f13ec] transition-colors">Tahap 4</span>
                                    <h3 className="text-2xl font-bold text-slate-900">Peluncuran & Pendampingan</h3>
                                    <p className="text-slate-500 leading-relaxed">Setelah website selesai, kami akan bantu proses deploy ke hosting pilihan Anda. Kami juga siap mendampingi jika ada kendala teknis di awal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
