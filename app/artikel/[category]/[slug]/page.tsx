import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock, Share2, CornerDownRight } from "lucide-react";
import { artikels } from "@/data/artikels";

export default async function DetailPage({
    params,
}: {
    params: Promise<{
        category: string;
        slug: string;
    }>;
}) {
    const { category, slug } = await params;

    // Temukan artikel berdasarkan kategori dan slug (secara case-insensitive)
    const article = artikels.find(
        (item) =>
            item.category.toLowerCase() === category.toLowerCase() &&
            item.slug.toLowerCase() === slug.toLowerCase()
    );

    if (!article) {
        notFound();
    }

    // Konten simulasi jika isi file data masih dummy "..."
    const fullContent =
        article.content === "..."
            ? `Artikel belum tersedia.`
            : article.content;

    // Split content by newlines to render paragraphs nicely
    const paragraphs = fullContent.split("\n\n");

    return (
        <main className="min-h-screen bg-slate-50/50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Link */}
                <Link
                    href="/artikel"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-[#7f13ec] transition-colors mb-8 group font-semibold text-sm"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                    Kembali ke Artikel
                </Link>

                {/* Article Container */}
                <article className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">

                    {/* Header Graphic/Aura */}
                    <div className="h-4 bg-gradient-to-r from-[#7f13ec] via-indigo-600 to-violet-500" />

                    <div className="px-6 py-10 sm:p-12">

                        {/* Category / Tag */}
                        <span className="inline-flex items-center px-3 py-1 rounded bg-violet-50 border border-violet-100 text-xs font-bold uppercase tracking-wider text-[#7f13ec] mb-6">
                            {article.category}
                        </span>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight mb-6">
                            {article.title}
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-slate-600 italic border-l-4 border-[#7f13ec] pl-4 mb-8">
                            {article.description}
                        </p>

                        {/* Author and Date Meta */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-100">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-9 h-9 rounded-full bg-[#7f13ec]/10 flex items-center justify-center text-[#7f13ec]">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Penulis</p>
                                        <p className="text-sm font-semibold text-slate-700">ArkanaWeb Team</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                        <Calendar className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Diterbitkan</p>
                                        <p className="text-sm font-semibold text-slate-700">{article.date}</p>
                                    </div>
                                </div>

                                <div className="hidden sm:flex items-center gap-2">
                                    <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Durasi</p>
                                        <p className="text-sm font-semibold text-slate-700">3 mnt baca</p>
                                    </div>
                                </div>
                            </div>

                            {/* Share Icon */}
                            <button
                                className="p-2.5 rounded-full border border-slate-200 text-slate-500 hover:text-[#7f13ec] hover:border-[#7f13ec] hover:bg-violet-50/50 transition-all duration-305 cursor-pointer"
                                title="Bagikan Artikel"
                            >
                                <Share2 className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Body Content */}
                        <div className="prose prose-indigo max-w-none text-slate-705 leading-relaxed text-base sm:text-lg space-y-6 text-slate-700">
                            {paragraphs.map((para, index) => (
                                <p key={index} className="mb-4">
                                    {para}
                                </p>
                            ))}
                        </div>

                        {/* CTA Widget inside Article */}
                        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50/50 border border-violet-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7f13ec]/10 to-indigo-55/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />

                            <div className="relative z-10">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#7f13ec]/10 text-xs font-bold text-[#7f13ec] mb-3">
                                    <CornerDownRight className="w-3.5 h-3.5" />
                                    Butuh Solusi Digital?
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    Ingin memiliki website profesional seperti ini?
                                </h3>
                                <p className="text-sm text-slate-650 mb-5 max-w-xl text-slate-600">
                                    Konsultasikan kebutuhan pembuatan website, landing page, atau aplikasi premium Anda bersama tim ahli ArkanaWeb secara gratis.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-full bg-[#7f13ec] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-[#7f13ec]/20 hover:shadow-[#7f13ec]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                                >
                                    Hubungi Kami
                                </Link>
                            </div>
                        </div>

                    </div>
                </article>
            </div>
        </main>
    );
}