import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";


export const HeaderSignInLog = () => {

    return (<>

            <div className="col-12 header__content__signInLog" id="signInLog">
                   <Link to={"/logIn"} className=" header__content__log">Zaloguj </Link>
                 <Link to={"/register"} className=" header__content__signIn"> Załóż konto </Link>

        </div>
    </>)
}