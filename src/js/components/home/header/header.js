import React, {Component} from "react";
import {HeaderSignInLog} from "./headerSignInLog";
import {HeaderMenu} from "./headerMenu";
import {StartHelp} from "./headerStartHelp";
import HomeHeroImage from "../../../../images/assets/Home-Hero-Image.jpg"

export const Header = ({decoration}) => {

    const style = {
        backgroundImage: `url(${HomeHeroImage})`
    }
    return (<>
            <div className="row header">
                <div className="col-6 header__picture" style={style}></div>
                <div className="col-6 header__content">
                    <HeaderSignInLog/>
                    <HeaderMenu/>
                    <StartHelp decoration={decoration}/>
                </div>
            </div>
        </>
    )
}