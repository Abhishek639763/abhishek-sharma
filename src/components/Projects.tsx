import React from 'react';
import { Github, ExternalLink, Code, Database, Smartphone, Calculator, Calendar, FileText, BookOpen, CreditCard } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Online Quiz Application",
      description: "A comprehensive web-based quiz platform with user authentication, question management, and real-time scoring. Features include timer functionality, multiple question types, and detailed result analysis.",
      icon: <Code className="w-6 h-6" />,
      github: "https://github.com/Abhishek639763/OnlineQuizApp.git",
      technologies: ["Java", "JSP", "Servlets", "MySQL", "HTML/CSS", "JavaScript"],
      features: ["User Authentication", "Timer Functionality", "Score Tracking", "Admin Panel"]
    },
    {
      id: 2,
      title: "Employee Management System",
      description: "A robust JDBC-based application for managing employee records with CRUD operations. Includes employee profile management, department allocation, and comprehensive reporting features.",
      icon: <Database className="w-6 h-6" />,
      github: "https://github.com/Abhishek639763/Employee-JDBC-App.git",
      technologies: ["Java", "JDBC", "MySQL", "Swing", "MVC Pattern"],
      features: ["CRUD Operations", "Search & Filter", "Report Generation", "Data Validation"]
    },
    {
      id: 3,
      title: "Todo Application",
      description: "A modern task management application with intuitive UI for organizing daily tasks. Features include task categorization, priority setting, due dates, and progress tracking.",
      icon: <FileText className="w-6 h-6" />,
      github: "https://github.com/Abhishek639763/ToDoApp.git",
      technologies: ["Java", "JavaFX", "SQLite", "CSS Styling"],
      features: ["Task Categorization", "Priority Levels", "Due Date Reminders", "Progress Tracking"]
    },
    {
      id: 4,
      title: "Bank Account Simulation",
      description: "A comprehensive banking system simulation with account management, transaction processing, and balance tracking. Implements secure authentication and transaction history.",
      icon: <CreditCard className="w-6 h-6" />,
      github: "https://github.com/Abhishek639763/Bank-Account-Simulation-System.git",
      technologies: ["Java", "OOPs", "File I/O", "Exception Handling"],
      features: ["Account Management", "Transaction Processing", "Balance Tracking", "Security Features"]
    },
    {
      id: 5,
      title: "Notes Manager",
      description: "A digital note-taking application with rich text editing capabilities. Features include note categorization, search functionality, and cloud synchronization for seamless access.",
      icon: <BookOpen className="w-6 h-6" />,
      github: "https://github.com/Abhishek639763/Notes-Manager.git",
      technologies: ["Java", "Swing", "File Handling", "Search Algorithms"],
      features: ["Rich Text Editor", "Category Management", "Search & Filter", "Export Options"]
    },
    {
      id: 6,
      title: "Library Management System",
      description: "A complete library automation system handling book inventory, member management, and lending operations. Includes fine calculation and overdue notifications.",
      icon: <BookOpen className="w-6 h-6" />,
      github: "https://github.com/Abhishek639763/LibraryManagementSystem-3.git",
      technologies: ["Java", "MySQL", "Swing", "JDBC", "MVC"],
      features: ["Book Inventory", "Member Management", "Issue/Return System", "Fine Calculation"]
    },
    {
      id: 7,
      title: "Scientific Calculator",
      description: "An advanced calculator application with scientific functions, memory operations, and history tracking. Features a clean, intuitive interface with keyboard shortcuts.",
      icon: <Calculator className="w-6 h-6" />,
      github: "https://github.com/Abhishek639763/Calculator.git",
      technologies: ["Java", "Swing", "Mathematical Libraries", "GUI Design"],
      features: ["Scientific Functions", "Memory Operations", "History Tracking", "Keyboard Shortcuts"]
    },
    {
      id: 8,
      title: "Doctor Appointment System",
      description: "A healthcare management system for scheduling appointments, managing patient records, and doctor availability. Includes notification system and appointment reminders.",
      icon: <Calendar className="w-6 h-6" />,
      github: "https://github.com/Abhishek639763/Doctor-Appointment-System.git",
      technologies: ["Java", "MySQL", "JavaFX", "Date/Time APIs"],
      features: ["Appointment Scheduling", "Patient Records", "Doctor Management", "Notification System"]
    }
  ];

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
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors duration-300"
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/Abhishek639763"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors duration-300"
            >
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;