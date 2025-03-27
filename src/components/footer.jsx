import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              HACKSINU
            </h2>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">CONTACT US</h3>
            <p>Jatin Arora: +91 93116 02436</p>
            <p>Toril Jain: +91 88989 24889</p>
            <p>sinusoid@st.niituniversity.in</p>
          </div>

          {/* Register Button */}
          <div className="mb-6 md:mb-0">
            <button
              onClick={() => navigate('/register')}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition duration-300"
            >
              Register Here
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-700 my-6"></div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition-colors duration-300">
            <FaFacebook />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-500 transition-colors duration-300">
            <FaYoutube />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600 transition-colors duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;