import React, {Component, useState} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";
import firebase from "firebase";


export const HeaderSignInLog = () => {

    const [hideLogout, setHideLogout] = useState("")

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
        firebase.analytics()
    }


    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            setHideLogout("")
        } else {
            console.log("not logged in")
            setHideLogout("hide")
        }
    });

    const btnLogout = () => {
        firebase.auth().signOut();
    }

    let loginDiv;
    if (hideLogout === "") {
        loginDiv = <div className="col-12 header__content__signInLog" id="signInLog"> <button className={`btn__logout btn col-1`} onClick={btnLogout}> Wyloguj</button></div>;
    } else {
        loginDiv = <div className="col-12 header__content__signInLog" id="signInLog"><Link to={"/signIn"} className=" header__content__log">Zaloguj </Link>
        <Link to={"/register"} className=" header__content__signIn"> Załóż konto </Link></div>
    }

    return (<>
            {loginDiv}
    </>)
}