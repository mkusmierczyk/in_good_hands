import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";


export const AboutUs = () => {

    return (<>
        <div className="row aboutUs">

            <div className="col-6 aboutUs__content ">
                <div className="aboutUs__content_title">
                    <h1> O nas </h1>
                    <span className="aboutUs__content__image"> </span>
                </div>
                <div className="row aboutUs__content__text">
                    <p> Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                        black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                </div>
                <div className="row aboutUs__signature">
                    <img src="./../../../images/assets/Signature.svg"/>
                </div>
            </div>


            <div className="col-6  aboutUs__picture"> </div>
        </div>
    </>)
}