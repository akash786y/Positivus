// import React from "react";
// import Logo2 from '../assets/Logo 2.png'
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// function Footer() {
//     return (
//         <>
//             <footer className="bg-black text-white py-10 px-6 rounded-3xl">
//                 <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
//                     {/* Left: Logo or Company Info */}
//                     <div className="text-center md:text-left">
//                         <img src={Logo2} alt="" />
//                     </div>

//                     {/* Center: Navigation Links */}
//                     <div className="flex gap-6">
//                         <a href="#" className="hover:underline">About Us</a>
//                         <a href="#" className="hover:underline">Services</a>
//                         <a href="#" className="hover:underline">Use Cases</a>
//                         <a href="#" className="hover:underline">Pricing</a>
//                         <a href="#" className="hover:underline">Blog</a>
//                     </div>

//                     {/* Right: Social Media Icons */}
//                     <div className="flex gap-4">
//                         <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
//                             <FaFacebookF size={20} />
//                         </a>
//                         <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
//                             <FaTwitter size={20} />
//                         </a>
//                         <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
//                             <FaLinkedinIn size={20} />
//                         </a>
//                     </div>
//                 </div>
//             </footer>
//         </>
//     )
// }

// export default Footer;



import React from "react";
import Logo2 from '../assets/Logo 2.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-8 rounded-t-3xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-8 md:flex-row md:justify-between md:items-center">

                {/* Logo */}
                <div className="flex justify-center md:justify-start">
                    <img src={Logo2} alt="Logo" className="w-36" />
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-4 text-sm md:gap-6">
                    <a href="#" className="hover:underline">About Us</a>
                    <a href="#" className="hover:underline">Services</a>
                    <a href="#" className="hover:underline">Use Cases</a>
                    <a href="#" className="hover:underline">Pricing</a>
                    <a href="#" className="hover:underline">Blog</a>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center md:justify-end gap-4">
                    <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                        <FaTwitter size={20} />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                        <FaLinkedinIn size={20} />
                    </a>
                </div>
            </div>

            <div className="flex mt-12 mb-8">
                <div>
                    <span className="bg-lime-300 text-black text-l px-1 rounded-l rounded-r"> Contact us: </span>
                    <div className="mt-4">
                        <p className="text-white">Email: info@positivus.com</p>
                        <p className="text-white mt-4">Phone: 555-567-8901</p>
                        <p className="text-white mt-4">Address: 1234 Main St</p>
                        <p className="text-white">Moonstone City, Stardust State 12345</p>
                    </div>
                </div>
                <div className="bg-gray-900 rounded-2xl px-10  max-w-md mx-auto flex max-h-[130px]">
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-content">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 bg-white rounded-xl text-black outline-none"
                        />
                        <button className="w-full px-6 py-2 bg-lime-300 text-black rounded-xl hover:bg-lime-800">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            <hr className="border-t-2 border-white mb-2" />

            <div className="flex gap-8">
                <p className="text-sm text-gray-400">© 2025 All rights reserved.</p>
                <p className="text-sm text-gray-400">Privacy policy</p>
            </div>
        </footer>
    );
}

export default Footer;
