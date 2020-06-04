import React, {Component} from "react";
import {HeaderSignInLog} from "./headerSignInLog";
import {HeaderMenu} from "./headerMenu";
import {StartHelp} from "./headerStartHelp";

export const Header = () => {
    return (<>
            <div className="row header">
                <div className="col-6 header__picture"> </div>
                <div className="col-6 header__content">
                    <HeaderSignInLog/>
                    <HeaderMenu/>
                    <StartHelp/>
                </div>
            </div>
        </>
    )
}