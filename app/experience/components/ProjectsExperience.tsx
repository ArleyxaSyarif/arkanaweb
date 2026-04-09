'use client';

import React from 'react';
import { projects } from '@/data/projects';
import { ArrowUpRight, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCard = ({ title, description, tags, image, delay, onPreview }: { title: string, description: string, tags: string[], image: string, delay?: string, onPreview: () => void }) => (
    <div className={`min-w-[550px] group relative animate-entrance ${delay || ''}`}>
        <div className="card-3d flex flex-col bg-white/50 backdrop-blur-md rounded-3xl border border-primary/10 shadow-xl overflow-hidden group">
            <div
                className="relative aspect-[16/10] overflow-hidden cursor-pointer"
                onClick={onPreview}
            >
                <img
                    alt={`${title} Project`}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                    src={image}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Eye className="text-white w-10 h-10 drop-shadow-lg" />
                </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onPreview();
                        }}
                        className="bg-transparent border-none p-0 outline-none hover:bg-transparent focus:ring-0 active:bg-transparent cursor-pointer"
                    >
                        <ArrowUpRight className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform w-8 h-8 hover:scale-110 block" />
                    </button>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
                <div className="mt-auto flex gap-3">
                    {tags.map((tag, i) => (
                        <span key={i} className="text-[10px] px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-bold uppercase tracking-wider">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const ProjectModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-white rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl animate-entrance">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/40 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>
                <div className="relative flex-grow overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="p-6 bg-white border-t border-gray-100">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex gap-2">
                        {project.tags.map((tag: string, i: number) => (
                            <span key={i} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectsExperience = () => {
    const [selectedProject, setSelectedProject] = React.useState<any>(null);


    // Duplicate for infinite scroll
    const allProjects = [...projects, ...projects];

    return (
        <section className="py-20 relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Selected <span className="text-primary">Works</span></h2>
                    <p className="max-w-md">A curated selection of digital products built with performance and aesthetics in mind.</p>
                </div>
            </div>
            <div className="relative group/carousel overflow-hidden">
                {/* Navigation Buttons */}
                <div className="absolute -top-16 right-0 flex gap-4 z-20">
                    <button className="size-12 rounded-full border border-primary/20 glass flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="size-12 rounded-full border border-primary/20 glass flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
                {/* Scrollable Container */}
                <div className="flex gap-8 pb-20 no-scrollbar snap-x snap-mandatory scroll-smooth">
                    <div className="animate-scroll gap-12 perspective-1000 flex">
                        {allProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                {...project}
                                onPreview={() => setSelectedProject(project)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default ProjectsExperience;
