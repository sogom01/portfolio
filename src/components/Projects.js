import React from 'react';
import ProjectCard from './ProjectCard';
import { FaHtml5, FaCss3Alt, FaGithub, FaReact, FaJs, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiAstro, SiVercel } from 'react-icons/si';

// Importar imágenes
import Proyecto1 from '../proyects/Proyecto1.png';

const projects = [
    {
        image: Proyecto1,
        title: 'Project One',
        technologies: [SiAstro, SiTailwindcss, FaHtml5, FaJs, FaGithub, SiVercel],
    },
    {
        image: Proyecto1,
        title: 'Project Two',
        technologies: [FaHtml5, FaCss3Alt, FaGithub],
    },
    // {
    //     image: Proyecto1,
    //     title: 'Project Three',
    //     technologies: [FaReact, FaJs, FaNode],
    // },
];

const Projects = () => {
    return (
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.title}
                    technologies={project.technologies}
                />
            ))}
        </div>
    );
};

export default Projects;
