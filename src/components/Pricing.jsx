import React from "react";
import Card from "./Card";

const plans = [
    {
        name: "Free",
        price: "$0",
        description: "For individuals getting started with collaboration.",
        features: [
            "1 Whiteboard",
            "Basic Collaboration Tools",
            "Real-Time Updates",
        ],
        buttonText: "Get Started",
        mostPopular: false,
    },
    {
        name: "Pro",
        price: "$250",
        description: "Perfect for small teams and advanced collaboration.",
        features: [
            "Unlimited Whiteboards",
            "Advanced Tools",
            "Priority Support",
        ],
        buttonText: "Upgrade Now",
        mostPopular: true,
    },
    {
        name: "Enterprise",
        price: "$1000",
        description: "Tailored solutions for large scale organizations.",
        features: [
            "Custom Features",
            "Dedicated Support",
            "Advanced Integrations",
        ],
        buttonText: "Contact Us",
        mostPopular: false,
    },
];

const Pricing = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-light text-gray-800 mb-8">
                    Pricing Plans
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <Card
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
