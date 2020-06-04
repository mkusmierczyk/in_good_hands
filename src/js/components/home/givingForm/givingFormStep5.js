import React, {Component} from "react";

export const Step5 = ({dataStep1, dataStep2, dataStep3, dataStep4}) => {

    const things = dataStep1
    if (dataStep1[0] === true) {
        dataStep1[0] = "ubrania, które nadają się do ponownego użycia"
    }
    if (dataStep1[1] === true) {
        dataStep1[1] = "ubrania, do wyrzucenia"
    }
    if (dataStep1[2] === true) {
        dataStep1[2] = "zabawki"
    }
    if (dataStep1[3] === true) {
        dataStep1[3] = "książki"
    }
    if (dataStep1[4] === true) {
        dataStep1[4] = "Inne"
    }

    const whom = dataStep3
    if (dataStep3[2] === true) {
        dataStep3[2] = "dzieciom"
    }
    if (dataStep3[3] === true) {
        dataStep3[3] = "samotnym matkom"
    }
    if (dataStep3[4] === true) {
        dataStep3[4] = "bezdomnym"
    }
    if (dataStep3[5] === true) {
        dataStep3[5] = "niepełnosprawnym"
    }
    if (dataStep3[6] === true) {
        dataStep3[6] = "osobom starszym"
    }

    return (
        <>
            <div className="col-10 giving__form__info__step step5 ">
                <h1 className="giving__form__info__step__title">Podsumowanie Twojej darowizny</h1>
                <div className="giving__form__info__step5__localization ">
                    <p>Oddajesz</p>
                    <p><img src="../../../../images/assets/Icon-1.svg" alt="icon1"/> {dataStep2} worki, {things} <span>{dataStep3[2]}</span><span>{dataStep3[3]}</span><span>{dataStep3[4]}</span><span>{dataStep3[5]}</span><span>{dataStep3[6]}</span></p>
                    <p><img src="../../../../images/assets/Icon-4.svg" alt="icon4"/> dla lokalizacji {dataStep3[0]}</p>
                </div>
                <div className="giving__form__info__step5--twoColumns row">
                    <div className="giving__form__info__step5__address col-6">
                        <p> Adres </p>
                        <h2>Ulica: <span>{dataStep4[0]}</span></h2>
                        <h2>Miasto:<span>{dataStep4[1]}</span></h2>
                        <h2>Kod pocztowy: <span>{dataStep4[2]}</span></h2>
                        <h2>Numer Telefonu:<span>{dataStep4[3]}</span></h2>
                    </div>
                    <div className="giving__form__info__step5__receiptDate col-6">
                        <p> Termin Odbioru</p>
                        <h2>Data: <span>{dataStep4[4]}</span></h2>
                        <h2>Godzina: <span>{dataStep4[5]}</span></h2>
                        <h2>Uwagi dla Kuriera: <span>{dataStep4[6]}</span></h2>
                    </div>
                </div>
            </div>
        </>
    )
}