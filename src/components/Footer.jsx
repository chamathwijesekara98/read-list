import React from "react";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";
import instagramIcon from "../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="w-full py-8 text-center text-white bg-gray-800">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">ReadList</h2>
          <p>© 2025 ReadList. All rights reserved.</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="mb-4 font-bold flex- text-md">Quick Links</h3>
          <ul>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-md">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./src/assets/facebook.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./src/assets/twitter.png"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./src/assets/instagram.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
