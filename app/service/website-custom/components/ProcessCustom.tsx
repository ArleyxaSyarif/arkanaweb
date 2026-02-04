'use client';

import { Search, PenTool, Code, Rocket } from 'lucide-react';

export default function ProcessCustom() {
    return (
        <section className="py-20 px-4 sm:px-10 bg-white">
            <div className="max-w-[960px] mx-auto">
                <div className="mb-12 text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-[#140d1b] mb-3">Proses Pengembangan Kami</h2>
                    <p className="text-gray-600">Alur kerja transparan dan tangkas yang dirancang untuk memberikan keunggulan di setiap tahap.</p>
                </div>
                <div className="grid grid-cols-[60px_1fr] gap-x-6">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center gap-2 pt-2">
                        <div className="w-12 h-12 rounded-full bg-[#7f13ec]/10 flex items-center justify-center text-[#7f13ec] shadow-[0_0_10px_rgba(127,19,236,0.2)] z-10 bg-white border border-[#7f13ec]/20">
                            <Search className="w-6 h-6" />
                        </div>
                        <div className="w-[2px] bg-gradient-to-b from-[#7f13ec]/50 to-[#7f13ec]/20 h-full grow min-h-[60px]"></div>
                    </div>
                    <div className="pb-10 pt-2 group cursor-default">
                        <h3 className="text-xl font-bold text-[#140d1b] mb-2 group-hover:text-[#7f13ec] transition-colors">Penemuan</h3>
                        <p className="text-gray-600 leading-relaxed">Kami mendalami tujuan bisnis, audiens target, dan kebutuhan teknis Anda untuk membangun roadmap yang solid.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-[2px] bg-gradient-to-b from-[#7f13ec]/20 to-[#7f13ec]/50 h-6"></div>
                        <div className="w-12 h-12 rounded-full bg-[#7f13ec]/10 flex items-center justify-center text-[#7f13ec] shadow-[0_0_10px_rgba(127,19,236,0.2)] z-10 bg-white border border-[#7f13ec]/20">
                            <PenTool className="w-6 h-6" />
                        </div>
                        <div className="w-[2px] bg-gradient-to-b from-[#7f13ec]/50 to-[#7f13ec]/20 h-full grow min-h-[60px]"></div>
                    </div>
                    <div className="pb-10 pt-4 group cursor-default">
                        <h3 className="text-xl font-bold text-[#140d1b] mb-2 group-hover:text-[#7f13ec] transition-colors">Desain</h3>
                        <p className="text-gray-600 leading-relaxed">Membuat wireframe dan UI/UX high-fidelity yang selaras dengan identitas brand Anda sambil memastikan pengalaman pengguna yang optimal.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-[2px] bg-gradient-to-b from-[#7f13ec]/20 to-[#7f13ec]/50 h-6"></div>
                        <div className="w-12 h-12 rounded-full bg-[#7f13ec]/10 flex items-center justify-center text-[#7f13ec] shadow-[0_0_10px_rgba(127,19,236,0.2)] z-10 bg-white border border-[#7f13ec]/20">
                            <Code className="w-6 h-6" />
                        </div>
                        <div className="w-[2px] bg-gradient-to-b from-[#7f13ec]/50 to-[#7f13ec]/20 h-full grow min-h-[60px]"></div>
                    </div>
                    <div className="pb-10 pt-4 group cursor-default">
                        <h3 className="text-xl font-bold text-[#140d1b] mb-2 group-hover:text-[#7f13ec] transition-colors">Pengembangan</h3>
                        <p className="text-gray-600 leading-relaxed">Menulis kode yang bersih dan skalabel menggunakan kerangka kerja modern. Kami memprioritaskan performa, keamanan, dan kemudahan pemeliharaan.</p>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-[2px] bg-gradient-to-b from-[#7f13ec]/20 to-[#7f13ec]/50 h-6"></div>
                        <div className="w-12 h-12 rounded-full bg-[#7f13ec] flex items-center justify-center text-white shadow-[0_0_15px_rgba(127,19,236,0.3)] z-10 ring-4 ring-[#7f13ec]/20">
                            <Rocket className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="pb-4 pt-4 group cursor-default">
                        <h3 className="text-xl font-bold text-[#140d1b] mb-2 group-hover:text-[#7f13ec] transition-colors">Peluncuran</h3>
                        <p className="text-gray-600 leading-relaxed">Pengujian QA yang ketat di berbagai perangkat, penerapan yang mulus, dan serah terima komprehensif dengan dokumentasi.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
