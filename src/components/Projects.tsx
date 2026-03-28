import React, { useState } from 'react';
import { Github, ExternalLink, Code, Database, Smartphone, Calculator, Calendar, FileText, BookOpen, CreditCard, X, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Online Quiz Application",
      description: "A comprehensive web-based quiz platform with user authentication, question management, and real-time scoring. Features include timer functionality, multiple question types, and detailed result analysis.",
      detailedDescription: "The Online Quiz Application is a full-featured testing platform designed for educational institutions. It provides a secure environment for students to take assessments with features like automatic grading, time limits, and progress tracking. The admin dashboard allows instructors to manage question banks, categorize quizzes by subject, and view detailed performance analytics for every participant.",
      icon: <Code className="w-6 h-6" />,
      github: "https://github.com/Abhishek639763/OnlineQuizApp.git",
      technologies: ["Java", "JSP", "Servlets", "MySQL", "HTML/CSS", "JavaScript"],
      features: ["User Authentication", "Timer Functionality", "Score Tracking", "Admin Panel"],
      detailedFeatures: [
        "Secure student login and registration system",
        "Dynamic question loading from MySQL database",
        "Configurable time limits per quiz or per question",
        "Instant performance feedback and grade calculation",
        "Admin panel for question bank management and user monitoring",
        "Responsive design for mobile and desktop assessment"
      ]
    },
    {
      id: 2,
      title: "Employee Management System",
      description: "A robust JDBC-based application for managing employee records with CRUD operations. Includes employee profile management, department allocation, and comprehensive reporting features.",
      detailedDescription: "This enterprise-grade management system simplifies HR operations by centralizing employee data. Built using the MVC architecture, it ensures a clean separation of concerns, making the system highly maintainable. The application handles everything from recruitment details to department transfers and performance history, providing a unified view for managers and administrators.",
      icon: <Database className="w-6 h-6" />,
      github: "https://github.com/Abhishek639763/Employee-JDBC-App.git",
      technologies: ["Java", "JDBC", "MySQL", "Swing", "MVC Pattern"],
      features: ["CRUD Operations", "Search & Filter", "Report Generation", "Data Validation"],
      detailedFeatures: [
        "Full CRUD lifecycle management for employee records",
        "Advanced search capabilities across multiple data fields",
        "Department-wise employee categorization and reporting",
        "Input validation to ensure data integrity",
        "Seamless database connectivity using JDBC drivers",
        "User-friendly desktop interface using Java Swing"
      ]
    },
    {
      id: 3,
      title: "Todo Application",
      description: "A modern task management application with intuitive UI for organizing daily tasks. Features include task categorization, priority setting, due dates, and progress tracking.",
      detailedDescription: "A productivity-focused application designed to help users stay organized. Unlike simple todo lists, this application supports complex task hierarchies, priority-based sorting, and deadline reminders. The persistent storage ensures that tasks are always available across sessions, while the clean UI helps users focus on completion rather than management.",
      icon: <FileText className="w-6 h-6" />,
      github: "https://github.com/Abhishek639763/ToDoApp.git",
      technologies: ["Java", "JavaFX", "SQLite", "CSS Styling"],
      features: ["Task Categorization", "Priority Levels", "Due Date Reminders", "Progress Tracking"],
      detailedFeatures: [
        "Intuitive task creation with custom categories",
        "Priority-based sorting and color coding",
        "Deadline management with reminder features",
        "Persistent data storage using SQLite",
        "Modern and responsive UI built with JavaFX",
        "Dark mode support for better accessibility"
      ]
    },
    {
      id: 4,
      title: "Bank Account Simulation",
      description: "A comprehensive banking system simulation with account management, transaction processing, and balance tracking. Implements secure authentication and transaction history.",
      detailedDescription: "A complex simulation of core banking operations. This project demonstrates strong object-oriented design and secure data handling. It simulates the lifecycle of various account types (Savings, Current), handles deposits/withdrawals with concurrency awareness, and maintains a perfect audit trail through local file logs or database records.",
      icon: <CreditCard className="w-6 h-6" />,
      github: "https://github.com/Abhishek639763/Bank-Account-Simulation-System.git",
      technologies: ["Java", "OOPs", "File I/O", "Exception Handling"],
      features: ["Account Management", "Transaction Processing", "Balance Tracking", "Security Features"],
      detailedFeatures: [
        "Multiple account type support with unique logic",
        "Secure pin-based transaction verification",
        "Detailed transaction history and statement generation",
        "Robust exception handling for edge cases (e.g., overdraft)",
        "Persistent account data management",
        "Concurrent transaction safety implementations"
      ]
    },
    {
      id: 5,
      title: "Notes Manager",
      description: "A digital note-taking application with rich text editing capabilities. Features include note categorization, search functionality, and cloud synchronization for seamless access.",
      detailedDescription: "Notes Manager is designed for heavy users who need to organize large volumes of information. It features a hierarchical folder system, rich formatting options, and a powerful search engine that indexes note content. It serves as a personal knowledge base for developers and students alike.",
      icon: <BookOpen className="w-6 h-6" />,
      github: "https://github.com/Abhishek639763/Notes-Manager.git",
      technologies: ["Java", "Swing", "File Handling", "Search Algorithms"],
      features: ["Rich Text Editor", "Category Management", "Search & Filter", "Export Options"],
      detailedFeatures: [
        "Rich text formatting support (Bold, Italics, Lists)",
        "Instant full-text search across all notes",
        "Note categorization and tagging system",
        "Automatic autosave and version recovery",
        "Export notes to various formats (TXT, PDF)",
        "Clean, distraction-free writing environment"
      ]
    },
    {
      id: 6,
      title: "Library Management System",
      description: "A complete library automation system handling book inventory, member management, and lending operations. Includes fine calculation and overdue notifications.",
      detailedDescription: "This system automates the manual workflows of a library. It tracks the physical location of books, manages member accounts, and handles the entire lending/returning logic including automated fine calculations for late returns. It provides administrators with a powerful dashboard to monitor library health and circulation statistics.",
      icon: <BookOpen className="w-6 h-6" />,
      github: "https://github.com/Abhishek639763/LibraryManagementSystem-3.git",
      technologies: ["Java", "MySQL", "Swing", "JDBC", "MVC"],
      features: ["Book Inventory", "Member Management", "Issue/Return System", "Fine Calculation"],
      detailedFeatures: [
        "Searchable book inventory with availability status",
        "Student and staff member registration and profile management",
        "Automated due date tracking and fine generation",
        "Barcode/Unique-ID based issue and return system",
        "Detailed circulation reports and inventory audits",
        "Integrated MySQL database for large scale data handling"
      ]
    },
    {
      id: 7,
      title: "Scientific Calculator",
      description: "An advanced calculator application with scientific functions, memory operations, and history tracking. Features a clean, intuitive interface with keyboard shortcuts.",
      detailedDescription: "Beyond basic arithmetic, this calculator provides complex mathematical tools for engineering and scientific applications. It handles trigonometric, logarithmic, and power functions with high precision. The history tracking allows users to review and reuse previous calculations seamlessly.",
      icon: <Calculator className="w-6 h-6" />,
      github: "https://github.com/Abhishek639763/Calculator.git",
      technologies: ["Java", "Swing", "Mathematical Libraries", "GUI Design"],
      features: ["Scientific Functions", "Memory Operations", "History Tracking", "Keyboard Shortcuts"],
      detailedFeatures: [
        "Advanced scientific functions including Trig and Log",
        "Memory management (MC, MR, M+, M-)",
        "Running history log of all operations",
        "Keyboard-driven operation for high speed",
        "Precision handling for large and fractional numbers",
        "Customizable GUI themes and layouts"
      ]
    },
    {
      id: 8,
      title: "Doctor Appointment System",
      description: "A healthcare management system for scheduling appointments, managing patient records, and doctor availability. Includes notification system and appointment reminders.",
      detailedDescription: "Designed to clinical standards, this system manages the interaction between patients and healthcare providers. It features a real-time availability calendar for doctors, a patient medical history portal, and an automated notification system that reduces no-shows through timely reminders.",
      icon: <Calendar className="w-6 h-6" />,
      github: "https://github.com/Abhishek639763/Doctor-Appointment-System.git",
      technologies: ["Java", "MySQL", "JavaFX", "Date/Time APIs"],
      features: ["Appointment Scheduling", "Patient Records", "Doctor Management", "Notification System"],
      detailedFeatures: [
        "Real-time appointment booking with slot visibility",
        "Centralized patient medical records and visit history",
        "Doctor specialization and schedule management",
        "Automated reminders via email/SMS integration",
        "Pharmacy and prescription management support",
        "Admin billing and report generation tools"
      ]
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
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
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
                  
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
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
                      {selectedProject.icon}
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