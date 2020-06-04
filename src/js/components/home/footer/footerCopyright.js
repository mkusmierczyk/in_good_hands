import React, {Component} from "react";

export const FooterCopyright = () => {
    return (<>
        <div className="row footer__copyright">
            <p className="col-6"> Copyright by Coders Lab</p>
            <div className="col-1 footer__copyright__icons">
                <a href="#"> <img src="../../../../images/assets/Facebook.svg" alt="facebook icon"/> </a>
                <a href="#"> <img src="../../../../images/assets/Instagram.svg" alt="instagram icon"/> </a>
            </div>
        </div>
    </>)
}