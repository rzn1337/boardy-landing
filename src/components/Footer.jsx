const Footer = () => {
    const Company = ["About us", "Our offerings", "Blog"];
    const Resources = ["Help Center", "Safety", "Our Partners"];
    const Legal = ["Terms of Service", "Privacy Policy", "Cookie Policy"];
    return (
        <footer className="bg-black text-base text-white py-20">
            <div className="container mx-auto px-20">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Left Column */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <div className="mb-8">
                            <h2 className="text-xl font-light">boardy.</h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            <div className="flex flex-col space-y-2 my-8">
                                <h3 className="font-semibold text-white text-sm">
                                    Company
                                </h3>
                                {Company.map((c) => (
                                    <a
                                        href="#"
                                        key={c}
                                        className="text-gray-400 text-xs hover:text-white"
                                    >
                                        {c}
                                    </a>
                                ))}
                            </div>
                            <div className="flex flex-col space-y-2 my-8">
                                <h3 className="font-semibold text-white text-sm">
                                    Resources
                                </h3>
                                {Resources.map((r) => (
                                    <a
                                        href="#"
                                        key={r}
                                        className="text-gray-400 text-xs hover:text-white"
                                    >
                                        {r}
                                    </a>
                                ))}
                            </div>
                            <div className="flex flex-col space-y-2 my-8">
                                <h3 className="font-semibold text-white text-sm">
                                    Legal
                                </h3>
                                {Legal.map((l) => (
                                    <a
                                        href="#"
                                        key={l}
                                        className="text-gray-400 text-xs hover:text-white"
                                    >
                                        {l}
                                    </a>
                                ))}
                            </div>
                            <div>
                                <div className="flex justify-start md:justify-end space-x-6 mb-8">
                                    <a href="#facebook" className="block">
                                        <img
                                            src="/public/images/fb.svg"
                                            alt="Facebook"
                                            className="h-6 w-6"
                                        />
                                    </a>
                                    <a href="#twitter" className="block">
                                        <img
                                            src="/images/x.svg"
                                            alt="X (Twitter)"
                                            className="h-6 w-6"
                                        />
                                    </a>
                                    <a href="#youtube" className="block">
                                        <img
                                            src="/images/yt.svg"
                                            alt="YouTube"
                                            className="h-6 w-6"
                                        />
                                    </a>
                                    <a href="#linkedin" className="block">
                                        <img
                                            src="/images/in.svg"
                                            alt="LinkedIn"
                                            className="h-6 w-6"
                                        />
                                    </a>
                                    <a href="#instagram" className="block">
                                        <img
                                            src="/images/ig.svg"
                                            alt="Instagram"
                                            className="h-6 w-6"
                                        />
                                    </a>
                                </div>
                                <div className="flex justify-start md:justify-end space-x-4 mb-8">
                                    <a href="#appstore" className="block">
                                        <img
                                            src="/images/appstore.svg"
                                            alt="App Store"
                                            className="h-12 w-auto"
                                        />
                                    </a>
                                    <a href="#playstore" className="block">
                                        <img
                                            src="/images/playstore.svg"
                                            alt="Play Store"
                                            className="h-12 w-auto"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-xs">
                        &copy; {new Date().getFullYear()} boardy. All rights
                        reserved.
                    </p>
                    <div className="flex space-x-4 mt-2 md:mt-0">
                        <a
                            href="#privacy"
                            className="text-gray-400 text-xs hover:text-white"
                        >
                            Privacy
                        </a>
                        <a
                            href="#accessibility"
                            className="text-gray-400 text-xs hover:text-white"
                        >
                            Accessibility
                        </a>
                        <a
                            href="#terms"
                            className="text-gray-400 text-xs hover:text-white"
                        >
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
