import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";


export const FooterContact = () => {

    return (<>
        <div className="footer__contact__title title">
            <h1>Skontaktuj się z nami</h1>
            <span className="whoWeHelp__header__image decorationImage"> </span>
        </div>

        <form className="footer__contact__form">
           <div className="row  ">
            <label className="col-6 footer__contact__name" >
                Wpisz swoje Imię:
                <input type="text" name="name"/>
            </label>
            <label className=" col-6 footer__contact__email" >
                Wpisz swój email :
                <input type="email" name="email"/>
            </label >
           </div>
            <div className="footer__contact__textArea">
            <label>
                Wpisz swoją wiadmość :
                <textarea name="text"/>
            </label>
            </div>
            <input className="footer__contact__submit" type="submit" value="Wyślij"/>

        </form>
    </>)
}