import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ project }) => {
  const imageLinks = {
    barbell: './images/barbell.jpg',
    wellspring: `./images/wellspring.png`,
    nutrition: `./images/nutrition.webp`,
    website: `./images/website.png`,
    frog: `./images/frog.png`,
    knews: './images/knews.jpg'
  };

  const row = {
    large: `row-span-2`,
    regular: `row-span-1`, 
  };

  // Define height classes based on row size
  const heightClasses = {
    large: 'h-full', // Will fill the entire row-span-2 space

  };

  return (
    <div className={`relative group w-[95%] ${row[project.row]} h-full`}>
      {project.award && (
        <div className="absolute -top-8 -right-8 z-20 transform transition-all duration-500 group-hover:scale-125">
          <Image
            src="/images/crown.png"
            alt="winner"
            width={50}
            height={50}
            className='rotate-45'
          />
        </div>
      )}

      <a
        href={project.link}
        target="_blank"
        className={`relative block bg-center bg-cover rounded-2xl transform transition-all duration-500 border 
          group-hover:scale-105 hover:shadow-[0_20px_20px_rgba(96,76,255,0.3)] ease-in-out overflow-hidden h-64
          ${heightClasses[project.row]} w-full`} // Apply dynamic height class
        style={{
          backgroundImage: `url(${imageLinks[project.image]})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className='absolute inset-0 bg-black/60'></div>

        <div className="absolute inset-0 p-6 flex flex-col content-between">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-blue-500 text-sm">{project.subtitle}</p>

          <div className="absolute inset-0 bg-black bg-opacity-90 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center">
            <p className="text-white text-xs md:text-base overflow-">{project.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
