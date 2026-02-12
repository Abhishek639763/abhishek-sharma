import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-cyan-300">Abhishek</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Java Full Stack Developer & Problem Solver
            </p>
            <p className="text-lg mb-10 text-blue-200 max-w-2xl mx-auto">
              Passionate about building scalable backend systems and creating efficient solutions 
              using Spring Boot, REST APIs, and modern Java technologies.
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white hover:bg-white hover:text-blue-900 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          <div className="animate-fade-in-up animation-delay-600 flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Abhishek639763"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/abhishek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:abhishek@email.com"
              className="p-3 border border-white rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="animate-bounce">
            <a href="#about" className="inline-block">
              <ArrowDown size={32} className="text-cyan-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;