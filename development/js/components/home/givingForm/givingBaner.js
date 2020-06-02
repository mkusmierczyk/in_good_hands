import React, {Component} from "react";


export const Banner = ({showStep}) => {

    return (<>
            {showStep >= 5 ? <></> :
                <div className=" givingBanner ">
                    <h1 className="row givingBanner__title title">Ważne! </h1>
                    {(showStep === 1) &&
                    <p className="row givingBanner__text"> Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu
                        będziemy
                        wiedzieć komu najlepiej je przekazać.</p>}
                    {(showStep === 2) &&
                    <p className="row givingBanner__text">Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną
                        instrukcję jak poprawnie spakować rzeczy znajdziesz <a href="#"> TUTAJ</a>. </p>}
                    {(showStep === 3) &&
                    <p className="row givingBanner__text">Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej
                        organizacji
                        w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy. </p>}
                    {(showStep === 4) &&
                    <p className="row givingBanner__text">Podaj adres oraz termin odbioru rzeczy. </p>}
                </div>
            }

        </>
    )
}