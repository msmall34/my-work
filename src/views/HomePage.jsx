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
            <Home currentLocale={props.currentLocale}/>
            <About currentLocale={props.currentLocale}/>
            <Work currentLocale={props.currentLocale}/>
            <Contact currentLocale={props.currentLocale}/>
        </React.Fragment>
    )
}

export default HomePage