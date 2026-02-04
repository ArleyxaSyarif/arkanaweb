'use client';

import { Edit3, Smartphone, FlaskConical, Link as LinkIcon, Image, Zap } from 'lucide-react';

export default function FeaturesLanding() {
    return (
        <section className="py-20 bg-white text-[#140d1b]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#140d1b] mb-4">Segala yang Anda Butuhkan untuk Tumbuh</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Layanan landing page kami adalah paket komprehensif yang dirancang untuk mencakup setiap aspek teknis dan kreatif dari kampanye yang sukses.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="p-6 rounded-xl border border-gray-100 bg-[#f9fafb] hover:border-[#7f13ec]/30 transition-colors group">
                        <div className="w-12 h-12 rounded-lg bg-[#7f13ec]/10 text-[#7f13ec] flex items-center justify-center mb-4 group-hover:bg-[#7f13ec] group-hover:text-white transition-colors">
                            <Edit3 className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-[#140d1b] mb-2">Copywriting Persuasif</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Headline yang memikat dan konten yang menjual. Kami menyusun narasi yang beresonansi dengan audiens target Anda.</p>
                    </div>
                    {/* Feature 2 */}
                    <div className="p-6 rounded-xl border border-gray-100 bg-[#f9fafb] hover:border-[#7f13ec]/30 transition-colors group">
                        <div className="w-12 h-12 rounded-lg bg-[#7f13ec]/10 text-[#7f13ec] flex items-center justify-center mb-4 group-hover:bg-[#7f13ec] group-hover:text-white transition-colors">
                            <Smartphone className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-[#140d1b] mb-2">Responsif Mobile</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Pengalaman sempurna di semua perangkat. Kami memastikan landing page Anda terlihat sempurna di ponsel, tablet, dan desktop.</p>
                    </div>
                    {/* Feature 3 */}
                    <div className="p-6 rounded-xl border border-gray-100 bg-[#f9fafb] hover:border-[#7f13ec]/30 transition-colors group">
                        <div className="w-12 h-12 rounded-lg bg-[#7f13ec]/10 text-[#7f13ec] flex items-center justify-center mb-4 group-hover:bg-[#7f13ec] group-hover:text-white transition-colors">
                            <FlaskConical className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-[#140d1b] mb-2">Pengaturan A/B Testing</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Jangan menebak apa yang berhasil. Kami mengimplementasikan infrastruktur pelacakan untuk menguji headline, CTA, dan gambar.</p>
                    </div>
                    {/* Feature 4 */}
                    <div className="p-6 rounded-xl border border-gray-100 bg-[#f9fafb] hover:border-[#7f13ec]/30 transition-colors group">
                        <div className="w-12 h-12 rounded-lg bg-[#7f13ec]/10 text-[#7f13ec] flex items-center justify-center mb-4 group-hover:bg-[#7f13ec] group-hover:text-white transition-colors">
                            <LinkIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-[#140d1b] mb-2">Integrasi CRM</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Hubungkan formulir Anda dengan mulus ke HubSpot, Salesforce, atau Mailchimp. Jangan pernah kehilangan prospek.</p>
                    </div>
                    {/* Feature 5 */}
                    <div className="p-6 rounded-xl border border-gray-100 bg-[#f9fafb] hover:border-[#7f13ec]/30 transition-colors group">
                        <div className="w-12 h-12 rounded-lg bg-[#7f13ec]/10 text-[#7f13ec] flex items-center justify-center mb-4 group-hover:bg-[#7f13ec] group-hover:text-white transition-colors">
                            <Image className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-[#140d1b] mb-2">Ilustrasi Kustom</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Tampil beda dari keramaian foto stok generik dengan grafik khusus yang disesuaikan dengan merek Anda.</p>
                    </div>
                    {/* Feature 6 */}
                    <div className="p-6 rounded-xl border border-gray-100 bg-[#f9fafb] hover:border-[#7f13ec]/30 transition-colors group">
                        <div className="w-12 h-12 rounded-lg bg-[#7f13ec]/10 text-[#7f13ec] flex items-center justify-center mb-4 group-hover:bg-[#7f13ec] group-hover:text-white transition-colors">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-[#140d1b] mb-2">Optimasi Kecepatan</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Setiap detik berharga. Kami mengoptimalkan aset dan kode untuk memastikan waktu muat di bawah satu detik.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
