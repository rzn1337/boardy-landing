const TestimonialCard = ({ name, role, testimonial }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-6">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                    <p className="text-sm text-gray-500">{role}</p>
                </div>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
                "{testimonial}"
            </p>
        </div>
    );
};

export default TestimonialCard;
