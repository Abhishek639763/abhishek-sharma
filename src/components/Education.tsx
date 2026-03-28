import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Education Background</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {educationData.map((edu: any, index: number) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
              >
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                    <p className="text-blue-600 font-semibold">{edu.school}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-400 mb-4 text-sm font-medium">
                  <Calendar size={16} className="mr-2" />
                  {edu.period}
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;