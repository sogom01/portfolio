import React, { useState, useEffect } from 'react';
import profileImage from '../img/3.webp';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const About = () => {
    const roles = ['Desarrollador de Software', 'Desarrollador front-end', 'Diseñador de UI/UX', 'Tester de Software', 'Analista de datos'];

    const [currentRole, setCurrentRole] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            setDisplayedText((prev) => {
                if (!deleting) {
                    if (prev.length < roles[currentRole].length) {
                        return roles[currentRole].slice(0, prev.length + 1);
                    } else {
                        setTimeout(() => setDeleting(true), 500);
                        return prev;
                    }
                } else {
                    if (prev.length > 0) {
                        return roles[currentRole].slice(0, prev.length - 1);
                    } else {
                        setDeleting(false);
                        setCurrentRole((prev) => (prev + 1) % roles.length);
                        return prev;
                    }
                }
            });
        };

        const typingInterval = setInterval(handleTyping, 100);

        return () => clearInterval(typingInterval);
    }, [currentRole, deleting, roles]);

    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-transparent p-6 overflow-hidden">
            <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                <div className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-neon transition-shadow duration-300 hover:shadow-neon-lg">
                    <img src={profileImage} alt="Profile" className="object-cover w-full h-full" />
                </div>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10 text-center md:text-left">
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white overflow-hidden" style={{ lineHeight: '1.5', minHeight: '3rem' }}>
                    Soy <span className="text-red-700" style={{ color: '#f60b0b', whiteSpace: 'nowrap' }}>{displayedText}</span>
                </p>
                <p className="text-sm md:text-base lg:text-lg text-white mt-4">
                    Bienvenido a mi mundo digital, donde la creatividad se encuentra con la innovación y la pasión se convierte en resultados tangibles. En este espacio, te invito a explorar un viaje a través de mis experiencias, proyectos y logros. Desde proyectos que he realizado como modelo para empresas hasta proyectos de práctica para plasmar mi creatividad.
                </p>
                <p className="text-sm md:text-base lg:text-lg text-white mt-4">
                    Mi objetivo es construir aplicaciones web eficientes y elegantes que ofrezcan una gran experiencia de usuario. ¡Estoy emocionado de compartir mis proyectos contigo!
                </p>
                <div className="flex justify-center md:justify-start space-x-4 mt-6">
                    <a href="https://github.com/sogom01" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-full">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/juan-sebasti%C3%A1n-osorio-g%C3%B3mez-8b1074137" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-full">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://x.com/sogom_01" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-full">
                        <SiX size={24} />
                    </a>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 mt-4 w-full">
                    <a href="/Curriculum-Vitae.pdf" target="_blank" rel="noopener noreferrer" className="btn-neon-cv rounded-full text-center px-6 py-2 whitespace-nowrap">
                        Descargar CV
                    </a>
                    <a href="mailto:your-email@example.com" className="btn-neon rounded-full text-center px-6 py-2 whitespace-nowrap">
                        Contactarme
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
