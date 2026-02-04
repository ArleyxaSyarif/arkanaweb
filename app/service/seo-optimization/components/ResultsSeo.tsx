'use client';

export default function ResultsSeo() {
    return (
        <section className="py-20 bg-white relative">
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-[#f3eafa] to-[#eaddf7] rounded-2xl p-8 md:p-12 shadow-inner overflow-hidden relative">
                    {/* Content Header */}
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-black text-[#140d1b] mb-2">Hasil Terbukti</h2>
                            <p className="text-gray-600 max-w-md">Lihat bagaimana kami membantu klien di berbagai industri mencapai pertumbuhan eksponensial dalam lalu lintas organik.</p>
                        </div>
                        <div className="flex gap-8">
                            <div>
                                <p className="text-4xl font-black text-[#7f13ec]">150%</p>
                                <p className="text-sm font-bold uppercase text-gray-500 tracking-wider">Peningkatan Trafik</p>
                            </div>
                            <div>
                                <p className="text-4xl font-black text-[#7f13ec]">3 Besar</p>
                                <p className="text-sm font-bold uppercase text-gray-500 tracking-wider">Peringkat</p>
                            </div>
                        </div>
                    </div>
                    {/* Custom Interactive Chart Component */}
                    <div className="relative z-10 w-full h-64 md:h-80 flex items-end justify-between gap-2 sm:gap-4 px-2">
                        {/* Chart Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                            <div className="w-full h-px bg-[#140d1b]"></div>
                            <div className="w-full h-px bg-[#140d1b]"></div>
                            <div className="w-full h-px bg-[#140d1b]"></div>
                            <div className="w-full h-px bg-[#140d1b]"></div>
                            <div className="w-full h-px bg-[#140d1b]"></div>
                        </div>
                        {/* Bars */}
                        <div className="flex-1 flex flex-col justify-end group cursor-pointer">
                            <div className="w-full bg-[#7f13ec]/30 rounded-t-sm h-[20%] group-hover:bg-[#7f13ec]/50 transition-all relative">
                                <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-[#140d1b] text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity">Bulan 1</div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-end group cursor-pointer">
                            <div className="w-full bg-[#7f13ec]/40 rounded-t-sm h-[35%] group-hover:bg-[#7f13ec]/60 transition-all relative">
                                <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-[#140d1b] text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity">Bulan 2</div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-end group cursor-pointer">
                            <div className="w-full bg-[#7f13ec]/50 rounded-t-sm h-[45%] group-hover:bg-[#7f13ec]/70 transition-all relative">
                                <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-[#140d1b] text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity">Bulan 3</div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-end group cursor-pointer">
                            <div className="w-full bg-[#7f13ec]/60 rounded-t-sm h-[60%] group-hover:bg-[#7f13ec]/80 transition-all relative">
                                <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-[#140d1b] text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity">Bulan 4</div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-end group cursor-pointer">
                            <div className="w-full bg-[#7f13ec]/80 rounded-t-sm h-[75%] group-hover:bg-[#7f13ec] transition-all relative">
                                <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-[#140d1b] text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity">Bulan 5</div>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-end group cursor-pointer">
                            <div className="w-full bg-[#7f13ec] rounded-t-sm h-[95%] shadow-[0_0_20px_rgba(127,19,236,0.5)] relative">
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#140d1b] text-white text-xs py-1 px-2 rounded whitespace-nowrap font-bold">Bulan 6 (Proyeksi)</div>
                            </div>
                        </div>
                    </div>
                    {/* Labels */}
                    <div className="flex justify-between mt-4 px-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                        <span>Mulai</span>
                        <span>Optimasi</span>
                        <span>Hasil</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
