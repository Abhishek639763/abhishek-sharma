import React, { useState } from 'react';
import { Github, ExternalLink, Code, Database, Smartphone, Calculator, Calendar, FileText, BookOpen, CreditCard, X, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const getIcon = (title: string) => {
    switch (title) {
      case "Online Quiz Application": return <Code className="w-6 h-6" />;
      case "Employee Management System": return <Database className="w-6 h-6" />;
      case "Todo Application": return <FileText className="w-6 h-6" />;
      case "Bank Account Simulation": return <CreditCard className="w-6 h-6" />;
      case "Notes Manager": return <BookOpen className="w-6 h-6" />;
      case "Library Management System": return <BookOpen className="w-6 h-6" />;
      case "Scientific Calculator": return <Calculator className="w-6 h-6" />;
      case "Doctor Appointment System": return <Calendar className="w-6 h-6" />;
      default: return <Code className="w-6 h-6" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my development skills through various Java applications and systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projectsData.map((project: any) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {getIcon(project.title)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs text-gray-400 self-center">+{project.technologies.length - 4} more</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-blue-600 font-semibold text-sm group-hover:underline">View Details</span>
                    <ChevronRight size={16} className="text-blue-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Details Modal */}
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
              <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              ></div>
              <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl">
                <div className="p-8 md:p-12">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-all"
                  >
                    <X size={24} />
                  </button>

                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                      {getIcon(selectedProject.title)}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedProject.technologies.map((tech: string) => (
                          <span key={tech} className="text-xs font-semibold px-2 py-1 bg-blue-50 text-blue-600 rounded uppercase tracking-wider">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3 underline decoration-blue-500 decoration-2 underline-offset-4">Project Overview</h4>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {selectedProject.detailedDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Detailed Features</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedProject.detailedFeatures.map((feature: string, index: number) => (
                          <div key={index} className="flex items-start">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                              <Code size={12} className="text-white" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex pt-6 border-t border-gray-100">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-3 bg-gray-900 hover:bg-blue-600 text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-gray-200 hover:shadow-blue-200 hover:-translate-y-1"
                      >
                        <Github size={20} className="mr-2" />
                        Explore Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mt-16">
            <a
              href="https://github.com/Abhishek639763"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-full font-bold transition-all duration-300"
            >
              <Github size={22} className="mr-3" />
              View Full Repository on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;