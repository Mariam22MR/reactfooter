import { Fragment } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Contact from "./components/pages/contact";


function App() {
    return (
        <Fragment>
            <Contact />
            <Footer />
        </Fragment>
    );
}

export default App;