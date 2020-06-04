import React, {Component} from "react";
import {Header} from "./header/header";
import {ThreeColumns} from "./sections/threeColumns";
import {SimpleSteps} from "./sections/simpleSteps";
import {WhoWeHelp} from "./sections/whoWeHelp";
import {AboutUs} from "./sections/aboutUs";
import {Footer} from "./footer/footer";

export const Home = () => {
    return (
        <div className="container">
            <Header />
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutUs/>
            <WhoWeHelp/>
            <Footer />
        </div>
    )
}