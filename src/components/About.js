import React from 'react';
import profileImage from '../img/1.webp';

const About = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-transparent-100 p-6">
            <div className="md:w-1/2 flex justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
                    <img src={profileImage} alt="Profile" className="object-cover w-full h-full" />
                </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Sobre Mí</h2>
                <p className="text-lg md:text-xl text-gray-600">
                    ¡Hola! Soy [Tu Nombre], un desarrollador web apasionado por la creación de experiencias digitales impactantes. Me encanta trabajar con tecnologías modernas y siempre busco mejorar mis habilidades.
                </p>
                <p className="text-lg md:text-xl text-gray-600 mt-4">
                    Mi objetivo es construir aplicaciones web eficientes y elegantes que ofrezcan una gran experiencia de usuario. ¡Estoy emocionado de compartir mis proyectos contigo!
                </p>
            </div>
        </div>
    );
};

export default About;
