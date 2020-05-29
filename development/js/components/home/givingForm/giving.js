import React, {Component} from "react";
import {HeaderSignInLog} from "../header/headerSignInLog";
import {HeaderMenu} from "../header/headerMenu";

import {Footer} from "../footer/footer";
import {GivingMainContent} from "./givingMainContent";
import {Banner} from "./givingBaner";
import {Step1} from "./givingFormStep1";
import {PrevNextBtn} from "./prevNextBtn";
import {Step2} from "./givingFormStep2";


export const Giving = () => {


    return (<>
            <div className="container">

                <div className="row giving ">
                    <div className="col-6 giving__pic"></div>
                    <div className="col-6 giving__content">
                        <HeaderSignInLog/>
                        <HeaderMenu/>
                        <GivingMainContent/>
                    </div>
                </div>
                <Banner/>
                <div className="row giving__form">
                    <div className="col-7 giving__form__info">
                        <div className="row">
                            <div className="col-2"></div>
                            {/*<Step1/>*/}
                            <Step2/>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <PrevNextBtn/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>

    )
}