import React, {Component, useState} from "react";
import useInput from "../../hooks/useInput"


export const FooterContact = ({decoration}) => {
//add State to input

    const [name, setFormName] = useInput("");
    const [email, setFormEmail] = useInput("");
    const [message, setMessage] = useInput("");
//add errors

    const [errorName, setErrorName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [errorServer, setErrorServer] = useState("");
    const [sendForm, setSendForm] = useState("");

    //Validation

    const handleSubmit = (e) => {
        e.preventDefault()
        function checkEmail(emailAddress) {
            const reg = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
            return reg.test(emailAddress);
        }

        if (name.indexOf(" ") !== -1) {
            setErrorName("Imię powinno być jednym wyrazem")}
        else
            setErrorName("")

        if (checkEmail(email) === false) {
            setErrorEmail("Email powinien być poprawny")}
        else
            setErrorEmail("")

        if (message.length < 120) {
            setErrorMessage("Wiadomość musi mieć conajmniej 120 znaków")}
        else
            setErrorMessage("")

        if (name.indexOf(" ") === -1 && checkEmail(email) === true && message.length >= 120){
        const formToSend = {
            name: name,
            email: email,
            message: message,
        };

        //Connect with server
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formToSend)
            })
                .then(resp => setSendForm(resp))
                .catch(err => setErrorServer(err))}
    };

    return (<>
        <div className="col-4 footer__contact">
            <div className="footer__contact__title title">
                <h1>Skontaktuj się z nami</h1>
                <span className="whoWeHelp__header__image decorationImage"style={decoration}> </span>
            </div>
            {sendForm.status === 200 && <p className="formSent"> Wiadomość została wysłana! <span>Wkrótce się skontaktujemy </span></p>}

            <form className="footer__contact__form" onSubmit={handleSubmit}>
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
                        <textarea name="textArea" {...setMessage}
                                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                        {errorMessage.length > 0 && <p className="error">{errorMessage}</p>}
                    </label>
                </div>
                <div className="footer__contact__submit">
                    <input className="footer__contact__submit__btn btn" type="submit" value="Wyślij" />
                </div>
            </form>
        </div>
    </>)
};