function PartnerShowcase() {
    const logos = [
        "/companylogo1.svg",
        "/companylogo2.svg",
        "/companylogo3.svg",
        "/companylogo4.svg",
        "/companylogo5.svg",
        "/companylogo6.svg",
        "/companylogo7.svg",
        "/companylogo8.svg",
    ];

    return (
        <section className="bg-gray-100 py-10 pb-10" id="companies">
            <div className="container mx-auto text-center mb-8 px-10">
                <h2 className="text-3xl font-bold py-10">
                    Trusted by Leading Companies
                </h2>
            </div>

            {/* Marquee Wrapper */}
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
                    {/* Duplicate logos for infinite scroll effect */}
                    {logos.map((logo, index) => (
                        <img
                            key={`dup-${index}`}
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

export default PartnerShowcase;
