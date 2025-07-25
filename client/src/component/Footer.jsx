// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-green-200 via-green-50 to-white text-base-content pt-12 pb-6 px-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 border-b border-green-100 pb-8">
        <div className="flex flex-col items-center md:items-start space-y-3 flex-1 min-w-[200px]">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current mb-2"
          >
            <path
              d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
            ></path>
          </svg>
          <p className="text-lg font-bold text-green-800">Kisaan Bazaar</p>
          <p className="text-green-700 text-center md:text-left">Providing reliable solutions to contracting</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-green-700 hover:text-green-900 transition-colors text-xl" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="text-green-700 hover:text-green-900 transition-colors text-xl" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="text-green-700 hover:text-green-900 transition-colors text-xl" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="text-green-700 hover:text-green-900 transition-colors text-xl" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="flex flex-1 justify-between gap-8">
          <nav className="flex flex-col min-w-[120px]">
            <h6 className="footer-title text-green-800 mb-2 font-semibold">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col min-w-[120px]">
            <h6 className="footer-title text-green-800 mb-2 font-semibold">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col min-w-[120px]">
            <h6 className="footer-title text-green-800 mb-2 font-semibold">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-6 text-center text-green-700 text-sm opacity-80">
        © {new Date().getFullYear()} Kisaan Bazaar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
