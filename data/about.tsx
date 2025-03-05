import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Card } from "@/components/ui/card";

const AboutMe = () => {
  const aboutMeContent = [
    {
      title: "Technical Expertise",
      description: "Senior Software Engineer with extensive backend development experience and solid knowledge of frontend technologies.",
      content: `I'm a **Senior Software Engineer** with extensive backend development experience and comprehensive knowledge of frontend technologies. My core expertise lies in backend development, where I've designed and optimized robust, efficient, and scalable architectures for various enterprise applications.`,
      sector: "Backend Development"
    },
    {
      title: "Versatility",
      description: "Passionate about frontend work, using technologies like Flutter, Angular, and React to create attractive and functional user interfaces.",
      content: `I also have a strong passion for frontend development, using technologies like **Flutter**, **Angular**, and **React** to create engaging and functional user interfaces. I'm open to **freelance collaborations and short-term projects**, where I can contribute my expertise in mobile application development, websites, and custom software solutions.`,
      sector: "Frontend Development"
    },
    {
      title: "Problem-Solving Approach",
      description: "Driven by the challenge of solving complex problems and developing technological solutions that exceed client expectations.",
      content: `I'm driven by the challenge of solving complex problems and developing technological solutions that not only meet client requirements but exceed their expectations. If you're looking for a professional who combines technical knowledge with a creative vision to take your project to the next level, feel free to contact me.`,
      sector: "Problem Solving"
    }
  ];

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
      {aboutMeContent.map((section, index) => (
        <Card
          key={index}
          className="group relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="relative p-6 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {section.title}
              </h3>
            </div>

            <div className="flex-grow mb-6">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                <ReactMarkdown>
                  {section.content}
                </ReactMarkdown>
              </p>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-800">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {section.sector}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AboutMe;
