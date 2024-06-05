import React from 'react';

const ProjectCard = ({ image, title, technologies }) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-red-500 transition-shadow duration-500">
            <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
                <div className="flex space-x-2">
                    {technologies.map((TechIcon, index) => (
                        <TechIcon key={index} className="text-white text-3xl" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
