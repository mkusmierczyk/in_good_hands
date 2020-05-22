import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";


export const SimpleSteps = () => {

    return (<>
        <div className=" row simpleSteps" id="simpleSteps">
            <h1 className="col-12 simpleSteps__title title "> Wystarczą 4 proste kroki</h1>
            <span className="col-12 decorationImage"> </span>
        </div>
        <div className="row simpleSteps--all">
            <div className=" col-12 simpleSteps__content">
                <img src="../../../../images/assets/Icon-1.svg"/>
                <p className="simpleSteps__content_text"> Wybierz rzeczy</p>
                <span > </span>
                <p className="simpleSteps__content_description">skorzystaj z worków na śmieci</p>
            </div>


            <div className=" col-12 simpleSteps__content icon2 ">
                <img src="../../../../images/assets/Icon-2.svg"/>
                <p className="simpleSteps__content_text " > Spakuj je </p>
                <span></span>
                <p className="simpleSteps__content_description">skorzystaj z worków na śmieci</p>

            </div>

            <div className=" col-12 simpleSteps__content">
                <img src="../../../../images/assets/Icon-3.svg"/>
                <p className="simpleSteps__content_text"> Zdecyduj komu chcesz pomóc</p>
                <span></span>
                <p className="simpleSteps__content_description">wybierz zaufane miejsce</p>

            </div>
            <div className=" col-12 simpleSteps__content">
                <img src="../../../../images/assets/Icon-4.svg"/>
                <p className="simpleSteps__content_text"> Zamów kuriera</p>
                <span></span>
                <p className="simpleSteps__content_description">kurier przyjedzie w dogodnym terminie</p>

            </div>
        </div>
        <div className="row simpleSteps--btn">
            <button className="btn"><Link to={"/LogIn"}> ODDAJ RZECZY </Link></button>
        </div>

    </>)
}