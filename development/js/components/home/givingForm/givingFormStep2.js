import React, {Component} from "react";


export const Step2 = () => {

    return (<>
            <div className=" col-10 giving__form__info__step ">
                <p className="giving__form__info__step__name">Krok 2/4 </p>
                <h1 className="giving__form__info__step__title">Podaj liczbę 60l worków, w które spakowałeś/aś
                    rzeczy:</h1>
                <div>

                    <p>Liczba 60l worków</p>
                    <div className="custom-select">
                        <select>
                            <option value="0">-Wybierz-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>

            </div>

        </>

    )
}