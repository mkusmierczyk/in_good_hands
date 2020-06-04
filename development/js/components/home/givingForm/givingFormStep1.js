import React, {Component, useEffect, useState} from "react";


export const Step1 = ({step1Data}) => {

    const [clothes, setClothes] = useState(false);
    const handleClickClothes = () => setClothes(!clothes);
    const [clothesNone, setClothesNone] = useState(false);
    const handleClickNone = () => setClothesNone(!clothesNone);
    const [toys, setToys] = useState(false);
    const handleClickToys = () => setToys(!toys);
    const [books, setBooks] = useState(false);
    const handleClickBooks = () => setBooks(!books);
    const [other, setOther] = useState(false);
    const handleClickOther = () => setOther(!other);
    const allCheckboxes = [clothes, clothesNone, toys, books, other];

    useEffect(() => {
        step1Data(allCheckboxes)
    }, [clothes, clothesNone, toys, books, other]);

    return (<>
            <div className="col-10 giving__form__info__step">
                <p className="giving__form__info__step__name">Krok 1/4 </p>
                <h1 className="giving__form__info__step__title">Zaznacz co chcesz oddać</h1>
                <label className="giving__form__info__step1__checkbox">ubrania, które nadają się do ponownego użycia
                    <input type="checkbox"/>
                    <span className="checkmark" onClick={handleClickClothes}> </span>
                </label>
                <label className="giving__form__info__step1__checkbox">ubrania, do wyrzucenia
                    <input type="checkbox"/>
                    <span className="checkmark" onClick={handleClickNone}> </span>
                </label>
                <label className="giving__form__info__step1__checkbox">zabawki
                    <input type="checkbox"/>
                    <span className="checkmark" onClick={handleClickToys}> </span>
                </label>
                <label className="giving__form__info__step1__checkbox">książki
                    <input type="checkbox"/>
                    <span className="checkmark" onClick={handleClickBooks}> </span>
                </label>
                <label className="giving__form__info__step1__checkbox">Inne
                    <input type="checkbox"/>
                    <span className="checkmark" onClick={handleClickOther}> </span>
                </label>
            </div>
        </>
    )
};