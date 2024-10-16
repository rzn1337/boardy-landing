// import { MoveRightIcon } from "lucide-react";
// import Button from "../Button";

// const Hero = () => {
//     return (
//         <section className="bg-black text-white text-center py-20" id="hero">
//             <div className="container mx-auto px-4 py-15">
//                 <div className="pt-20 pb-5">
//                     <h1 className=" text-4xl md:text-5xl font-sans mb-4 px-10 py-5">
//                         Innovate in Real-Time with boardy.
//                     </h1>
//                     <p className="text-lg md:text-xl font-thin mb-8">
//                         Your remote team's all-in-one whiteboard for seamless
//                         collaboration. Real-time, infinite canvas, with tools
//                         that bring ideas to life.
//                     </p>
//                 </div>

                
//                 <div className="flex justify-center space-x-4">
//                     <Button label="Start a whiteboard" style="text-lg bg-gray-200">
//                         <MoveRightIcon />
//                     </Button>
//                 </div>
//                 <div className="mt-10">
//                     <img
//                         src="/images/heroimage.png"
//                         alt="Boardy app in action"
//                         className="mx-auto rounded-lg shadow-lg w-full md:w-3/5"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;


import { MoveRightIcon } from "lucide-react";
import Button from "../Button";

const Hero = () => {
    return (
        <section className="bg-black text-white text-center py-24" id="hero">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-4xl mx-auto text-center pt-10 pb-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                        Innovate in Real-Time with <span className="text-red-400">boardy</span>.
                    </h1>
                    <p className="text-lg md:text-xl font-light mb-12 leading-relaxed max-w-3xl mx-auto text-gray-300">
                        Your remote team's all-in-one whiteboard for seamless collaboration. Real-time, infinite canvas, with tools that bring ideas to life.
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

                <div className="mt-10">
                    <img
                        src="/images/heroimage.png"
                        alt="Boardy app in action"
                        className="mx-auto rounded-2xl shadow-2xl w-full lg:w-2/3 transform hover:scale-105 transition-transform"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

