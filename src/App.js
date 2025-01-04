import { Fragment } from "react";
import "./App.css";
import Footer from "./components2/Footers/Footer";
import Footer from "./components2/Footers/Footer2";
import Contact from "./components2/pages/Contact";
import ProductCard from "./components2/pages/ProductCard"



function App() {
    return (
        <>
            <Contact />
            <Footer2 />
            <ProductCard />
            <Footer />
        </>
    );
}

export default App;
