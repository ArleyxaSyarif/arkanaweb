"use client";

import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ChooseSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white text-[#140d1b] font-display transition-colors duration-300 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            {/* Subtle Accent Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7f13ec]/30 to-transparent"></div>

            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left Column: Visual */}
                    <div className="relative h-full min-h-[400px] w-full lg:order-1 order-last">
                        {/* Decorative abstract blob behind image */}
                        <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#7f13ec]/10 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
                        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl mix-blend-multiply"></div>

                        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gray-100 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                            <div
                                className="h-full w-full bg-cover bg-center min-h-[500px]"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPkEDS9UYNT8AFEzQefZRM-KQtdB276XjB0ZO_Ip8motDYQPA-cpBuFgIQjfZOBiuGsxKgcpm_De_reyymUMOx5jxc701BCkfR8bRMdJANailKz5yZQ0I_scFTONK_dAygcm721vV_HcqyT9HzYkxzbl0k63DTI-U9FNopw_pe9-rHNe5yUnQYzHaj6kaI59CWQxNE_bC32pPpCzlCeEEYeFZk3ICFlz41rG3GFly0DCRabMS_8uq2uZHs1_cajUz1E9RqeMOoF7E")' }}
                                role="img"
                                aria-label="Abstract 3D composition with floating purple geometric shapes"
                            >
                            </div>

                            {/* Floating Card Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-[#7f13ec]/10 hidden sm:block">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7f13ec]/10 text-[#7f13ec]">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Dipercaya oleh Para Pemimpin</p>
                                        <p className="text-xs text-gray-500">Lebih dari 500+ perusahaan berkembang bersama kami.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex flex-col gap-10 lg:order-2 order-first">
                        {/* Header */}
                        <div className="flex flex-col gap-4">
                            <span className="w-fit rounded-full bg-[#7f13ec]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#7f13ec]">
                                Mengapa Memilih Kami
                            </span>
                            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:leading-tight">
                                Membangun masa depan,<br /> <span className="text-[#7f13ec]">bersama.</span>
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-600 max-w-lg">
                                Kami menggabungkan inovasi dengan keandalan untuk memberikan hasil yang berarti. Temukan mengapa para pemimpin industri mempercayai platform kami.
                            </p>
                        </div>

                        {/* Value Propositions List */}
                        <div className="flex flex-col gap-8">
                            {/* Item 01 */}
                            <div className="group flex gap-5">
                                <div className="flex-shrink-0">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7f13ec]/10 text-[#7f13ec] transition-colors group-hover:bg-[#7f13ec] group-hover:text-white">
                                        <span className="font-bold text-lg">01</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Teknologi Inovatif</h3>
                                    <p className="text-base leading-relaxed text-gray-600">
                                        Memanfaatkan teknologi terbaru untuk memastikan kecepatan dan skalabilitas bagi kebutuhan Anda yang terus berkembang.
                                    </p>
                                </div>
                            </div>

                            {/* Item 02 */}
                            <div className="group flex gap-5">
                                <div className="flex-shrink-0">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7f13ec]/10 text-[#7f13ec] transition-colors group-hover:bg-[#7f13ec] group-hover:text-white">
                                        <span className="font-bold text-lg">02</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Dukungan Khusus</h3>
                                    <p className="text-base leading-relaxed text-gray-600">
                                        Akses 24/7 ke tim ahli kami kapan pun Anda membutuhkan bantuan, memastikan tanpa downtime.
                                    </p>
                                </div>
                            </div>

                            {/* Item 03 */}
                            <div className="group flex gap-5">
                                <div className="flex-shrink-0">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7f13ec]/10 text-[#7f13ec] transition-colors group-hover:bg-[#7f13ec] group-hover:text-white">
                                        <span className="font-bold text-lg">03</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Keamanan Teruji</h3>
                                    <p className="text-base leading-relaxed text-gray-600">
                                        Enkripsi tingkat perusahaan dan protokol kepatuhan yang menjaga data sensitif Anda tetap aman.
                                    </p>
                                </div>
                            </div>

                            {/* Item 04 */}
                            <div className="group flex gap-5">
                                <div className="flex-shrink-0">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7f13ec]/10 text-[#7f13ec] transition-colors group-hover:bg-[#7f13ec] group-hover:text-white">
                                        <span className="font-bold text-lg">04</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Jangkauan Global</h3>
                                    <p className="text-base leading-relaxed text-gray-600">
                                        Infrastruktur yang dioptimalkan untuk latensi rendah di seluruh dunia, membawa Anda lebih dekat ke pengguna.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <button className="flex items-center gap-2 rounded-full bg-[#7f13ec] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#7f13ec]/25 transition-all hover:bg-[#7f13ec]/90 hover:shadow-xl hover:shadow-[#7f13ec]/40 focus:outline-none focus:ring-2 focus:ring-[#7f13ec] focus:ring-offset-2">
                                <span>Mulai Sekarang</span>
                                <ArrowRight className="w-4 h-4 font-bold" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
