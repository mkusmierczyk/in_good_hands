import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";
import {FooterContact} from "./footerContact";
import {FooterCopyright} from "./footerCopyright";

export const Footer = () => {
    return (<>
        <div className="row footer" id="contact">
            <div className="col-8 footer__picture"></div>
            <FooterContact/>
        </div>
        <FooterCopyright/>
    </>)
};