import React, {Component} from "react";
import {Header} from "./header/header";
import {ThreeColumns} from "./sections/threeColumns";
import {SimpleSteps} from "./sections/simpleSteps";
import {WhoWeHelp} from "./sections/whoWeHelp";
import {AboutUs} from "./sections/aboutUs";
import {Footer} from "./footer/footer";
import Decoration from "../../../images/assets/Decoration.svg";

export const Home = () => {

    const decoration = {
        backgroundImage:`url(${Decoration})`
    }

    return (
        <div className="container">
            <Header decoration={decoration} />
            <ThreeColumns/>
            <SimpleSteps  decoration={decoration}/>
            <AboutUs decoration={decoration}/>
            <WhoWeHelp decoration={decoration}/>
            <Footer decoration={decoration} />
        </div>
    )
}