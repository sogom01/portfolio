import React, { useState, useEffect } from 'react';
import profileImage from '../img/1.webp';

const About = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const roles = ['Desarrollador de Software', 'Desarrollador front-end', 'Diseñador de UI/UX', 'Tester de Software', 'Analista de datos'];

    const [currentRole, setCurrentRole] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            setDisplayedText((prev) => {
                if (!deleting) {
                    // Typing effect
                    if (prev.length < roles[currentRole].length) {
                        return roles[currentRole].slice(0, prev.length + 1);
                    } else {
                        setTimeout(() => setDeleting(true), 500); // Shorter pause before deleting
                        return prev;
                    }
                } else {
                    // Deleting effect
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

        const typingInterval = setInterval(handleTyping, 100); // Faster interval

        return () => clearInterval(typingInterval);
    }, [currentRole, deleting, roles]);

    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-transparent-100 p-6">
            <div className="md:w-1/2 flex justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
                    <img src={profileImage} alt="Profile" className="object-cover w-full h-full" />
                </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10 text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
                    Soy <span className="text-red-700">{displayedText}</span>
                </p>
                <p className="text-lg md:text-xl text-white mt-4">
                    Bienvenido a mi mundo digital, donde la creatividad se encuentra con la innovación y la pasión se convierte en resultados tangibles. En este espacio, te invito a explorar un viaje a través de mis experiencias, proyectos y logros. Desde proyectos que he realizado como modelo para empresas hasta proyectos de practica para plasmar mi creatividad.
                </p>
                <p className="text-lg md:text-xl text-white mt-4">
                    Mi objetivo es construir aplicaciones web eficientes y elegantes que ofrezcan una gran experiencia de usuario. ¡Estoy emocionado de compartir mis proyectos contigo!
                </p>
            </div>
        </div>
    );
};

export default About;
