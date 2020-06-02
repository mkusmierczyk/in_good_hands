import React, {Component} from "react";


export const PrevNextBtn = ({showStep, prevBtn, nextBtn}) => {

    return (<>
        {showStep === 1 &&
        <div className=" col-10 giving__form__info__step1--btn ">
            <button className=" col-2 giving__form__info__step1__btn " onClick={nextBtn}>Dalej</button>
        </div>
        }
        {showStep > 1 && showStep < 5 &&
        <div className=" col-10 giving__form__info__step1--btn ">
            <button className=" col-2 giving__form__info__step1__btn " onClick={prevBtn}>Wstecz</button>
            <button className=" col-2 giving__form__info__step1__btn " onClick={nextBtn}>Dalej</button>
        </div>
        }

        {showStep === 5 && <div className=" col-10 giving__form__info__step1--btn ">
            <button className=" col-2 giving__form__info__step1__btn " onClick={prevBtn}>Wstecz</button>
            <button className=" col-2 giving__form__info__step1__btn " onClick={nextBtn}>Potwierdz</button>
        </div>
        }


    </>)

}