import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";


export const StartHelp = () => {

    return (
        <div className="col-12 header__content__startHelp">
            <div className="col-12 header__content__startHelp__title title">
                <h1> Zacznij pomogać !<span> Oddaj niechciane rzeczy w zaufane ręce </span></h1>
                <span className="header__content__startHelp__title__image decorationImage"> </span>
            </div>
            <div className="row header__content__startHelp__btn ">
                <button className="col-6 btn"><Link to={"/LogIn"}> ODDAJ RZECZY </Link></button>
                <button className="col-6 btn"><Link to={"/LogIn"}> ZORGANIZUJ ZBIÓRKĘ </Link></button>
            </div>
        </div>
   )
}