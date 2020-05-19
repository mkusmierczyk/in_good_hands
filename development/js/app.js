import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";
import '../sass/main.scss'
import {Home} from "./components/home/home";





const App = () => {
    return (

       <HashRouter>

       <Route exact path = "/" component={Home}/>

       </HashRouter>


)
}

ReactDOM.render(<App/>, document.getElementById("app"));
