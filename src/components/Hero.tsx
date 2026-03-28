import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-white text-gray-900 relative overflow-hidden flex items-center"
    >
      {/* Background Pattern - Subtle light circles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="text-blue-500">Abhishek Sharma</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-6">
              Software Engineer | Java Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
              A passionate and detail-oriented Java Developer seeking to apply knowledge of Java, 
              backend development, and database management. Proficient in building reliable and scalable applications using 
              Spring Boot, JDBC, and MySQL. Eager to learn new technologies and contribute to real-world projects.
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-300 flex flex-wrap gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg shadow-lg shadow-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Mail size={20} className="mr-2" />
              Get In Touch
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center px-8 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300"
            >
              <Download size={20} className="mr-2" />
              Download CV
            </a>
          </div>

          <div className="animate-fade-in-up animation-delay-600 flex space-x-4">
            <a
              href="https://github.com/Abhishek639763"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-50 text-gray-600 border border-gray-200 rounded-full hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 shadow-sm"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/abhishek639"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-50 text-gray-600 border border-gray-200 rounded-full hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 shadow-sm"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:abhishekupadhyay639763@gmail.com"
              className="p-3 bg-gray-50 text-gray-600 border border-gray-200 rounded-full hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 shadow-sm"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;