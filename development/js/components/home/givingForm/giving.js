import React, {Component, useState} from "react";
import {HeaderSignInLog} from "../header/headerSignInLog";
import {HeaderMenu} from "../header/headerMenu";

import {Footer} from "../footer/footer";
import {GivingMainContent} from "./givingMainContent";
import {Banner} from "./givingBaner";
import {Step1} from "./givingFormStep1";
import {PrevNextBtn} from "./prevNextBtn";
import {Step2} from "./givingFormStep2";
import {Step3} from "./givingFormStep3";
import {Step4} from "./givingFormStep4";


export const Giving = () => {
    const [showStep, setShowStep] = useState(1)


    const prevBtn = ()=>{
        showStep===1 ? setShowStep(1): setShowStep(showStep-1)
        console.log(showStep);
    }

    const nextBtn = ()=>{
        showStep===4 ? setShowStep(4): setShowStep(showStep+1)
        console.log(showStep);
    }





    return (<>
            <div className="container">

                <div className="row giving ">
                    <div className="col-6 giving__pic"></div>
                    <div className="col-6 giving__content">
                        <HeaderSignInLog/>
                        <HeaderMenu/>
                        <GivingMainContent />
                    </div>
                </div>
                <Banner showStep={showStep}/>
                <div className="row giving__form">
                    <div className="col-7 giving__form__info">
                        <div className="row">
                            <div className="col-2"> </div>
                            { (showStep ===1)&& <Step1/>}
                            { (showStep ===2)&& <Step2/>}
                            { (showStep ===3)&& <Step3/>}
                            { (showStep ===4)&& <Step4/>}

                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <PrevNextBtn showStep={showStep} prevBtn={prevBtn} nextBtn = {nextBtn}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>

    )
}