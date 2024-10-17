import { logos } from "./partnersContent";

function Partners() {
    return (
        <section className="bg-gray-100 py-36" id="partners">
            <div className="container mx-auto text-center mb-8 px-10">
                <h2 className="text-4xl pb-10 font-light">
                    Trusted by Leading Companies
                </h2>
            </div>

            {/* marquee componnet */}
            <div className="overflow-hidden relative w-full">
                {/* Logos container */}
                <div className="flex space-x-10 animate-slide">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Company logo ${index + 1}`}
                            className="h-20 w-auto"
                        />
                    ))}
                    {logos.map((logo, index) => (
                        <img
                            key={`l${index}`}
                            src={logo}
                            alt={`Company logo ${index + 1}`}
                            className="h-20 w-auto"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Partners;
