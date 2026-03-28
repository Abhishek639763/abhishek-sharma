import React from 'react';
import { Code, Database, Server, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate Java developer with expertise in full-stack development, 
              focused on creating efficient and scalable solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                My Journey
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I'm a dedicated Java Full Stack Developer with a strong foundation in backend 
                technologies and a passion for problem-solving. My experience spans across 
                building REST APIs, database management, and developing comprehensive web applications.
              </p>
              <p className="text-gray-600 leading-relaxed">
                During my time at Elevate Labs, I worked on backend development projects, 
                creating REST APIs and management systems using Spring Boot, 
                JDBC, and MySQL. I've gained hands-on experience in database design, CRUD operations, 
                debugging, and deployment.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm continuously learning and staying updated with the latest technologies in 
                the Java ecosystem, with a particular interest in cloud technologies and 
                modern development practices.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="text-blue-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Clean Code</h4>
                <p className="text-gray-600 text-sm">
                  Writing maintainable and efficient code following best practices
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="text-green-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Database Design</h4>
                <p className="text-gray-600 text-sm">
                  Expertise in SQL, MySQL, and efficient database design
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Server className="text-purple-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Backend Systems</h4>
                <p className="text-gray-600 text-sm">
                  Building scalable APIs and microservices with Spring Boot
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-orange-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Problem Solving</h4>
                <p className="text-gray-600 text-sm">
                  Strong analytical skills and DSA knowledge for efficient solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;