import React, {Component} from "react";
import ReactDOM from "react-dom";

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export const HeaderMenu = () => {

    let current = ()=> this.target.className.add("current")



    return (<>

            <ul className="col-12 header__content__menu">
                <Link className="header__content__menu__link " to="signInLog" smooth ={true} duration={1000} onClick={current}>Start</Link>
                <Link className="header__content__menu__link " to = "simpleSteps" smooth ={true} duration={1000} onClick={current}>O co chodzi?</Link>
                <Link className="header__content__menu__link" to = "aboutUs" smooth ={true} duration={1000}>O nas</Link>
                <Link className="header__content__menu__link" to = "fund" smooth ={true} duration={1000}>Fundacja i Organizacje</Link>
                <Link className="header__content__menu__link" to = "contact" smooth ={true} duration={1000}>Kontakt</Link>
            </ul>



    </>)
}