import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Company Logo"
              className="h-10"
            />
            <p className="text-gray-400">
              Your Company provides innovative solutions to help your business grow.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/about" className="hover:text-indigo-400">About Us</Link>
              </li>
              <li>
                <Link to= "/service"  className="hover:text-indigo-400">Services</Link>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400">Pricing</a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-400">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Facebook Icon */}
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.488v-9.294h-3.114v-3.622h3.114v-2.671c0-3.066 1.875-4.742 4.612-4.742 1.312 0 2.44.097 2.766.141v3.204h-1.899c-1.494 0-1.785.71-1.785 1.751v2.297h3.57l-.465 3.622h-3.105v9.294h6.075c.73 0 1.324-.593 1.324-1.324v-21.35c0-.732-.594-1.325-1.324-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Twitter Icon */}
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.954-2.175-1.55-3.594-1.55-2.717 0-4.92 2.202-4.92 4.917 0 .386.043.762.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.423.725-.666 1.561-.666 2.456 0 1.694.862 3.188 2.173 4.065-.8-.025-1.554-.245-2.214-.612v.061c0 2.366 1.684 4.341 3.918 4.787-.41.112-.842.171-1.287.171-.314 0-.621-.03-.92-.086.623 1.942 2.432 3.355 4.576 3.395-1.675 1.312-3.784 2.096-6.073 2.096-.395 0-.786-.023-1.174-.067 2.164 1.389 4.731 2.198 7.504 2.198 9.008 0 13.93-7.466 13.93-13.941 0-.213-.004-.426-.013-.637.954-.689 1.782-1.56 2.438-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* LinkedIn Icon */}
                  <path d="M22.23 0h-20.46c-.97 0-1.77.8-1.77 1.77v20.46c0 .97.8 1.77 1.77 1.77h20.46c.97 0 1.77-.8 1.77-1.77v-20.46c0-.97-.8-1.77-1.77-1.77zm-14.84 20.45h-3.33v-11.1h3.33v11.1zm-1.65-12.76c-1.07 0-1.93-.87-1.93-1.94 0-1.07.87-1.94 1.93-1.94 1.07 0 1.94.87 1.94 1.94 0 1.07-.87 1.94-1.94 1.94zm13.49 12.76h-3.33v-5.95c0-1.42-.03-3.25-1.98-3.25-1.98 0-2.28 1.55-2.28 3.15v6.05h-3.33v-11.1h3.2v1.52h.05c.45-.85 1.55-1.75 3.2-1.75 3.43 0 4.07 2.26 4.07 5.18v6.15h-.01z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
