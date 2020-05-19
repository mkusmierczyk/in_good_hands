import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";


export const StartHelp = () => {

    return (<>
        <div className="row">
            <div className="col-12">
                <button> <Link to={"/logIn"}>Zaloguj </Link></button>
                <button> <Link to={"/register"}> Załóż konto </Link> </button>
            </div>

        </div>
    </>)
}