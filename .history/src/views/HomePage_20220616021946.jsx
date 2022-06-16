import React from 'react'
import Home from"./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import NavBar from "../components/NavBar";

const HomePage = (props) => {
    return (
        <React.Fragment>
            <NavBar currentLocale={props.currentLocale}
                    handleChange={props.handleChange} />
            <Home />
            <About />
            <Work />
            <Contact/>
        </React.Fragment>
    )
}

export default HomePage