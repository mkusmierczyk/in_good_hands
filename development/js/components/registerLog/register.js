import React, {Component, useEffect, useState} from "react";
import {HeaderSignInLog} from "../home/header/headerSignInLog";
import {HeaderMenu} from "../home/header/headerMenu";
import useInput from "../hooks/useInput";
import {Link} from "react-router-dom";


import 'firebase/firestore';
import firebase, {Auth as auth} from "firebase";

export const Register = () => {
    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");
    const [repeatPassword, setRepeatPassword] = useInput("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const firebaseConfig = {
        apiKey: "AIzaSyD1yLySe8Y4y4K9noGnoDXUUFSz7VWGDZA",
        authDomain: "in-good-hands-c41d2.firebaseapp.com",
        databaseURL: "https://in-good-hands-c41d2.firebaseio.com",
        projectId: "in-good-hands-c41d2",
        storageBucket: "in-good-hands-c41d2.appspot.com",
        messagingSenderId: "639688250702",
        appId: "1:639688250702:web:08a5da78f8fc1f0f1f7a1f",
        measurementId: "G-WZZ4J4NWHE"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    }
    const btnSignUp = () => {
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
        } else
            setErrorPassword("")

        if ( checkEmail(email) === true && password.length >= 6 && password===repeatPassword) {
            const auth = firebase.auth()
            let emailLogIn = email;
            let passwordLogIn = password
            const promise = auth.createUserWithEmailAndPassword(email, password)
            promise.then(e=> window.location.replace("#/"))
            promise.catch(e => console.log(e.message));
        }
    };
    return (<>
        <div className="container">
            <HeaderSignInLog/>
            <HeaderMenu/>
            <div className="row">
                <div className="col-12 title">
                    <h1> Załóż konto!</h1>
                    <span className="decorationImage"> </span>
                </div>
            </div>
            <form className="register" onSubmit={btnSignUp}>
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
                    <label className="col-3 registerForm__data" {...setRepeatPassword}>
                        Powtórz Hasło :
                        <input type="password" name="repeatPassword"/>
                        {password !== repeatPassword && <p className="error">Hasła są różne</p>}
                    </label>
                </div>
                <div className="row registerForm__btns  ">
                    <input className="col-1 registerForm__btn__register btn" type="submit" value="Załóż konto"/>
                    <Link to={"/signIn"} className="registerForm__btn__log btn">Zaloguj się </Link>
                </div>
            </form>
        </div>
    </>)
}