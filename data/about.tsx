import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Code, Briefcase, Zap } from 'lucide-react';
import { Card } from "@/components/ui/card";

const AboutMe = () => {
  const aboutMeContent = [
    {
      icon: <Code className="h-6 w-6 text-blue-500" />,
      title: "Technical Expertise",
      content: `I am a **Senior Software Engineer** with extensive experience in backend development and a comprehensive understanding of frontend technologies. My core expertise lies in backend development, where I have designed and optimized robust, efficient, and scalable architectures.`
    },
    {
      icon: <Briefcase className="h-6 w-6 text-green-500" />,
      title: "Versatility",
      content: `I also have a strong passion for frontend work, utilizing technologies like **Flutter**, **Angular**, and **React** to create engaging and functional user interfaces. I am open to **freelance collaborations and short-term projects**, where I can contribute my expertise in mobile app development, websites, and custom software solutions.`
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "Approach",
      content: `I am driven by the challenge of solving complex problems and developing technological solutions that not only meet client requirements but exceed their expectations. If you're looking for a professional who combines technical knowledge with a creative vision to take your project to the next level, feel free to reach out.`
    }
  ];

  return (
    <div className="space-y-4">
      {aboutMeContent.map((section, index) => (
        <Card key={index} className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <div className="flex items-center mb-2">
            {section.icon}
            <h3 className="text-lg font-bold ml-4">{section.title}</h3>
          </div>
          <ReactMarkdown className="text-gray-600 dark:text-gray-300">
            {section.content}
          </ReactMarkdown>
        </Card>
      ))}
    </div>
  );
};

export default AboutMe;
