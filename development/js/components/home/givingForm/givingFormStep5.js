import React, {Component} from "react";


export const Step5 = ({dataStep1, dataStep2, dataStep3, dataStep4}) => {

    console.log(dataStep1);
    console.log(dataStep2);
    console.log(dataStep3);
    console.log(dataStep4);


    return (
        <>

            <div className=" col-10 giving__form__info__step step5 ">
                <h1 className="giving__form__info__step__title">Podsumowanie Twojej darowizny</h1>


                <div className="giving__form__info__step5__localization ">
                    <p>Oddajesz</p>
                    <p><img src="../../../../images/assets/Icon-1.svg"/> {dataStep2} worki {dataStep1}</p>
                    <p><img src="../../../../images/assets/Icon-4.svg"/> dla lokalizacji {dataStep3[0]}</p>
                </div>

                <div className="giving__form__info__step5--twoColumns row ">
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