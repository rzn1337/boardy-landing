import { footerText } from "./footerContent";

const Footer = () => {
    return (
        <footer id="contact" className="bg-black text-base text-white py-20">
            <div className="container mx-auto px-20">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <div className="mb-8">
                            <h2 className="text-xl font-light">boardy.</h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            {Object.entries(footerText).map(
                                ([section, links]) => (
                                    <div
                                        key={section}
                                        className="flex flex-col space-y-2 my-8"
                                    >
                                        <h3 className="font-semibold text-white text-sm">
                                            {section}
                                        </h3>
                                        {links.map((c) => (
                                            <a
                                                href="#"
                                                key={c}
                                                className="text-gray-400 text-xs hover:text-white"
                                            >
                                                {c}
                                            </a>
                                        ))}
                                    </div>
                                )
                            )}
                            <div>
                                <div className="flex justify-start md:justify-end space-x-6 mb-8">
                                    {["fb", "x", "yt", "in", "ig"].map(
                                        (item, i) => (
                                            <a
                                                href={`#${item}`}
                                                className="block"
                                                key={i}
                                            >
                                                <img
                                                    src={`/images/${item}.svg`}
                                                    alt={item}
                                                    className="h-6 w-6"
                                                />
                                            </a>
                                        )
                                    )}
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

                <div className="mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-xs">
                        &copy; {new Date().getFullYear()} boardy. All rights
                        reserved.
                    </p>
                    <div className="flex space-x-4 mt-2 md:mt-0">
                        {["Privacy", "Accessibility", "Terms"].map(item => <a
                            href={item}
                            key={item}
                            className="text-gray-400 text-xs hover:text-white"
                        >
                            {item}
                        </a>)}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
