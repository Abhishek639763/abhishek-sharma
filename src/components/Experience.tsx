import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight underline decoration-blue-500 decoration-wavy underline-offset-8">Professional Journey</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A detailed look at my professional experience and the impact I've made at various organizations.
            </p>
          </div>

          <div className="space-y-12">
            {experienceData.map((exp: any, index: number) => (
              <div
                key={index}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10">
                  <div className="flex items-start mb-6 md:mb-0">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-500 flex-shrink-0 shadow-lg shadow-blue-50">
                      <Briefcase size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-bold text-gray-500 uppercase tracking-widest flex items-center">
                        <span className="text-blue-500 mr-2">@</span> {exp.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-3 md:text-right">
                    <div className="inline-flex items-center text-gray-400 bg-gray-50 px-4 py-1.5 rounded-full text-sm font-semibold border border-gray-100 md:justify-end">
                      <Calendar size={16} className="mr-2 text-blue-400" />
                      {exp.period}
                    </div>
                    <div className="inline-flex items-center text-gray-400 md:justify-end text-sm font-medium">
                      <MapPin size={16} className="mr-2 text-red-400" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                  <div className="lg:col-span-3">
                    <h4 className="text-xs font-black text-blue-500 uppercase tracking-[0.2em] mb-4">Core Responsibilities</h4>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium italic">
                      {exp.description}
                    </p>
                    <div className="space-y-4">
                      {exp.achievements.map((achievement: string, i: number) => (
                        <div key={i} className="flex items-start group/item">
                          <div className="w-6 h-6 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all duration-300">
                            <ChevronRight size={14} />
                          </div>
                          <span className="text-gray-700 text-lg leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100">
                      <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Technologies Utilized</h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="px-5 py-2.5 bg-white text-gray-700 text-sm font-bold rounded-2xl border border-gray-200 shadow-sm hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default Experience;