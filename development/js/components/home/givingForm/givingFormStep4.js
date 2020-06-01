

import React, {Component, useEffect} from "react";
import useInput from "../../hooks/useInput";


export const Step4 = ({step4Data}) => {


    const [street, setStreet]= useInput("");
    const [city, setCity]= useInput("");
    const [postalCode, setPostalCode]= useInput("");
    const [phone, setPhone]= useInput("");
    const [date, setDate]= useInput("");
    const [hour, setHour]= useInput("");
    const [comments, setComments]= useInput("");

    const receipt = [street, city, postalCode, phone, date, hour,comments];


    useEffect(()=>{
        step4Data(receipt)

    },[street,city,postalCode,phone,date,hour,comments]);


    return (
        <>
            <div className=" col-10 giving__form__info__step ">
                <p className="giving__form__info__step__name">Krok 4/4 </p>
                <h1 className="giving__form__info__step__title">Podaj adres oraz termin odbioru rzecz przez kuriera</h1>
                <div className="giving__form__info__step4">
                    <form  className="giving__form__info__step4__address" >
                        <p> Adres </p>
                        <label htmlFor="street">Ulica:
                            <input type="text" id="street" name="street" {...setStreet}/></label>
                        <label htmlFor="city">Miasto:
                            <input type="text" id="city" name="city" {...setCity}/></label>
                        <label htmlFor="postal">Kod pocztowy:
                            <input type="text" id="postal" name="postal" {...setPostalCode}/></label>
                        <label htmlFor="phone">Numer Telefonu:
                            <input type="text" id="phone" name="phone" {...setPhone}/></label>
                    </form>

                    <form  className="giving__form__info__step4__receiptDate" >
                        <p> Termin Odbioru</p>
                        <label htmlFor="date" >Data:
                            <input type="text" id="date" name="date" {...setDate}/></label>
                        <label htmlFor="hour">Godzina:
                            <input type="text" id="hour" name="hour" {...setHour}/></label>
                        <label htmlFor="comments">Uwagi dla Kuriera:
                            <input type="textarea" id="comments" name="comments" {...setComments}/></label>

                    </form>
                </div>
            </div>

        </>

    )
};