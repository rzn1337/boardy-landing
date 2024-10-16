import Button from "../Button";

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
            <div className="container max-w-full mx-auto px-10 py-4 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <a
                        href="#hero"
                        className="text-2xl font-thin text-white hover:text-red-400"
                        onClick={handleSmoothScroll}
                    >
                        boardy.
                    </a>
                </div>

                <ul className="hidden md:flex space-x-8">
                    {[
                        "Features",
                        "Pricing",
                        "Partners",
                        "Testimonials",
                        "Contact",
                    ].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-600 hover:text-red-400"
                                onClick={handleSmoothScroll}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <div>
                    <Button label="Sign up" style="text-sm bg-gray-200" type="button" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
