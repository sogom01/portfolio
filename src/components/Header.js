import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-scroll';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <header className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg text-white p-4 font-poppins fixed top-0 w-full z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-2 md:px-2">
                <div className={`text-xl md:text-3xl font-bold flex items-center cursor-pointer transform transition-transform duration-300 hover:scale-105 ${isOpen || 'md:w-2/5'} justify-center md:justify-start w-full`} onClick={reloadPage}>
                    <a href="/" className="flex items-center justify-center w-full">
                        <span className="text-white">Sebastián</span>
                        <span className="text-red-700 ml-2"> Osorio</span>
                    </a>
                </div>
                <nav className={`hidden md:flex w-3/5 justify-end ${isOpen ? 'hidden' : 'flex'}`}>
                    <Scrollspy
                        items={['about', 'projects', 'education', 'contact']}
                        currentClassName="text-red-700"
                        className="flex space-x-4 md:space-x-6 text-sm md:text-lg"
                    >
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-red-700 relative cursor-pointer text-nowrapp"
                        >
                            Sobre mi
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-700 scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
                        </Link>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-red-700 relative cursor-pointer"
                        >
                            Proyectos
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-700 scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
                        </Link>
                        <Link
                            to="education"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-red-700 relative cursor-pointer"
                        >
                            Educación
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-700 scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
                        </Link>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-red-700 relative cursor-pointer"
                        >
                            Contactarme
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-700 scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
                        </Link>
                    </Scrollspy>
                </nav>
                <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            {isOpen && (
                <motion.div
                    className="md:hidden bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg text-white p-6 space-y-4 text-sm md:text-lg absolute top-full left-0 w-full shadow-lg z-10 flex flex-col items-center justify-center"
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    transition={{ duration: 0.3 }}
                >
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="block transition duration-300 text-white hover:text-red-700"
                        onClick={toggleMenu}
                    >
                        Sobre mi
                    </Link>
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="block transition duration-300 text-white hover:text-red-700"
                        onClick={toggleMenu}
                    >
                        Proyectos
                    </Link>
                    <Link
                        to="education"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="block transition duration-300 text-white hover:text-red-700"
                        onClick={toggleMenu}
                    >
                        Educación
                    </Link>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="block transition duration-300 text-white hover:text-red-700"
                        onClick={toggleMenu}
                    >
                        Contactarme
                    </Link>
                </motion.div>
            )}
        </header>
    );
};

export default Header;
