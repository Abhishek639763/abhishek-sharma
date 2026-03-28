import React from 'react';
import { Code, Server, Database, Settings, Lightbulb, Cloud } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
  const { categories, proficiencies } = skillsData;

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      green: "bg-green-100 text-green-800 border-green-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200",
      cyan: "bg-cyan-100 text-cyan-800 border-cyan-200",
      red: "bg-red-100 text-red-800 border-red-200"
    };
    return colors[color] || colors.blue;
  };

  const getIcon = (category: string) => {
    switch (category) {
      case "Programming Languages": return <Code className="w-6 h-6" />;
      case "Frameworks & Libraries": return <Server className="w-6 h-6" />;
      case "Databases & Management": return <Database className="w-6 h-6" />;
      case "Tools & Platforms": return <Settings className="w-6 h-6" />;
      case "Cloud & Services": return <Cloud className="w-6 h-6" />;
      case "Professional Concepts": return <Lightbulb className="w-6 h-6" />;
      default: return <Code className="w-6 h-6" />;
    }
  };

  const getIconColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: "text-blue-600 bg-blue-50",
      green: "text-green-600 bg-green-50",
      purple: "text-purple-600 bg-purple-50",
      orange: "text-orange-600 bg-orange-50",
      cyan: "text-cyan-600 bg-cyan-50",
      red: "text-red-600 bg-red-50"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Technical Arsenal</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive deep-dive into the technical stack and architectural concepts I use to engineer robust, scalable solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {categories.map((category: any, index: number) => (
              <div
                key={index}
                className="bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 group"
              >
                <div className="flex items-start mb-8">
                  <div className={`p-4 rounded-2xl mr-5 transition-transform group-hover:scale-110 duration-500 ${getIconColor(category.color)}`}>
                    {getIcon(category.category)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.category}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill: string, skillIndex: number) => (
                    <span
                      key={skillIndex}
                      className={`px-5 py-2 rounded-xl text-sm font-semibold border transition-all duration-300 group-hover:border-blue-300 ${getColorClasses(category.color)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-white p-12 rounded-[2.5rem] shadow-xl shadow-gray-200/50">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center underline decoration-blue-500 decoration-wavy underline-offset-8">
              Skill Proficiency Mapping
            </h3>
            <div className="grid md:grid-cols-2 gap-10">
              {proficiencies.map((item: any, index: number) => (
                <div key={index} className="space-y-4 group">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-gray-900 font-bold block text-lg">{item.skill}</span>
                      <span className="text-xs text-gray-400 font-medium group-hover:text-blue-500 transition-colors uppercase tracking-widest">{item.details}</span>
                    </div>
                    <span className="text-blue-600 font-black text-xl">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden border border-gray-50">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out shadow-lg shadow-blue-100"
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
