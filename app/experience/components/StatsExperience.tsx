'use client';

import React from 'react';

const StatsExperience = () => {
    return (
        <section className="py-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="glass p-8 rounded-xl flex flex-col items-center justify-center text-center">
                    <h3 className="text-4xl font-bold mb-2">40+</h3>
                    <p className="text-sm uppercase tracking-widest font-bold">Projects</p>
                </div>
                <div className="glass-heavy border-primary/20 p-8 rounded-xl flex flex-col items-center justify-center text-center">
                    <h3 className="text-4xl font-bold mb-2">25+</h3>
                    <p className="text-sm uppercase tracking-widest font-bold">Clients</p>
                </div>
                <div className="glass p-8 rounded-xl flex flex-col items-center justify-center text-center">
                    <h3 className="text-4xl font-bold mb-2">12</h3>
                    <p className="text-sm uppercase tracking-widest font-bold">Awards</p>
                </div>
                <div className="glass-heavy border-primary/20 p-8 rounded-xl flex flex-col items-center justify-center text-center">
                    <h3 className="text-4xl font-bold mb-2">99%</h3>
                    <p className="text-sm uppercase tracking-widest font-bold">Satisfaction</p>
                </div>
            </div>
        </section>
    );
};

export default StatsExperience;
