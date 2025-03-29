import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import logo from '../images/sinusoid-text.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">

          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <img
              src={logo}
              alt="HackSinu Logo"
              className="h-20 w-100 mb-6 object-cover rounded-full cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Contact Info */}
          <div className="text-left mb-6 md:mb-0">
            <h3 className="text-xl font-boldonse font-semibold mb-2">CONTACT US</h3>
            <div className="flex items-center gap-2 mb-2">
              <a href="tel:+918126211682" className="flex items-center hover:text-pink-500 transition-colors duration-300">
                <FaPhone className="mr-2" />
                <span className="font-boldonse">Vasvi Nehra: +91 81262 11682</span>
              </a>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <a href="tel:+919717933373" className="flex items-center hover:text-pink-500 transition-colors duration-300">
                <FaPhone className="mr-2" />
                <span className="font-boldonse">Sakshi Prasad: +91 97179 33373</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="mailto:sinusoid@st.niituniversity.in" className="flex items-center hover:text-pink-500 transition-colors duration-300">
                <FaEnvelope className="mr-2" />
                <span className="font-boldonse">sinusoid@st.niituniversity.in</span>
              </a>
            </div>
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