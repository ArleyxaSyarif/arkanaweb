'use client';

import { Palette, Users, Briefcase, Contact } from 'lucide-react';

export default function KeyElements() {
    return (
        <section className="w-full max-w-[1280px] px-4 md:px-10 py-5 flex flex-col">
            <div className="flex flex-col max-w-[960px] self-center w-full">
                <h2 className="text-[#140d1b] text-[28px] font-bold leading-tight tracking-[-0.015em] pb-6 pt-5 text-center md:text-left">Elemen Kunci</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
                    {/* Card 1 */}
                    <div className="flex flex-1 gap-4 rounded-xl border border-[#dbcfe7] bg-white p-6 flex-col shadow-sm hover:shadow-md transition-shadow group">
                        <div className="text-[#7f13ec] p-3 bg-[#7f13ec]/10 rounded-lg w-fit group-hover:bg-[#7f13ec] group-hover:text-white transition-colors">
                            <Palette className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[#140d1b] text-lg font-bold leading-tight">Identitas Merek</h3>
                            <p className="text-[#734c9a] text-sm font-normal leading-normal">Integrasi bahasa visual yang kohesif yang beresonansi dengan audiens Anda di semua titik kontak digital.</p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="flex flex-1 gap-4 rounded-xl border border-[#dbcfe7] bg-white p-6 flex-col shadow-sm hover:shadow-md transition-shadow group">
                        <div className="text-[#7f13ec] p-3 bg-[#7f13ec]/10 rounded-lg w-fit group-hover:bg-[#7f13ec] group-hover:text-white transition-colors">
                            <Users className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[#140d1b] text-lg font-bold leading-tight">Tentang Interaktif</h3>
                            <p className="text-[#734c9a] text-sm font-normal leading-normal">Pencitraan cerita yang menarik dan etalase tim untuk membangun kepercayaan dan transparansi dengan klien potensial.</p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="flex flex-1 gap-4 rounded-xl border border-[#dbcfe7] bg-white p-6 flex-col shadow-sm hover:shadow-md transition-shadow group">
                        <div className="text-[#7f13ec] p-3 bg-[#7f13ec]/10 rounded-lg w-fit group-hover:bg-[#7f13ec] group-hover:text-white transition-colors">
                            <Briefcase className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[#140d1b] text-lg font-bold leading-tight">Etalase Layanan</h3>
                            <p className="text-[#734c9a] text-sm font-normal leading-normal">Rincian mendalam tentang penawaran inti dan keahlian Anda yang disajikan dalam format yang mudah dicerna.</p>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="flex flex-1 gap-4 rounded-xl border border-[#dbcfe7] bg-white p-6 flex-col shadow-sm hover:shadow-md transition-shadow group">
                        <div className="text-[#7f13ec] p-3 bg-[#7f13ec]/10 rounded-lg w-fit group-hover:bg-[#7f13ec] group-hover:text-white transition-colors">
                            <Contact className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[#140d1b] text-lg font-bold leading-tight">Integrasi Kontak</h3>
                            <p className="text-[#734c9a] text-sm font-normal leading-normal">Formulir pembuatan prospek yang mulus, peta interaktif, dan integrasi pemesanan langsung.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
