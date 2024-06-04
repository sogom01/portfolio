import React from 'react';

const Contact = () => {
    return (
        <section className="bg-gray-100 p-4">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-gray-700">Name</label>
                    <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input type="email" className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label className="block text-gray-700">Message</label>
                    <textarea className="w-full p-2 border rounded"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
            </form>
        </section>
    );
};

export default Contact;
