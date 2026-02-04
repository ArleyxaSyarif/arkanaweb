'use client';

import { Database, FileJson, Layers, Box, Code2, Server, Globe, FileCode, AppWindow } from 'lucide-react';

export default function TechStack() {
    return (
        <section className="py-20 px-4 sm:px-10 bg-[#f7f6f8] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7f13ec]/20 to-transparent"></div>
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#140d1b] mb-4">Didukung oleh Teknologi Modern</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Kami menggunakan alat dan kerangka kerja terbaru untuk memastikan website Anda siap untuk masa depan dan secepat kilat.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Tech Item 1 */}
                    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-gray-100 hover:border-[#7f13ec]/50 hover:shadow-[0_0_10px_rgba(127,19,236,0.2)] transition-all group">
                        <div className="text-4xl mb-4 text-gray-400 group-hover:text-[#61DAFB] transition-colors">
                            <Code2 className="w-12 h-12" />
                        </div>
                        <span className="font-bold text-[#140d1b] group-hover:text-[#7f13ec]">React</span>
                    </div>
                    {/* Tech Item 2 */}
                    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-gray-100 hover:border-[#7f13ec]/50 hover:shadow-[0_0_10px_rgba(127,19,236,0.2)] transition-all group">
                        <div className="text-4xl mb-4 text-gray-400 group-hover:text-black transition-colors">
                            <Layers className="w-12 h-12" />
                        </div>
                        <span className="font-bold text-[#140d1b] group-hover:text-[#7f13ec]">Next.js</span>
                    </div>
                    {/* Tech Item 3 */}
                    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-gray-100 hover:border-[#7f13ec]/50 hover:shadow-[0_0_10px_rgba(127,19,236,0.2)] transition-all group">
                        <div className="text-4xl mb-4 text-gray-400 group-hover:text-[#3178C6] transition-colors">
                            <FileJson className="w-12 h-12" />
                        </div>
                        <span className="font-bold text-[#140d1b] group-hover:text-[#7f13ec]">TypeScript</span>
                    </div>
                    {/* Tech Item 4 */}
                    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-gray-100 hover:border-[#7f13ec]/50 hover:shadow-[0_0_10px_rgba(127,19,236,0.2)] transition-all group">
                        <div className="text-4xl mb-4 text-gray-400 group-hover:text-[#38B2AC] transition-colors">
                            <Box className="w-12 h-12" />
                        </div>
                        <span className="font-bold text-[#140d1b] group-hover:text-[#7f13ec]">Tailwind CSS</span>
                    </div>
                    {/* Tech Item 5 */}
                    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-gray-100 hover:border-[#7f13ec]/50 hover:shadow-[0_0_10px_rgba(127,19,236,0.2)] transition-all group">
                        <div className="text-4xl mb-4 text-gray-400 group-hover:text-[#339933] transition-colors">
                            <Server className="w-12 h-12" />
                        </div>
                        <span className="font-bold text-[#140d1b] group-hover:text-[#7f13ec]">Node.js</span>
                    </div>
                    {/* Tech Item 6 */}
                    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-gray-100 hover:border-[#7f13ec]/50 hover:shadow-[0_0_10px_rgba(127,19,236,0.2)] transition-all group">
                        <div className="text-4xl mb-4 text-gray-400 group-hover:text-[#FF6C37] transition-colors">
                            <Globe className="w-12 h-12" />
                        </div>
                        <span className="font-bold text-[#140d1b] group-hover:text-[#7f13ec]">REST APIs</span>
                    </div>
                    {/* Tech Item 7 */}
                    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-gray-100 hover:border-[#7f13ec]/50 hover:shadow-[0_0_10px_rgba(127,19,236,0.2)] transition-all group">
                        <div className="text-4xl mb-4 text-gray-400 group-hover:text-purple-500 transition-colors">
                            <Database className="w-12 h-12" />
                        </div>
                        <span className="font-bold text-[#140d1b] group-hover:text-[#7f13ec]">PostgreSQL</span>
                    </div>
                    {/* Tech Item 8: Laravel */}
                    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-gray-100 hover:border-[#7f13ec]/50 hover:shadow-[0_0_10px_rgba(127,19,236,0.2)] transition-all group">
                        <div className="text-4xl mb-4 text-gray-400 group-hover:text-[#FF2D20] transition-colors">
                            <AppWindow className="w-12 h-12" />
                        </div>
                        <span className="font-bold text-[#140d1b] group-hover:text-[#7f13ec]">Laravel</span>
                    </div>
                    {/* Tech Item 9: PHP */}
                    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-gray-100 hover:border-[#7f13ec]/50 hover:shadow-[0_0_10px_rgba(127,19,236,0.2)] transition-all group">
                        <div className="text-4xl mb-4 text-gray-400 group-hover:text-[#777BB4] transition-colors">
                            <FileCode className="w-12 h-12" />
                        </div>
                        <span className="font-bold text-[#140d1b] group-hover:text-[#7f13ec]">PHP</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
