import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import Aos from "aos";
import 'aos/dist/aos.css';
import Curtains from "./components/Curtains/Curtains";

function App() {
    Aos.init();
    return (
        <>
            <Curtains/>
            <Navbar />
            <HomePage />
            <Footer />
        </>
    );
}

export default App;
