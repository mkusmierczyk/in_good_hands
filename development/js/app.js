import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";
import '../sass/main.scss'
import {Home} from "./components/home/sections/home";
import {Register} from "./components/registerLog/register";
import {SignIn} from "./components/registerLog/signIn";





const App = () => {
    return (

       <HashRouter>

       <Route exact path = "/" component={Home}/>
           <Route exact path = "/register" component={Register}/>
           <Route exact path = "/signIn" component={SignIn}/>

       </HashRouter>


)
}

ReactDOM.render(<App/>, document.getElementById("app"));
