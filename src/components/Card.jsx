const Card = ({
    title,
    description,
    price,
    features,
    buttonText,
    mostPopular,
}) => {
    return (
        <div
            className={`relative flex flex-col justify-between border border-gray-200 rounded-lg shadow-lg p-6 transition-transform duration-300 ${
                mostPopular ? "transform scale-105 border-blue-500" : ""
            }`}
        >
            {mostPopular && (
                <div className="absolute top-0 right-0 bg-red-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                </div>
            )}
            <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                    {title}
                </h3>
                <p className="mt-2 text-gray-600">{description}</p>
                <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-800">
                        {price}
                    </span>
                    <span className="text-gray-600"> / month</span>
                </div>
                <ul className="mt-6 space-y-2">
                    {features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600">
                            • {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <button className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                {buttonText}
            </button>
        </div>
    );
};

export default Card;
