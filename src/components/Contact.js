import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/contact', { name, phone, message });
            setStatus('Message sent successfully!');
            setName('');
            setPhone('');
            setMessage('');
        } catch (error) {
            console.error('Error submitting form:', error.response ? error.response.data : error.message);
            setStatus('Failed to send message. Please try again later.');
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 my-8 bg-black shadow-neon-red rounded-lg font-poppins">
            <h2 className="text-3xl font-semibold mb-4 text-white text-center">Contáctame</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-red-500" htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full px-3 py-2 bg-black border border-red-500 rounded-md shadow-sm focus:outline-none focus:ring-neon-red focus:border-neon-red sm:text-sm text-white"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-red-500" htmlFor="phone">Teléfono</label>
                    <input
                        type="number"
                        id="phone"
                        className="mt-1 block w-full px-3 py-2 bg-black border border-red-500 rounded-md shadow-sm focus:outline-none focus:ring-neon-red focus:border-neon-red sm:text-sm text-white"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-red-500" htmlFor="message">Mensaje</label>
                    <textarea
                        id="message"
                        rows="4"
                        className="mt-1 block w-full px-3 py-2 bg-black border border-red-500 rounded-md shadow-sm focus:outline-none focus:ring-neon-red focus:border-neon-red sm:text-sm text-white"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-neon-red"
                    >
                        Enviar mensaje
                    </button>
                </div>
            </form>
            {status && <p className="mt-4 text-center text-sm text-white">{status}</p>}
        </div>
    );
};

export default Contact;
