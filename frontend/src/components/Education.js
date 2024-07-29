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
        <div className="container mx-auto px-4 py-8 font-poppins bg-transparent">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Formación Académica</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {educationData.map((item, index) => (
                    <li key={index} className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-red-700"></div>
                        <time className="mb-1 text-sm font-bold leading-none text-gray-400 dark:text-white">{item.year}</time>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <h4 className="text-md font-medium text-white mb-1">{item.institution}</h4>
                        <p className="text-base font-normal text-gray-300 dark:text-gray-400">{item.description}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default EducationTimeline;
