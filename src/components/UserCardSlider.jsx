import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const UserCardSlider = () => {
  const userData = [
    {
      id: "UX7891",
      name: "Alex Johnson",
      email: "alex.j@example.com",
      contact: "9123456780",
      skills: ["Figma", "UI Design", "Prototyping"]
    },
    {
      id: "DEV4562",
      name: "Sarah Williams",
      email: "sarah.w@example.com",
      contact: "8234567891",
      skills: ["React", "Node.js", "MongoDB"]
    },
    {
      id: "PM3698",
      name: "Michael Chen",
      email: "michael.c@example.com",
      contact: "7345678921",
      skills: ["Agile", "Scrum", "JIRA"]
    },
    {
      id: "DES1234",
      name: "Emily Parker",
      email: "emily.p@example.com",
      contact: "6456789123",
      skills: ["Photoshop", "Illustrator", "Branding"]
    },
    {
      id: "QA5678",
      name: "David Kim",
      email: "david.k@example.com",
      contact: "5567891234",
      skills: ["Testing", "Automation", "Selenium"]
    },
    {
      id: "DEV7890",
      name: "Jessica Lee",
      email: "jessica.l@example.com",
      contact: "4678912345",
      skills: ["Python", "Django", "ML"]
    },
    {
      id: "UX2345",
      name: "Daniel Brown",
      email: "daniel.b@example.com",
      contact: "3789123456",
      skills: ["User Research", "Wireframing", "UX Writing"]
    },
    {
      id: "DEV9012",
      name: "Olivia Wilson",
      email: "olivia.w@example.com",
      contact: "2891234567",
      skills: ["Java", "Spring Boot", "Microservices"]
    },
    {
      id: "MKT3456",
      name: "James Taylor",
      email: "james.t@example.com",
      contact: "1902345678",
      skills: ["SEO", "Content", "Social Media"]
    },
    {
      id: "DEV6789",
      name: "Sophia Martinez",
      email: "sophia.m@example.com",
      contact: "9012345678",
      skills: ["C#", ".NET", "Azure"]
    },
    {
      id: "DATA123",
      name: "Robert Garcia",
      email: "robert.g@example.com",
      contact: "8123456789",
      skills: ["SQL", "Tableau", "Big Data"]
    },
    {
      id: "UI7890",
      name: "Emma Davis",
      email: "emma.d@example.com",
      contact: "7234567890",
      skills: ["Animation", "Illustration", "3D Modeling"]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? userData.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === userData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-green-300 mb-8">Our Team</h1>
      
      <div className="relative w-full max-w-2xl">
       
        <button 
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-green-800 p-3 rounded-full shadow-lg hover:bg-purple-600 transition-all z-10"
        >
          <FiChevronLeft className="text-green-100 text-2xl" />
        </button>
       
        <div className="bg-green-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-green-500/20">
          <div className="p-8">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-green-300 font-mono">ID: {userData[currentIndex].id}</span>
                <h2 className="text-3xl font-bold text-white mt-2">{userData[currentIndex].name}</h2>
              </div>
              <div className="bg-green-600/20 text-green-300 px-4 py-1 rounded-full text-sm font-medium">
                PROFILE
              </div>
            </div>
            
            <div className="my-6 border-t border-green-700"></div>
            
            <div className="space-y-4 text-green-100">
              <div className="flex items-center">
                <span className="w-24 font-medium text-green-300">Email</span>
                <span>{userData[currentIndex].email}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 font-medium text-green-300">Contact</span>
                <span>{userData[currentIndex].contact}</span>
              </div>
            </div>
            
            <div className="my-6 border-t border-green-700"></div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {userData[currentIndex].skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <button 
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-green-800 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all z-10"
        >
          <FiChevronRight className="text-green-100 text-2xl" />
        </button>
      </div>
      
    
      <div className="flex gap-2 mt-8">
        {userData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-green-400 w-6' : 'bg-green-700'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default UserCardSlider;