import PricingCard from "./PricingCard";
import { plans } from "./pricingContent";

const Pricing = () => {
    return (
        <section id="pricing" className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-light text-gray-800 mb-8">
                    Pricing Plans
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            title={plan.name}
                            description={plan.description}
                            price={plan.price}
                            features={plan.features}
                            buttonText={plan.buttonText}
                            mostPopular={plan.mostPopular}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
