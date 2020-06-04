import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";
import '../sass/main.scss'
import {Home} from "./components/home/home";
import {Register} from "./components/registerLog/register";
import {SignIn} from "./components/registerLog/signIn";
import {LogOut} from "./components/registerLog/logOut";
import {Giving} from "./components/home/givingForm/giving";
import Decoration from "../images/assets/Decoration.svg"

const App = () => {
    return (
        <HashRouter>
            <Route exact path="/" component={Home}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/signIn" component={SignIn}/>
            <Route exact path="/logOut" component={LogOut}/>
            <Route exact path="/givingForm" component={Giving}/>
        </HashRouter>
    )
}
ReactDOM.render(<App/>, document.getElementById("app"));
