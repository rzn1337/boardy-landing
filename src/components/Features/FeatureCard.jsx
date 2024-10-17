const FeatureCard = ({ title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <span className="text-gray-400 text-base">...</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
    </div>
);

export default FeatureCard;
