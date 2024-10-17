import {
    Hero,
    Navbar,
    Partners,
    Features,
    Footer,
    Pricing,
    Testimonials,
} from "./components";
import "./index.css";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Partners />
            <Features />
            <Testimonials />
            <Pricing />
            <Footer />
        </>
    );
}

export default App;
