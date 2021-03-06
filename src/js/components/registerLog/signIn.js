import React, {Component, useState} from "react";
import {HeaderSignInLog} from "../home/header/headerSignInLog";
import {HeaderMenu} from "../home/header/headerMenu";
import useInput from "../hooks/useInput";
import {Link} from "react-router-dom";
import firebase, {Auth as auth} from "firebase/app";
import Decoration from "../../../images/assets/Decoration.svg"


export const SignIn = () => {
    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const btnLogin = (e) => {
        e.preventDefault()

        function checkEmail(emailAddress) {
            const reg = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
            return reg.test(emailAddress);
        }
        if (checkEmail(email) === false) {
            setErrorEmail("Email powinien być poprawny");
        } else
            setErrorEmail("")
        if (password.length < 6) {
            setErrorPassword("Hasło jest za krótkie");
        } else {
            setErrorPassword("")
        }
        if (checkEmail(email) === true && password.length >= 6) {
            const auth = firebase.auth();
            const promise = auth.signInWithEmailAndPassword(email, password)
            promise.then(e => window.location.replace("/in_good_hands/build"))
            promise.catch(e => console.log(e.message));
        }
    };
    const decoration = {
        backgroundImage:`url(${Decoration})`
    }
    return (<>
        <div className="container">
            <HeaderSignInLog/>
            <HeaderMenu/>
            <div className="row">
                <div className="col-12 title">
                    <h1> Zaloguj się</h1>
                    <span className="decorationImage" style={decoration}> </span>
                </div>
            </div>
            <form className="register" onSubmit={btnLogin}>
                <div className="row registerForm ">
                    <label className="col-3 registerForm__data">
                        Email:
                        <input type="email" name="email" placeholder="abc@xyz.pl" {...setEmail}/>
                        {errorEmail.length > 0 && <p className="error">{errorEmail}</p>}
                    </label>
                    <label className="col-3 registerForm__data">
                        Hasło :
                        <input type="password" name="password" {...setPassword}/>
                        {errorPassword.length > 0 && <p className="error">{errorPassword}</p>}
                    </label>
                </div>
                <div className="row registerForm__btns">
                    <Link to={"/register"} className={`col-3 registerForm__btn__register btn`}> Załóż konto </Link>
                    <input className=" col-3 registerForm__btn__log btn " type="submit" value="Zaloguj się"
                    />
                </div>
            </form>
        </div>
    </>)
}