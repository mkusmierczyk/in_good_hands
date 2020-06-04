import React, {Component} from "react";
import Facebook from "../../../../images/assets/Facebook.svg"
import Instagram from "../../../../images/assets/Instagram.svg"

export const FooterCopyright = () => {
    return (<>
        <div className="row footer__copyright">
            <p className="col-6"> Copyright by Coders Lab</p>
            <div className="col-1 footer__copyright__icons">
                <a href="#"> <img src={Facebook} alt="facebook icon"/> </a>
                <a href="#"> <img src={Instagram} alt="instagram icon"/> </a>
            </div>
        </div>
    </>)
}