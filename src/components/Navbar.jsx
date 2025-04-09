import React from "react";
import logo from '../assets/Logo.png'
function Navbar() {
    return (

        <div className="w-full px-4 md:px-12 py-4">
            <nav className="bg-white  py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center ">
                    <img src={logo} alt="Company Logo" className="h-7 w-22" />
                    {/* <span className="textfont-bold text-gray-800"></span> */}
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    <a href="#home" className="text-gray-600 hover:text-black">About Us</a>
                    <a href="#about" className="text-gray-600 hover:text-black">Services</a>
                    <a href="#services" className="text-gray-600 hover:text-black">Use Cases</a>
                    <a href="#contact" className="text-gray-600 hover:text-black">Pricing</a>
                    <a href="#contact" className="text-gray-600 hover:text-black">Blog</a>
                    {/* <a href="#contact" className="text-gray-600 border border-black px-3 py-1 rounded-l rounded-r hover:text-black">Request a Quote</a> */}
                    <a href="#contact" className="h-[28px] px-3 text-gray-600 hover:text-black  border border-black rounded-md transition duration-200">Request a Quote</a>


                </div>

                {/* Mobile Menu Icon (optional) */}
                <div className="md:hidden">
                    <button className="text-gray-600 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;