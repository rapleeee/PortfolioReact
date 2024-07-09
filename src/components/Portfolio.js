import React from 'react';
import bridgecourse from "../assets/bridgecourse.png";
import sremporium from "../assets/sremporium.png";
import saraya from "../assets/saraya.png";

const projects = [
  { id: 1, image: bridgecourse, link: 'https://bridgecourse.vercel.app/', title: 'Bridge Course', description: 'A landing page online course.' },
  { id: 2, image: sremporium, link: 'https://sremporium.vercel.app/', title: 'SR Emporium', description: 'An online store for various products.' },
  { id: 2, image: saraya, link: 'https://www.figma.com/proto/h34598tDTbW9dOtcDp8lBm/Saraya?type=design&node-id=42-382&t=sO2J1RaOcTStAIVZ-1&scaling=scale-down&page-id=20%3A3&starting-point-node-id=42%3A382', title: 'Saraya Nusantara', description: ' Design apps education digital financial ' },
  
];

const Portfolio = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold ">Check Out My Project</h2>
      <p className='mb-4'>Most outstanding programmers do it not for money or recognition from the public, but because it is enjoyable. </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg">View Project</span>
              </div>
            </div>
            <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
