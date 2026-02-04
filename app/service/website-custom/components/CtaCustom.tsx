'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CtaCustom() {
    return (
        <section className="py-20 px-4 sm:px-10">
            <div className="max-w-[1280px] mx-auto">
                <div className="relative rounded-3xl overflow-hidden bg-[#7f13ec] text-white p-12 lg:p-20 text-center">
                    {/* Abstract Background Shapes */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white opacity-10 blur-3xl"></div>
                        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-purple-900 opacity-20 blur-3xl"></div>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">Siap membangun sesuatu yang hebat?</h2>
                        <p className="text-purple-100 text-lg md:text-xl">Mari diskusikan kebutuhan proyek Anda dan lihat bagaimana kami dapat membantu bisnis Anda tumbuh secara online.</p>
                        <Link href="/contact" className="mt-4 px-8 py-4 bg-white text-[#7f13ec] rounded-xl font-bold text-lg hover:shadow-lg hover:bg-gray-50 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                            <span>Konsultasikan Proyek Anda</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
