import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/api/projects')
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <section className="p-4">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map(project => (
                    <div key={project.id} className="bg-white p-4 rounded shadow">
                        <h3 className="text-xl font-bold">{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
