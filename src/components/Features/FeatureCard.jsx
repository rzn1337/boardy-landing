const FeatureCard = ({ title, description, days, avatars, count }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-md font-semibold text-gray-800">{title}</h3>
            <span className="text-gray-400 text-sm">...</span>
        </div>
        <p className="text-xs text-gray-600 mb-2">{description}</p>
        <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">{days} Days Ago</span>
            <div className="flex items-center">
                <div className="flex -space-x-1 mr-1">
                    {avatars.map((color, index) => (
                        <div
                            key={index}
                            className={`w-4 h-4 rounded-full border-2 border-white ${color}`}
                        />
                    ))}
                </div>
                {count && (
                    <span className="text-xs text-gray-500">+{count}</span>
                )}
            </div>
        </div>
    </div>
);

export default FeatureCard;
