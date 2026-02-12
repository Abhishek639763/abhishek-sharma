import React from 'react';
import { Award, Users, Cloud, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Google Developers Group (GDG) Tech Head",
      organization: "SCRIET",
      description: "Leading technical initiatives and organizing developer events, workshops, and hackathons. Mentoring students in modern technologies and fostering a collaborative learning environment.",
      color: "blue",
      highlights: ["Technical Leadership", "Event Management", "Mentorship", "Community Building"]
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "National Social Summit 2024",
      organization: "IIT Roorkee",
      description: "Participated in the prestigious National Social Summit at IIT Roorkee, engaging with industry leaders and fellow developers on technology's role in social impact and innovation.",
      color: "green",
      highlights: ["Industry Networking", "Social Impact Tech", "Innovation Discussions", "Professional Development"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AWS Solutions Architecture Job Simulation",
      organization: "Amazon Web Services",
      description: "Completed comprehensive AWS job simulation covering cloud architecture, scalability solutions, and best practices for enterprise-level cloud deployments.",
      color: "orange",
      highlights: ["Cloud Architecture", "Scalability Design", "AWS Services", "Best Practices"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
        accent: "bg-blue-500"
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-200",
        accent: "bg-green-500"
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        border: "border-orange-200",
        accent: "bg-orange-500"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional accomplishments, leadership roles, and continuous learning milestones
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const colorClasses = getColorClasses(achievement.color);
              return (
                <div
                  key={index}
                  className={`bg-white border ${colorClasses.border} rounded-xl p-8 hover:shadow-xl transition-all duration-300 group`}
                >
                  <div className={`w-16 h-16 ${colorClasses.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={colorClasses.text}>
                      {achievement.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  
                  <p className={`font-semibold mb-4 ${colorClasses.text}`}>
                    {achievement.organization}
                  </p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900">Key Highlights:</h4>
                    <div className="space-y-2">
                      {achievement.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center">
                          <div className={`w-2 h-2 ${colorClasses.accent} rounded-full mr-3 flex-shrink-0`}></div>
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">8+</div>
                <p className="text-blue-100">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1+</div>
                <p className="text-blue-100">Industry Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <p className="text-blue-100">Technologies Mastered</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">3</div>
                <p className="text-blue-100">Major Achievements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;