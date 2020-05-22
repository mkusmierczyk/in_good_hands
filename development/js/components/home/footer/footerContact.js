import React, {Component, useEffect, useState} from "react";
import useInput from "../../hooks/useInput"


export const FooterContact = () => {

    const [name, setFormName] = useInput("")
    const [email, setFormEmail] = useInput("")
    const [message, setMessage] = useInput("")

    const [errorName, setErrorName] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [errorServer, setErrorServer] = useState("")
    const [sendForm, setSendForm] = useState("")

    const validation = (e) => {
        e.preventDefault()

        function checkEmail(emailAddress) {
            const sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
            const sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
            const sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
            const sQuotedPair = '\\x5c[\\x00-\\x7f]';
            const sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
            const sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
            const sDomain_ref = sAtom;
            const sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
            const sWord = '(' + sAtom + '|' + sQuotedString + ')';
            const sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
            const sLocalPart = sWord + '(\\x2e' + sWord + ')*';
            const sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
            const sValidEmail = '^' + sAddrSpec + '$'; // as whole string

            const reValidEmail = new RegExp(sValidEmail);

            return reValidEmail.test(emailAddress);
        }

        if (name.indexOf(" ") !== -1) {
            setErrorName("Imię powinno być jednym wyrazem");}
        else
            setErrorName("")


        if (checkEmail(email) === false) {
            setErrorEmail("Email powinien być poprawny");}
        else
            setErrorEmail("")


        if (message.length < 120) {
            setErrorMessage("Wiadomość musi mieć conajmniej 120 znaków");}
        else
            setErrorMessage("")


    }





    const handleSubmit = (e) => {
        e.preventDefault()

        const formToSend = {
            name: name,
            email: email,
            message: message,
        }


            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formToSend)
            })
                .then(resp => setSendForm(resp))

                .catch(err => setErrorServer(err))
    }



    return (<>
        <div className="col-4 footer__contact">
            <div className="footer__contact__title title">
                <h1>Skontaktuj się z nami</h1>
                <span className="whoWeHelp__header__image decorationImage"> </span>
            </div>
            {sendForm.status === 200 && <p className="formSent"> Wiadomość została wysłana! <span>Wkrótce się skontaktujemy </span></p>}

            <form className="footer__contact__form" onClick={validation}>

                <div className="row  ">
                    <label className="col-6 footer__contact__data">
                        Wpisz swoje Imię:
                        <input type="text" name="name" placeholder="Krzysztof" {...setFormName}/>
                        {errorName.length > 0 && <p className="error">{errorName}</p>}
                    </label>
                    <label className=" col-6 footer__contact__data">
                        Wpisz swój email :
                        <input type="email" name="email" placeholder="abc@xyz.pl" {...setFormEmail}/>
                        {errorEmail.length > 0 && <p className="error">{errorEmail}</p>}
                    </label>
                </div>
                <div className="footer__contact__textArea">
                    <label>
                        Wpisz swoją wiadmość :
                        <textarea name="text" name="textArea" {...setMessage}
                                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                        {errorMessage.length > 0 && <p className="error">{errorMessage}</p>}
                    </label>
                </div>

                <div className="footer__contact__submit">

                    <input className="footer__contact__submit__btn btn" type="submit" value="Wyślij" onClick={handleSubmit}/>
                </div>
            </form>
        </div>
    </>)
}