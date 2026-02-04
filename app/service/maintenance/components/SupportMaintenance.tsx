'use client';

import { Headset, MessageCircle } from 'lucide-react';

export default function SupportMaintenance() {
    return (
        <section className="w-full my-10">
            <div className="relative overflow-hidden bg-[#2a1b3d] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#7f13ec]/30 rounded-full blur-3xl group-hover:bg-[#7f13ec]/40 transition-all duration-500"></div>
                <div className="flex items-center gap-6 relative z-10">
                    <div className="hidden md:flex size-16 rounded-full bg-white/10 items-center justify-center text-white border border-white/20">
                        <Headset className="w-8 h-8" />
                    </div>
                    <div className="text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">Butuh bantuan sekarang?</h3>
                        <p className="text-gray-300 max-w-lg">Tim Dukungan Khusus 24/7 kami hanya berjarak satu klik untuk membantu masalah kritis apa pun.</p>
                    </div>
                </div>
                <div className="relative z-10 w-full md:w-auto">
                    <button className="w-full md:w-auto bg-white text-[#7f13ec] hover:bg-gray-50 font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        Hubungi Dukungan
                    </button>
                </div>
            </div>
        </section>
    );
}
