// import React from 'react';
// import { motion } from 'framer-motion';

// const Services = () => {
//   const services = [
//     {
//       title: 'E-commerce Website Development',
//       description: 'We specialize in building robust and scalable e-commerce websites tailored to your business needs.',
//     },
//     {
//       title: 'Amazon Seller Central Services',
//       description: 'Our team offers comprehensive support for managing your Amazon Seller Central account, optimizing listings, and boosting sales.',
//     },
//     {
//       title: 'Inventory Management Solutions',
//       description: 'We provide advanced inventory management systems to help you keep track of stock levels and streamline operations.',
//     },
//     {
//       title: 'Consulting Services',
//       description: 'Our experts offer strategic consulting to enhance your e-commerce strategy and improve overall performance.',
//     },
//     {
//       title: 'Marketing Solutions',
//       description: 'We create targeted marketing campaigns that increase your visibility and attract more customers.',
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <motion.div
//         className="mb-8"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="text-4xl font-bold text-indigo-800">Our Services</h1>
//       </motion.div>

//       {/* Services List */}
//       <div className="max-w-4xl w-full px-6">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             className="mb-6 p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//           >
//             <h2 className="text-2xl font-semibold text-indigo-600 hover:text-indigo-800 transition duration-200">{service.title}</h2>
//             <p className="mt-2 text-gray-700">{service.description}</p>
//             <div className="mt-4">
//               <a 
//                 href="#" 
//                 className="text-indigo-500 hover:text-indigo-700 underline transition duration-200"
//               >
//                 Learn More
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Contact Information */}
//       <div className="mt-10 text-center">
//         <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
//         <p className="text-gray-600">For inquiries, reach us at:</p>
//         <p className="text-gray-800">Email: <a href="mailto:varuntrikha16@gmail.com" className="text-indigo-600 underline">varuntrikha16@gmail.com</a></p>
//         <p className="text-gray-800">Follow us on:</p>
//         <div className="flex justify-center space-x-4">
//           <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-200">
//             LinkedIn
//           </a>
//           <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-200">
//             Instagram
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'E-commerce Website Development',
      description: 'We specialize in building robust and scalable e-commerce websites tailored to your business needs.',
    },
    {
      title: 'Amazon Seller Central Services',
      description: 'Our team offers comprehensive support for managing your Amazon Seller Central account, optimizing listings, and boosting sales.',
    },
    {
      title: 'Inventory Management Solutions',
      description: 'We provide advanced inventory management systems to help you keep track of stock levels and streamline operations.',
    },
    {
      title: 'Consulting Services',
      description: 'Our experts offer strategic consulting to enhance your e-commerce strategy and improve overall performance.',
    },
    {
      title: 'Marketing Solutions',
      description: 'We create targeted marketing campaigns that increase your visibility and attract more customers.',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-indigo-800">Our Services</h1>
      </motion.div>

      {/* Services List */}
      <div className="max-w-4xl w-full px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="mb-6 p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 cursor-pointer hover:bg-gradient-to-t from-blue-300 via-indigo-400 to-purple-600 hover:shadow-2xl flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-indigo-600 hover:text-indigo-800 transition duration-200">{service.title}</h2>
              <p className="mt-2 text-gray-700">{service.description}</p>
              <div className="mt-4">
                <a 
                  href="#" 
                  className="text-indigo-500 hover:text-indigo-700 underline transition duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contact Information */}
      <div className="mt-10 text-center">
        <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
        <p className="text-gray-600">For inquiries, reach us at:</p>
        <p className="text-gray-800">Email: <a href="mailto:varuntrikha16@gmail.com" className="text-indigo-600 underline">varuntrikha16@gmail.com</a></p>
        <p className="text-gray-800">Follow us on:</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-200">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-200">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
