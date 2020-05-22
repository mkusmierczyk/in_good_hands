import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";


export const FooterContact = () => {

    return (<>
        <div className="col-4 footer__contact">
        <div className="footer__contact__title title">
            <h1>Skontaktuj się z nami</h1>
            <span className="whoWeHelp__header__image decorationImage"> </span>
        </div>

        <form className="footer__contact__form">
            <div className="row  ">
                <label className="col-6 footer__contact__data" >
                    Wpisz swoje Imię:
                    <input type="text" name="name" placeholder="Krzysztof"/>
                </label>
                <label className=" col-6 footer__contact__data" >
                    Wpisz swój email :
                    <input type="email" name="email" placeholder="abc@xyz.pl"/>
                </label>
            </div>
            <div className="footer__contact__textArea" >
                <label>
                    Wpisz swoją wiadmość :
                    <textarea name="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                </label>
            </div>

            <div className="footer__contact__submit">

                <input className="footer__contact__submit__btn btn" type="submit" value="Wyślij"/>
            </div>
        </form>
        </div>
    </>)
}