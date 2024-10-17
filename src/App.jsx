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
            <nav>
                <Navbar />
            </nav>
            <main>
                <Hero />
                <Partners />
                <Features />
                <Testimonials />
                <Pricing />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;
