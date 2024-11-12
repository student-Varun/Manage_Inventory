import React from 'react';
import { motion } from 'framer-motion'; // Make sure to install framer-motion
import logo from '../assets/logo.png'; // Adjust the path to your logo image

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Company Logo with Animation */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={logo} alt="Company Logo" className="h-24 mx-auto" />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="max-w-4xl px-6 py-10 bg-white rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          At <span className="font-semibold text-indigo-600">[Your Company Name]</span>, we pride ourselves on delivering exceptional e-commerce solutions and comprehensive inventory management systems.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          With years of experience in the industry, our dedicated team is committed to understanding your unique business needs and providing tailored solutions that drive growth and efficiency.
        </p>
        <p className="text-lg text-gray-700">
          Innovation and customer satisfaction are at the heart of what we do. Whether you're looking to build a robust online presence or streamline your inventory processes, <span className="font-semibold text-indigo-600">[Your Company Name]</span> is your trusted partner for success.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutPage;
