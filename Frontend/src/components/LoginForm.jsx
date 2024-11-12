import React, { useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { useNavigate } from 'react-router-dom'; 

function LoginForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = countryList().getData();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Passing form data to the home page via state
    navigate('/FirstPage', {
      state: {
        username,
        email,
        country: selectedCountry ? selectedCountry.label : 'Not Selected',
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6 py-12 pl-10">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
          Sign in to your account
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

    
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

     
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          {/* Country Selector */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <Select
              id="country"
              options={countries}
              value={selectedCountry}
              onChange={handleCountryChange}
              className="mt-2"
              placeholder="Select your country"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500 font-semibold">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Sign-up Prompt */}
        <p className="mt-6 text-center text-sm text-gray-600">
          New here?{' '}
          <a href="#" className="text-indigo-600 hover:text-indigo-500 font-semibold">
            Sign up for an account
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
