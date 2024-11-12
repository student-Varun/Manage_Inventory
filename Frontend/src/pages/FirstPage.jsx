import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


function FirstPage() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const { username, email, country } = location.state || {};

 
  const handleAddInventory = () => {
    navigate('/ProductInfo'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
          Welcome, {username || 'Guest'}!
        </h2>
        <p className="text-center text-lg text-gray-700 mb-4">
          Email: {email}
        </p>
        <p className="text-center text-lg text-gray-700 mb-6">
          Country: {country}
        </p>

     
        <button
          onClick={handleAddInventory} 
          className="w-full flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add Inventory
        </button>
      </div>
    </div>
  );
}

export default FirstPage;
