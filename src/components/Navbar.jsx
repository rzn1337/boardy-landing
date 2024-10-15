import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex gap-2 align-middle">
                    <a href="#" className="text-2xl font-thin text-white">
                        boardy.
                    </a>
                </div>

                {/* Links for larger screens */}
                <ul className="hidden md:flex space-x-8">
                    <li>
                        <a
                            href="#features"
                            className="text-gray-600 hover:text-orange-500"
                        >
                            Features
                        </a>
                    </li>
                    <li>
                        <a
                            href="#use-cases"
                            className="text-gray-600 hover:text-orange-500"
                        >
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a
                            href="#testimonials"
                            className="text-gray-600 hover:text-orange-500"
                        >
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="text-gray-600 hover:text-orange-500"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* CTA Button */}
                <a
                    href="#get-started"
                    className="hidden md:block font-thin bg-white text-black py-2 px-6 rounded-md hover:bg-orange-500 transition duration-300"
                >
                    Get Started
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-600 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-white py-4">
                    <li>
                        <a
                            href="#features"
                            className="block py-2 px-4 text-gray-600 hover:text-orange-500"
                        >
                            Features
                        </a>
                    </li>
                    <li>
                        <a
                            href="#use-cases"
                            className="block py-2 px-4 text-gray-600 hover:text-orange-500"
                        >
                            Use Cases
                        </a>
                    </li>
                    <li>
                        <a
                            href="#testimonials"
                            className="block py-2 px-4 text-gray-600 hover:text-orange-500"
                        >
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="block py-2 px-4 text-gray-600 hover:text-orange-500"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
