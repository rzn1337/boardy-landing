import FeatureCard from "./FeatureCard";
import { features } from "./featureContent";

const Features = () => {
    return (
        <section id="features" className="bg-gray-100 py-16">
            <div className="container mx-auto px-8">
                <div className="flex flex-col lg:flex-row lg:items-center mb-12">
                    <div className="lg:w-1/3 lg:pr-12 mb-8 lg:mb-0">
                        <h2 className="text-4xl font-light mb-6 text-gray-900">
                            Unlimited Whiteboard Space
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Create unlimited whiteboards and collaborate on as
                            many ideas as your team needs.
                        </p>
                    </div>
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <FeatureCard key={index} {...feature} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
