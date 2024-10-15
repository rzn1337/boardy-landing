import { MoveRightIcon } from "lucide-react";

const Hero = () => {
    return (
        <section className="bg-black text-white text-center py-20" id="hero">
            <div className="container mx-auto px-4 py-15">
                <div className="pt-20 pb-5">
                <h1 className="font-thin text-4xl md:text-5xl font-normal mb-4 px-10 py-5">
                    Collaborate, Create, and Innovate in Real-Time with boardy.
                </h1>
                <p className="text-lg md:text-xl font-thin mb-8">
                    Your remote team's all-in-one whiteboard for seamless
                    collaboration. Real-time, infinite canvas, with tools that
                    bring ideas to life.
                </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex justify-center space-x-4">
                    <a
                        href="#get-started"
                        className="bg-white flex gap-2 justify-between text-blue-500 py-3 px-6 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
                    >
                        Start a whiteboard
                        <MoveRightIcon />
                    </a>
                    
                </div>

                {/* Hero Image */}
                <div className="mt-10">
                    <img
                        src="/images/heroimage.png"
                        alt="Boardy app in action"
                        className="mx-auto rounded-lg shadow-lg w-full md:w-3/5"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
