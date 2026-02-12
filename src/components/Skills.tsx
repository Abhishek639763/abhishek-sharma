import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "JavaScript", "Core Java", "HTML", "XML", "CSS"],
      color: "blue"
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Spring Boot", "Spring MVC", "Spring JDBC", "Hibernate", "Servlets", "JavaFX", "JDBC", "JSP"],
      color: "green"
    },
    {
      category: "Tools & Platforms",
      skills: ["Eclipse", "IntelliJ IDEA", "VS Code", "PyCharm", "Maven", "Tomcat", "Git", "Postman", "JVM"],
      color: "purple"
    },
    {
      category: "Databases",
      skills: ["SQL", "MongoDB", "MySQL", "SQLite"],
      color: "orange"
    },
    {
      category: "Cloud & Services",
      skills: ["AWS", "Google Cloud Platform", "RESTful Web Services"],
      color: "cyan"
    },
    {
      category: "Concepts",
      skills: ["OOPs", "MVC Architecture", "DSA Basics", "API Development", "CRUD Operations"],
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      green: "bg-green-100 text-green-800 border-green-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200",
      cyan: "bg-cyan-100 text-cyan-800 border-cyan-200",
      red: "bg-red-100 text-red-800 border-red-200"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and the technologies I work with
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${getColorClasses(category.color)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency Bars */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Key Proficiencies
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { skill: "Java & Spring Boot", level: 90 },
                { skill: "Database Management", level: 85 },
                { skill: "REST API Development", level: 88 },
                { skill: "JavaScript & Frontend", level: 75 },
                { skill: "Problem Solving & DSA", level: 80 },
                { skill: "Version Control (Git)", level: 85 }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">{item.skill}</span>
                    <span className="text-gray-600">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;