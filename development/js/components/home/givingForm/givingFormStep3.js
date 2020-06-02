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
                <h1 className="giving__form__info__step--subtitle">Komu Chcesz pomóc</h1>
                <div className="giving__form__info__step3">
                <label className={`giving__form__info__step3__checkbox col-3 ${kids}`}  >dzieciom
                    <input type="checkbox" onClick={handleClickKids}/>

                </label>

                <label className={`giving__form__info__step3__checkbox col-3 ${mothers}`}  >samotnym matkom
                    <input type="checkbox"onClick={handleMothers}/>

                </label>

                <label className={`giving__form__info__step3__checkbox col-3 ${homeless}`} >bezdomnym
                    <input type="checkbox" onClick={handleHomeless}/>

                </label>

                <label className={`giving__form__info__step3__checkbox col-3 ${handicap}`} >niepełnosprawnym
                    <input type="checkbox"  onClick={handleHandicap}/>

                </label>

                <label className={`giving__form__info__step3__checkbox col-3 ${elderly}`}  >Osobom starszym
                    <input type="checkbox"onClick={handleElderly}/>

                </label>
                </div>
                <p className="giving__form__info__step3__description giving__form__info__step--subtitle" >Wpisz nazwę konkretnej organizacji (opcjonalnie):
                    <input type="text" id="org" name="org" {...setOrg}/></p>
            </div>


        </>

    )
};