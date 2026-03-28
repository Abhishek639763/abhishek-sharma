import React from 'react';
import { MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600">
              Building expertise through hands-on development experience
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="relative">
              {/* Experience Item */}
              <div className="flex items-start space-x-8 mb-12">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <Building size={24} />
                  </div>
                </div>
                
                <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Java Developer Intern
                      </h3>
                      <div className="flex items-center text-blue-600 font-semibold mb-2">
                        <Building size={18} className="mr-2" />
                        Elevate Labs
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end space-y-1">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        August 2025 - September 2025
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        Bengaluru, Karnataka
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Worked on backend development and Java-based projects including task schedulers, 
                    REST APIs, and management systems. Gained hands-on experience with modern Java 
                    technologies and enterprise-level development practices.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Key Responsibilities & Achievements:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Developed Java backend applications with REST APIs using Spring Boot
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Implemented database operations using JDBC and MySQL
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Designed relational databases and performed CRUD operations
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          Applied OOP concepts, exception handling, and debugging techniques
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {['Spring Boot', 'JDBC', 'MySQL', 'REST APIs', 'Java'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Experience;