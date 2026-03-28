import React from 'react';
import { Award, Star, Trophy, ExternalLink } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 font-bold text-gray-900 mb-4 tracking-tight underline decoration-blue-500 decoration-wavy underline-offset-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievementsData.map((item: any, index: number) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-200/20 transition-all duration-500 group overflow-hidden relative"
              >
                {/* Decorative background icon */}
                <div className="absolute -bottom-6 -right-6 text-blue-50/50 group-hover:text-blue-100/50 transition-colors duration-500 -rotate-12">
                  <Award size={160} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-500">
                      <Trophy size={28} />
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-2 border border-blue-100">
                        {item.period}
                      </div>
                      <p className="text-sm font-bold text-gray-400 block tracking-widest uppercase">{item.organization}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg font-medium italic">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.highlights.map((highlight: string, i: number) => (
                      <span key={i} className="inline-flex items-center px-4 py-1.5 bg-gray-50 text-gray-600 text-xs font-bold rounded-lg border border-gray-100 group-hover:border-blue-200 group-hover:text-blue-600 transition-all duration-300">
                        <Star size={12} className="mr-2 text-yellow-500" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;