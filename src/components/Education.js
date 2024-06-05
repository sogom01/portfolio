// src/components/EducationTimeline.js
import React from 'react';

const EducationTimeline = () => {
    const educationData = [
        {
            year: '2015',
            title: 'Bachiller Comercial',
            institution: 'Liceo "Claudina Múnera" Aguadas - Caldas',
            description: 'Título de Bachiller comercial cursado desde el año 2002 obteniendo excelentes resultados y aprendiendo conceptos de administración de negocios y contabilidad.'
        },
        {
            year: '2015',
            title: 'Técnico en Asistencia Administrativa',
            institution: 'Servicio Nacional de Aprendizaje SENA',
            description: 'Título de Asistente Comercial con competencias avanzadas en contabilidad, experiencia en archivística y sólidos conocimientos en derecho laboral y administración de empresas. Graduado del SENA Regional Caldas.'
        },
        {
            year: '2015',
            title: 'Inglés',
            institution: 'Servicio Nacional de Aprendizaje SENA',
            description: 'Título de Ingles nivel (B2-C1) esto como formación complementaria del Técnico ambos en paralelo.'
        },
        {
            year: '2016',
            title: 'Ingeniería de Sistemas y Telecomunicaciones',
            institution: 'Universidad de Manizales',
            description: 'Actualmente curso los últimos semestres de la carrera habiendo adquirido hasta el momento conocimientos en Bases de Datos, Metodologías Ágiles de Desarrollo Web, Analítica de datos, Desarrollo de UI/UX, y Desarrollo Front-end y Back-end.'
        },
        {
            year: '2020',
            title: 'JavaScript',
            institution: 'Udemy',
            description: 'Curso intensivo en JavaScript con énfasis en Webpack, Clases, Propiedades privadas, ESNext, Node, Npm, Babel, Hot Reload, CRUD, Carga de archivos entre otros.'
        },
        {
            year: '2021',
            title: 'React (Hooks y MERN)',
            institution: 'Udemy',
            description: 'Curso intensivo en React enfocado en aprender Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, Despliegues, CRUD, Logs, MUI, Multiple Routers entre otros.'
        },
        {
            year: '2022',
            title: 'Gestión y manejo de PQRS',
            institution: 'Universidad Javeriana',
            description: 'Formación en el manejo efectivo y solución de la Peticiones, Quejas, Reclamos y Solicitudes que pueden presentarse en empresas BPO y en cualquier empresa que preste servicios al público.'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8 font-poppins">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Formación Académica</h2>
            <div className="relative">
                {educationData.map((item, index) => (
                    <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} my-4`}>
                        <div className="bg-black border-2 border-red-700 shadow-lg shadow-red-700/50 p-6 rounded-3xl transform hover:scale-105 transition-transform duration-300">
                            <h3 className="text-xl font-semibold text-white mb-2">{item.year} - {item.title}</h3>
                            <h4 className="text-md font-medium text-gray-400 mb-1">{item.institution}</h4>
                            <p className="text-gray-300">{item.description}</p>
                        </div>
                    </div>
                ))}
                <div className="timeline-line absolute w-1 bg-red-600 left-1/2 transform -translate-x-1/2 top-0 bottom-0"></div>
            </div>
        </div>
    );
};

export default EducationTimeline;
