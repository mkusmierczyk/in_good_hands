import React, {Component} from "react";
import {HeaderSignInLog} from "../home/header/headerSignInLog";
import {HeaderMenu} from "../home/header/headerMenu";


export const Register = () => {

    return (<>
        <div className="container">

            <HeaderSignInLog/>
            <HeaderMenu/>

            <div className="row">
                <div className="col-12  title">
                    <h1> Załóż konto!</h1>
                    <span className=" decorationImage"> </span>
                </div>
            </div>

        </div>


    </>)
}
