import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, ChevronRight, BookOpen } from "lucide-react";
import { artikels } from "@/data/artikels";

interface Props {
    params: Promise<{
        category: string;
    }>;
}

export default async function CategoryPage({ params }: Props) {
    const { category } = await params;

    // Filter artikel berdasarkan kategori (case-insensitive)
    const filteredArticles = artikels.filter(
        (article) => article.category.toLowerCase() === category.toLowerCase()
    );

    // Jika kategori tidak ditemukan
    if (filteredArticles.length === 0) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50/50 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Link */}
                <Link
                    href="/artikel"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-[#7f13ec] transition-colors mb-8 group font-semibold text-sm"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                    Semua Artikel
                </Link>

                {/* Header Section */}
                <div className="max-w-3xl mb-12">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#7f13ec]/10 text-xs font-bold uppercase tracking-wider text-[#7f13ec] mb-4">
                        Kategori: {category}
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-slate-900 tracking-tight capitalize mb-3">
                        Kumpulan Artikel <span className="bg-gradient-to-r from-[#7f13ec] to-indigo-650 bg-clip-text text-transparent">{category}</span>
                    </h1>
                    <p className="text-sm text-slate-500">
                        Menampilkan {filteredArticles.length} artikel di bawah kategori ini.
                    </p>
                </div>

                {/* Grid List */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/artikel/${article.category.toLowerCase()}/${article.slug}`}
                            className="group flex flex-col bg-white rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-[0_10px_35px_-5px_rgba(127,19,236,0.08)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                        >
                            {/* Visual Accent */}
                            <div className="h-2 bg-gradient-to-r from-[#7f13ec] to-indigo-500" />

                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#7f13ec] bg-violet-50 px-2.5 py-1 rounded">
                                            {article.category}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold text-slate-850 group-hover:text-[#7f13ec] transition-colors duration-200 line-clamp-2 md:leading-snug mb-3">
                                        {article.title}
                                    </h2>

                                    <p className="text-sm text-slate-650 line-clamp-3 mb-6 text-slate-600">
                                        {article.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {article.date}
                                    </span>
                                    <span className="flex items-center gap-1 text-sm font-bold text-[#7f13ec] group-hover:gap-2 transition-all duration-200">
                                        Baca Selengkapnya
                                        <ChevronRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </main>
    );
}