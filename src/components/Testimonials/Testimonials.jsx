import { testimonials } from "./testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="bg-gray-100 py-16">
            <div className="container mx-auto px-8 md:px-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-light text-gray-800">
                        What People Are Saying
                    </h2>
                    <p className="text-lg text-gray-600 mt-4">
                        Hear from our satisfied users around the globe.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            role={testimonial.role}
                            testimonial={testimonial.testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
