'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function PortfolioPreview() {
    return (
        <section className="w-full max-w-[1280px] px-4 md:px-10 py-16 flex flex-col">
            <div className="flex flex-col max-w-[960px] self-center w-full">
                <div className="flex items-center justify-between pb-6 pt-5 px-1">
                    <h2 className="text-[#140d1b] text-[28px] font-bold leading-tight tracking-[-0.015em]">Transformasi Terbaru</h2>
                    <div className="hidden sm:flex gap-2">
                        <button className="size-10 rounded-full border border-[#dbcfe7] flex items-center justify-center hover:bg-[#7f13ec] hover:border-[#7f13ec] hover:text-white transition-all text-[#140d1b]">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button className="size-10 rounded-full border border-[#dbcfe7] flex items-center justify-center hover:bg-[#7f13ec] hover:border-[#7f13ec] hover:text-white transition-all text-[#140d1b]">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Project 1 */}
                    <div className="group flex flex-col gap-4 cursor-pointer">
                        <div className="overflow-hidden rounded-xl aspect-[4/3] bg-gray-200 relative">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCi99CJshZqWBXlFNhrjGLjSxA-YwIdzThtr1tPWCttOOdDzUfMIi4eVFqNGTqNMLxz6SkH1Y336S-mEutB_kqb1u6K0ib_HSKzzsYVmaknB2iCrr6TEk_1I5VJfd_QAwYPAASNMOYWYjGbTRach_Mvx3VeJGvmCaiJJOt6lF1IL-XtQLF4Ygxj1M_AN1ZRH_Fh7cN9rZL8UgtPA_ryh6ndG2-iL43QM8NLs2evO7GKfjyHHm4UHTtCpJoF9u4EaYLptE3_LYqZWXw')" }}></div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                        </div>
                        <div className="flex flex-col px-1">
                            <h3 className="text-[#140d1b] text-lg font-bold group-hover:text-[#7f13ec] transition-colors">FinTech Corp Global</h3>
                            <p className="text-[#734c9a] text-sm">Layanan Keuangan • Rebranding</p>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="group flex flex-col gap-4 cursor-pointer">
                        <div className="overflow-hidden rounded-xl aspect-[4/3] bg-gray-200 relative">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-3q6ll9zLdVRP-20L4VZig6HdGdGrYcmg_LsBPaKxqmIQCLiJ4ysLuqro2uMYmI5ldxYcQ5Q2_xEUC_jXrVR91cndVokgYjrn3md0c_BXN27fjcf6NIe8GWgvcHLTHnIx_1cBJ0A3IyH9kiFSjJoo3ii1NXWJYtmNyzz1y53M4DLB_xT5OWlfzaj8N-KIz-zfLCZqbRiVUJk4wDYvAGpwrQ3joLdgaa8CLMyGAhSlADyRu2WdsBMFjEAb1tMoQCTg7Bn-WXVLDY4')" }}></div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                        </div>
                        <div className="flex flex-col px-1">
                            <h3 className="text-[#140d1b] text-lg font-bold group-hover:text-[#7f13ec] transition-colors">GreenEnergy Ltd</h3>
                            <p className="text-[#734c9a] text-sm">Energi Terbarukan • Profil Perusahaan</p>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="group flex flex-col gap-4 cursor-pointer">
                        <div className="overflow-hidden rounded-xl aspect-[4/3] bg-gray-200 relative">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNeZIyRzO_Si3qB9867G-Kvz273qd-Xxm44plNj3w-465D1tr1r7Lb9bcy-VQKrSsb6DCn3B0GtVScllveqpM13g49NdcpQJipDt5n0zyTEOP1G4gkRvv-Rl6HajwtqruS3T2AuwFRkCJIGOGuPO-gMi-Vb1PJAYmcGc7qa5kVEnMOmAsEPPso0Fqo5Mq9OuvRWNk2hp3DFzXZ2XItJrGc_ckSO5sb7hDMVnNsEXvja6hPbJ9xFSi-YOrLIKQ4lMiUR0fufNoYNPM')" }}></div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                        </div>
                        <div className="flex flex-col px-1">
                            <h3 className="text-[#140d1b] text-lg font-bold group-hover:text-[#7f13ec] transition-colors">Urban Architects</h3>
                            <p className="text-[#734c9a] text-sm">Arsitektur • Situs Portofolio</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
