'use client';

import React from 'react';

const ExperienceItem = ({ year, title, company, description, isLast }: { year: string, title: string, company: string, description: string, isLast?: boolean }) => (
    <div className="flex gap-12 group">
        <div className="flex flex-col items-center">
            <div className={`size-5 rounded-full transition-transform duration-300 border-4 border-white ${!isLast ? 'bg-primary group-hover:scale-125 shadow-[0_0_20px_rgba(127,13,242,0.6)]' : 'bg-gray-200 group-hover:bg-primary transition-colors'}`}></div>
            {!isLast && <div className="w-px h-full mt-4 bg-gradient-to-b from-primary to-gray-200"></div>}
        </div>
        <div className={!isLast ? "pb-16" : ""}>
            <span className={`${!isLast ? "text-primary" : "text-gray-400"} font-bold text-sm tracking-[0.2em] uppercase mb-2 inline-block`}>{year}</span>
            <h4 className="text-3xl font-bold mt-1 tracking-tight">{title}</h4>
            <p className="font-semibold text-gray-500 mb-6">{company}</p>
            <p className="leading-relaxed text-gray-700 text-lg">{description}</p>
        </div>
    </div>
);

const WorkExperience = () => {
    return (
        <section className="py-32">
            <h2 className="text-4xl font-bold mb-16 text-center">My Journey</h2>
            <div className="max-w-3xl mx-auto space-y-12">
                <ExperienceItem
                    year="2022 - Present"
                    title="Senior Product Designer"
                    company="TechNova Solutions"
                    description="Leading the design system architecture for a global fintech ecosystem, focusing on high-fidelity prototyping and immersive user flows."
                />
                <ExperienceItem
                    year="2020 - 2022"
                    title="Frontend Engineer"
                    company="Pulse Digital Agency"
                    description="Engineered performance-critical web applications for Fortune 500 clients, leveraging advanced React patterns and motion libraries."
                />
                <ExperienceItem
                    year="2018 - 2020"
                    title="Junior Web Developer"
                    company="StartUp Inc."
                    description="Crafted creative marketing experiences and interactive landing pages, bridging the gap between aesthetic design and functional code."
                    isLast={true}
                />
            </div>
        </section>
    );
};

export default WorkExperience;
