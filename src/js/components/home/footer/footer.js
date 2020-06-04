import React, {Component} from "react";
import {FooterContact} from "./footerContact";
import {FooterCopyright} from "./footerCopyright";
import BackgroundContactForm from "../../../../images/assets/Background-Contact-Form.jpg"

export const Footer = ({decoration}) => {
    const style =  {
        backgroundImage: `url(${BackgroundContactForm})`
    }
    return (<>
        <div className="row footer" id="contact">
            <div className="col-8 footer__picture" style={style}></div>
            <FooterContact  decoration={decoration}/>
        </div>
        <FooterCopyright/>
    </>)
};