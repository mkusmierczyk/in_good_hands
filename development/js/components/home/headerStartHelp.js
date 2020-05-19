import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";


export const StartHelp = () => {

    return (<>
        <div className="col-12">
            <div className="col-12">
                <h1 > Zacznij pomogać !<span > Oddaj niechciane rzeczy w zaufane ręce </span></h1>
                <span > obrazek</span>
            </div>
            <div className="row">
                <button className= "col-6"> <Link to={"/LogIn"}>  ODDAJ RZECZY </Link></button>
            <button className="col-6"> <Link to={"/LogIn"}> ZORGANIZUJ ZBIÓRKĘ </Link> </button>
            </div>
        </div>
    </>)
}