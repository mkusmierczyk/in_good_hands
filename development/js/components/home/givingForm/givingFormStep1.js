import React, {Component} from "react";


export const Step1 = () => {

    return (<>
            <div className=" col-10 giving__form__info__step1 ">
                <p className="giving__form__info__step1__name">Krok 1/4 </p>

                <h1 className="giving__form__info__step1__title">Zaznacz co chcesz oddać</h1>
                <label className="giving__form__info__step1__checkbox">ubrania, które nadają się do ponownego użycia
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>

                <label className="giving__form__info__step1__checkbox">ubrania, do wyrzucenia
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>

                <label className="giving__form__info__step1__checkbox">zabawki
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>

                <label className="giving__form__info__step1__checkbox">książki
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>

                <label className="giving__form__info__step1__checkbox">Inne
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>


            </div>

        </>

    )
}