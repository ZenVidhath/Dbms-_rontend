import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Us */}
          <div>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-sm mb-4">
              We are dedicated to making the world a better place for children.
              Our mission is to help create a safe environment where every child can thrive.
            </p>
            <p className="text-sm">© 2024 All Rights Reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#about-us" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
              <li><a href="#faq" className="hover:text-gray-400">FAQ</a></li>
              <li><a href="#privacy-policy" className="hover:text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" className="text-white hover:text-gray-400">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-gray-400">
                <FaTwitter size={30} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-gray-400">
                <FaInstagram size={30} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-gray-400">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-10 text-center">
          <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
          <p className="mb-4 text-sm">Sign up for our newsletter and get the latest updates on our mission.</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Your Email"
              className="py-2 px-4 rounded-l-md text-gray-700"
            />
            <button className="bg-yellow-500 text-white py-2 px-6 rounded-r-md hover:bg-yellow-400 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
