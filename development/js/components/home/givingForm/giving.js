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
    const [showStep, setShowStep] = useState(1);
    const [dataStep1, setDataStep1] = useState("brak");
    const [dataStep2, setDataStep2] = useState("brak");
    const [dataStep3, setDataStep3] = useState("brak");


    const prevBtn = () => {
        showStep === 1 ? setShowStep(1) : setShowStep(showStep - 1)
    };

    const nextBtn = () => {
        showStep === 4 ? setShowStep(4) : setShowStep(showStep + 1)
    };


    const step1Data = (checkboxes) => {
        return setDataStep1(checkboxes)
    }

    const step2Data = (bags) => {
        return setDataStep2(bags)
    }

    const step3Data = (receipt) => {
        return setDataStep3(receipt)
    }


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
                <Banner showStep={showStep}/>
                <div className="row giving__form">
                    <div className="col-7 giving__form__info">
                        <div className="row">
                            <div className="col-2"></div>
                            {(showStep === 1) && <Step1 step1Data={step1Data}/>}
                            {(showStep === 2) && <Step2 step2Data={step2Data}/>}
                            {(showStep === 3) && <Step3 step3Data = {step3Data}/>}
                            {(showStep === 4) && <Step4 dataStep1={dataStep1} dataStep2={dataStep2} dataStep3={dataStep3}/>}

                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <PrevNextBtn showStep={showStep} prevBtn={prevBtn} nextBtn={nextBtn}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>

    )
}