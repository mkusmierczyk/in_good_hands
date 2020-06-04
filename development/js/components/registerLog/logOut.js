import React, {Component} from "react";
import {HeaderSignInLog} from "../home/header/headerSignInLog";
import {HeaderMenu} from "../home/header/headerMenu";
import {Link} from "react-router-dom";

export const LogOut = () => {
    return (
        <>
            <HeaderSignInLog/>
            <HeaderMenu/>
            <div className="row">
                <div className="logOut col-12 title">
                    <h1> Wylogowanie nastąpiło <span>pomyślnie!</span></h1>
                    <span className=" decorationImage"> </span>
                </div>
            </div>
            <div className="logOut__btn__menu">
            <Link to={'/'} > Strona Główna </Link>
            </div>
        </>
    )
}