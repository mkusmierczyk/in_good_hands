import React, {Component} from "react";


export const Step5 = ({dataStep1, dataStep2, dataStep3, dataStep4}) => {

    console.log(dataStep1);
    console.log(dataStep2);
    console.log(dataStep3);
    console.log(dataStep4);


    return (
        <>

            <div className=" col-10 giving__form__info__step ">
                <h1 className="giving__form__info__step__title">Podsumowanie Twojej darowizny</h1>
            </div>
            <div>
                <h2>Oddajesz</h2>
                <p>{dataStep2}</p>
                <p> dla lokalizacji {dataStep3[0]}</p>
            </div>

            <div className="giving__form__info__step3__address">
                <p> Adres </p>
                <h2>Ulica:</h2>
                <span>{dataStep4[0]}</span>
                <h2 >Miasto:</h2>
                <span>{dataStep4[1]}</span>
                <h2>Kod pocztowy:</h2>
                <span>{dataStep4[2]}</span>
                <h2>Numer Telefonu:</h2>
                <span>{dataStep4[3]}</span>
            </div>

            <div className="giving__form__info__step3__receiptDate">
                <h2> Termin Odbioru</h2>
                <h2>Data:</h2>
                <span>{dataStep4[4]}</span>
                <h2>Godzina:</h2>
                <span>{dataStep4[5]}</span>
                <h2>Uwagi dla Kuriera:</h2>
                <span>{dataStep4[6]}</span>
            </div>
        </>
    )
}