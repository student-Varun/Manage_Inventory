import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-indigo-800">Get in Touch</h1>
        <p className="mt-2 text-gray-600">We'd love to hear from you!</p>
      </motion.div>

      <motion.div
        className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-indigo-600">Contact Information</h2>
        <div className="mt-6">
          <p className="text-gray-800">Email:</p>
          <a href="mailto:varuntrikha16@gmail.com" className="text-indigo-600 underline transition duration-200 hover:text-indigo-800">
            vansharora2209@gmail.com
          </a>
        </div>
        <div className="mt-4">
          <p className="text-gray-800">LinkedIn:</p>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline transition duration-200 hover:text-indigo-800">
            Your LinkedIn Profile
          </a>
        </div>
        <div className="mt-4">
          <p className="text-gray-800">Instagram:</p>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline transition duration-200 hover:text-indigo-800">
            Your Instagram Profile
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
