'use client';

import { Zap, Monitor, FileEdit } from 'lucide-react';

export default function FeatureCustom() {
    return (
        <section className="py-20 px-4 sm:px-10 bg-white">
            <div className="max-w-[1280px] mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-[#f7f6f8] border border-transparent hover:border-[#7f13ec]/30 transition-all">
                        <div className="w-12 h-12 bg-[#7f13ec]/10 rounded-lg flex items-center justify-center mb-6 text-[#7f13ec]">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#140d1b]">Performa Tinggi</h3>
                        <p className="text-gray-600">Dioptimalkan untuk Core Web Vitals guna memastikan situs Anda dimuat secara instan dan berperingkat lebih tinggi.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-[#f7f6f8] border border-transparent hover:border-[#7f13ec]/30 transition-all">
                        <div className="w-12 h-12 bg-[#7f13ec]/10 rounded-lg flex items-center justify-center mb-6 text-[#7f13ec]">
                            <Monitor className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#140d1b]">Desain Responsif</h3>
                        <p className="text-gray-600">Rendering pixel-perfect di semua perangkat, dari monitor 4K besar hingga ponsel.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-[#f7f6f8] border border-transparent hover:border-[#7f13ec]/30 transition-all">
                        <div className="w-12 h-12 bg-[#7f13ec]/10 rounded-lg flex items-center justify-center mb-6 text-[#7f13ec]">
                            <FileEdit className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#140d1b]">Integrasi CMS</h3>
                        <p className="text-gray-600">Sistem manajemen konten yang mudah digunakan (Headless CMS) sehingga Anda memiliki kendali penuh atas data Anda.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
