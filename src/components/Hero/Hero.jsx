import { MoveRightIcon } from "lucide-react";
import Button from "../Button";

const Hero = () => {
    return (
        <section
            className="bg-black text-white text-center py-24 relative min-h-screen flex items-center"
            id="hero"
        >
            <div className="absolute inset-0 bg-black hero-grid"></div>

            <div className="container relative mx-auto px-6 lg:px-12">
                <div className="max-w-4xl mx-auto text-center pt-10 pb-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                        Innovate in Real-Time with{" "}
                        <span className="text-red-400">boardy</span>.
                    </h1>
                    <p className="text-lg md:text-xl font-light mb-12 leading-relaxed max-w-3xl mx-auto text-gray-300">
                        Your remote team's all-in-one whiteboard for seamless
                        collaboration. Real-time, infinite canvas, with tools
                        that bring ideas to life.
                    </p>
                </div>

                <div className="flex justify-center space-x-4 mb-16">
                    <Button
                        label="Start a whiteboard"
                        style="text-lg px-8 py-4 bg-red-400 hover:bg-red-300 text-black font-medium rounded-full transition-transform transform hover:scale-105"
                    >
                        <MoveRightIcon className="ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
