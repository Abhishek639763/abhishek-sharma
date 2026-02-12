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
              {/* Education Item */}
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <GraduationCap size={24} />
                  </div>
                </div>
                
                <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Java Full Stack Development
                      </h3>
                      <div className="flex items-center text-green-600 font-semibold mb-2">
                        <BookOpen size={18} className="mr-2" />
                        Apna College
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive course covering full-stack Java development including Spring Framework, 
                    REST APIs, database management, and modern web development practices.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Key Learning Areas:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Core Java & OOP Concepts</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Spring Boot & Spring MVC</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Database Design & SQL</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">REST API Development</span>
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Frontend Technologies</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Data Structures & Algorithms</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Version Control (Git)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">Software Development Lifecycle</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'HTML/CSS', 'DSA', 'Git'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* DSA Focus */}
              <div className="flex items-start space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <BookOpen size={24} />
                  </div>
                </div>
                
                <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Data Structures & Algorithms
                    </h3>
                    <div className="flex items-center text-purple-600 font-semibold mb-2">
                      <BookOpen size={18} className="mr-2" />
                      Apna College - Specialized Track
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Focused study on fundamental data structures and algorithms, essential for 
                    problem-solving and writing efficient code. Covers time complexity analysis 
                    and optimization techniques.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    {['Arrays & Strings', 'Linked Lists', 'Stacks & Queues', 'Trees & Graphs', 'Sorting Algorithms', 'Search Techniques'].map((topic) => (
                      <div key={topic} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{topic}</span>
                      </div>
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

export default Education;