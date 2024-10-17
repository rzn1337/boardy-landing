import { footerText } from "./footerContent";

const Footer = () => {
    return (
        <footer id="contact" className="bg-black text-white py-16 md:py-20">
            <div className="container mx-auto px-8 md:px-20">
                <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
                    <div className="w-full md:w-1/2">
                        <h2 className="font-light text-2xl md:text-3xl pb-4">
                            boardy.
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                            {Object.entries(footerText).map(
                                ([section, links]) => (
                                    <div key={section} className="space-y-2">
                                        <h3 className="font-semibold text-sm">
                                            {section}
                                        </h3>
                                        {/* Ensuring links stack vertically */}
                                        <div className="flex flex-col space-y-1">
                                            {links.map((link) => (
                                                <a
                                                    href="#"
                                                    key={link}
                                                    className="text-gray-400 text-sm hover:text-white transition-colors"
                                                >
                                                    {link}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <div className="w-full md:w-auto">
                        <div className="space-y-6">
                            {/* Social Media Icons */}
                            <div className="flex justify-start md:justify-end space-x-6">
                                {["fb", "x", "yt", "in", "ig"].map((item) => (
                                    <a
                                        href={`#${item}`}
                                        key={item}
                                        className="block transition-transform transform hover:scale-110"
                                    >
                                        <img
                                            src={`/images/${item}.svg`}
                                            alt={item}
                                            className="h-6 w-6"
                                        />
                                    </a>
                                ))}
                            </div>
                            {/* App Store and Play Store Links */}
                            <div className="flex justify-start md:justify-end space-x-4">
                                <a href="#appstore" className="block">
                                    <img
                                        src="/images/appstore.svg"
                                        alt="App Store"
                                        className="h-12 w-auto hover:opacity-80 transition-opacity"
                                    />
                                </a>
                                <a href="#playstore" className="block">
                                    <img
                                        src="/images/playstore.svg"
                                        alt="Play Store"
                                        className="h-12 w-auto hover:opacity-80 transition-opacity"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-xs">
                        &copy; {new Date().getFullYear()} boardy. All rights
                        reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        {["Privacy", "Accessibility", "Terms"].map((item) => (
                            <a
                                href={item}
                                key={item}
                                className="text-gray-400 text-xs hover:text-white transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
