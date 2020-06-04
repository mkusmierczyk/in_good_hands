import React, {Component} from "react";
import {HeaderSignInLog} from "../home/header/headerSignInLog";
import {HeaderMenu} from "../home/header/headerMenu";
import {Link} from "react-router-dom";
import Decoration from "../../../images/assets/Decoration.svg";

export const LogOut = () => {
    const decoration = {
        backgroundImage:`url(${Decoration})`
    }
    return (
        <>
            <HeaderSignInLog/>
            <HeaderMenu/>
            <div className="row">
                <div className="logOut col-12 title">
                    <h1> Wylogowanie nastąpiło <span>pomyślnie!</span></h1>
                    <span className=" decorationImage" style={decoration}> </span>
                </div>
            </div>
            <div className="logOut__btn__menu">
            <Link to={'/'} > Strona Główna </Link>
            </div>
        </>
    )
}