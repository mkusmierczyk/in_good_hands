import React, {Component} from "react";
import {HeaderSignInLog} from "../header/headerSignInLog";
import {HeaderMenu} from "../header/headerMenu";

import {Footer} from "../footer/footer";



export const GivingForm = () => {

    return (<>
            <div className="container">

                <div className="row givingForm">
                    <div className="col-6 givingForm__pic"> </div>
                    <div className="col-6 givingForm__content">
                        <HeaderSignInLog/>
                        <HeaderMenu/>
                        <p>asdsadasasdas</p>
                    </div>
                </div>

                <Footer/>
            </div>
        </>

    )
}