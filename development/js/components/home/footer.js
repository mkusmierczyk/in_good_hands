import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";
import {FooterContact} from "./footerContact";




export const Footer = ()=>{

    return (<>
        <div className="row footer">
            <div className="col-8 footer__picture"> </div>
            <div className="col-4 header__contact">
                <FooterContact/>

            </div>
        </div>
    </>)
}