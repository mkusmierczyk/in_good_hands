import React, {Component, useEffect, useState} from "react";
import useInput from "../../hooks/useInput";


export const Step3 = ({step3Data}) => {
    const [city, setCity] = useInput("");
    const[org,setOrg]=useInput("");

    const [kids, setKids] = useState(false);
    const handleClickKids = () => setKids(!kids);

    const [mothers, setMothers] = useState(false);
    const handleMothers = () => setMothers(!mothers);

    const [homeless, setHomeless] = useState(false);
    const handleHomeless = () => setHomeless(!homeless);

    const [handicap, setHandicap] = useState(false);
    const handleHandicap = () => setHandicap(!handicap);

    const [elderly, setElderly] = useState(false);
    const handleElderly = () => setElderly(!elderly);

    const allData = [city, org, kids, mothers, homeless,handicap,elderly];


    useEffect(()=>{
        step3Data(allData)

    },[city, org, kids, mothers, homeless,handicap,elderly]);

    return (
        <>

            <div className=" col-10 giving__form__info__step ">
                <p className="giving__form__info__step__name">Krok 3/4 </p>
                <h1 className="giving__form__info__step__title">Lokalizacja</h1>
                <div className="giving__form__info__step3__select">
                    <select {...setCity}>
                        <option value="--Wybierz--"> --Wybierz--</option>
                        <option value="Poznań">Poznań</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Katowice">Katowice</option>
                    </select>
                </div>
                <h1 className="giving__form__info__step__title">Komu Chcesz pomóc</h1>
                <label className="giving__form__info__step1__checkbox">dzieciom
                    <input type="checkbox"/>
                    <span className="checkmark" onClick={handleClickKids}> </span>
                </label>

                <label className="giving__form__info__step1__checkbox">samotnym matkom
                    <input type="checkbox"/>
                    <span className="checkmark" onClick={handleMothers}> </span>
                </label>

                <label className="giving__form__info__step1__checkbox">bezdomnym
                    <input type="checkbox"/>
                    <span className="checkmark" onClick={handleHomeless}> </span>
                </label>

                <label className="giving__form__info__step1__checkbox">niepełnosprawnym
                    <input type="checkbox"/>
                    <span className="checkmark" onClick={handleHandicap}> </span>
                </label>

                <label className="giving__form__info__step1__checkbox">Osobom starszym
                    <input type="checkbox"/>
                    <span className="checkmark" onClick={handleElderly}> </span>
                </label>

                <label htmlFor="org">Wpisz nazwę konkretnej organizacji (opcjonalnie):
                    <input type="text" id="org" name="org" {...setOrg}/></label>
            </div>


        </>

    )
};