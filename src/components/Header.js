import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg text-white p-10 md:p-6 font-poppins fixed top-0 w-full z-50 shadow-lg transition-all duration-300">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl md:text-3xl font-bold flex items-center justify-center md:justify-start">
                    <span className="text-white">Sebastián</span>
                    <span className="text-red-700 ml-2">Osorio</span>
                </div>
                <nav className="hidden md:flex justify-end space-x-4 md:space-x-6 text-sm md:text-lg w-3/5">
                    <a href="#about" className="transition duration-300 text-white hover:text-neonRed">
                        About
                    </a>
                    <a href="#projects" className="transition duration-300 text-white hover:text-neonRed">
                        Projects
                    </a>
                    <a href="#education" className="transition duration-300 text-white hover:text-neonRed">
                        Education
                    </a>
                    <a href="#contact" className="transition duration-300 text-white hover:text-neonRed">
                        Contact
                    </a>
                </nav>
                <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            {isOpen && (
                <motion.div
                    className="md:hidden bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg text-white p-6 space-y-4 text-lg absolute top-full left-0 w-full shadow-lg z-10 flex flex-col items-center"
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    transition={{ duration: 0.3 }}
                >
                    <a href="#about" className="block transition duration-300 text-white hover:text-neonRed" onClick={toggleMenu}>
                        About
                    </a>
                    <a href="#projects" className="block transition duration-300 text-white hover:text-neonRed" onClick={toggleMenu}>
                        Projects
                    </a>
                    <a href="#education" className="block transition duration-300 text-white hover:text-neonRed" onClick={toggleMenu}>
                        Education
                    </a>
                    <a href="#contact" className="block transition duration-300 text-white hover:text-neonRed" onClick={toggleMenu}>
                        Contact
                    </a>
                </motion.div>
            )}
        </header>
    );
};

export default Header;
