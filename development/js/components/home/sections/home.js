import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";
import {Header} from "../header/header";
import {ThreeColumns} from "./threeColumns";
import {SimpleSteps} from "./simpleSteps";
import {WhoWeHelp} from "./whoWeHelp";
import {AboutUs} from "./aboutUs";
import {Footer} from "../footer/footer";
import {HeaderSignInLog} from "../header/headerSignInLog";


export const Home = () => {

    function checkEmail(emailAddress) {
        const reg = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;

        return reg.test(emailAddress);
    }



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