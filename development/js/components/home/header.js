import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";
import {HeaderSignInLog} from "./headerSignInLog";
import {HeaderMenu} from "./headerMenu";
import {StartHelp} from "./headerStartHelp";


export const Header = () => {

    return (<>
    <div className="row">
        <div className="col-5"> </div>
        <div className="col-7">
        <div className="row">
            <HeaderSignInLog/>
        </div>
        <div className="row">
            <HeaderMenu/>
        </div>
            <div className="row">
                <StartHelp/>
            </div>
    </div>
    </div>
</>
)
}