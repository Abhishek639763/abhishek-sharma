import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Learning</h2>
            <p className="text-xl text-gray-600">
              Continuous learning and skill development in software development
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="relative space-y-12">
              {/* Bachelor's Degree */}
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <GraduationCap size={24} />
                  </div>
                </div>
                
                <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Bachelor of Information Technology
                      </h3>
                      <div className="flex items-center text-blue-600 font-semibold mb-2">
                        <BookOpen size={18} className="mr-2" />
                        Chaudhary Charan Singh University, Meerut, UP
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-1">
                      <div className="flex items-center text-gray-600 font-medium">
                        2025
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Foundation in Information Technology, Software Engineering, and Computer Science principles.
                  </p>
                </div>
              </div>

              {/* Intermediate */}
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <BookOpen size={24} />
                  </div>
                </div>
                
                <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Intermediate
                    </h3>
                    <div className="flex items-center text-green-600 font-semibold mb-2">
                      <BookOpen size={18} className="mr-2" />
                      Chandausi Inter College, Chandausi, UP
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end space-y-1 mb-4">
                      <div className="flex items-center text-gray-600 font-medium">
                        2021
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;