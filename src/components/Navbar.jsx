const Navbar = () => {
    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        console.log(targetSection, targetId);
        targetSection?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <nav className="bg-black shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex gap-2 align-middle">
                    <a
                        href="#hero"
                        className="text-2xl font-thin text-white"
                        onClick={handleSmoothScroll}
                    >
                        boardy.
                    </a>
                </div>

                {/* Links for larger screens */}
                <ul className="hidden md:flex space-x-8">
                    <li>
                        <a
                            href="#features"
                            className="text-gray-600 hover:text-red-400"
                            onClick={handleSmoothScroll}
                        >
                            Features
                        </a>
                    </li>
                    <li>
                        <a
                            href="#pricing"
                            className="text-gray-600 hover:text-red-400"
                            onClick={handleSmoothScroll}
                        >
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a
                            href="#partners"
                            className="text-gray-600 hover:text-red-400"
                            onClick={handleSmoothScroll}
                        >
                            Partners
                        </a>
                    </li>
                    <li>
                        <a
                            href="#testimonials"
                            className="text-gray-600 hover:text-red-400"
                            onClick={handleSmoothScroll}
                        >
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a
                            href="#footer"
                            className="text-gray-600 hover:text-red-400"
                            onClick={handleSmoothScroll}
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                
            </div>
        </nav>
    );
};

export default Navbar;
