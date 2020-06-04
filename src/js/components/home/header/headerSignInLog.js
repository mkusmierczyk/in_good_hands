import React, {Component, useEffect, useState} from "react";
import { Link} from "react-router-dom";
import firebase from "firebase/app";

export const HeaderSignInLog = () => {

    const [hideLogout, setHideLogout] = useState("");
    const [userEmail, setUserEmail]=useState("");

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

    useEffect(() => {
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log(firebaseUser, "czy to to");
                setUserEmail(firebaseUser.email)
                setHideLogout("")
            } else {
                console.log("not logged in")
                setHideLogout("hide")
            }
        });
    },[]);

    const btnLogout = () => {
        firebase.auth().signOut();
        window.location.replace("#/logOut")
    }
    let loginDiv;
    if (hideLogout === "") {
        loginDiv = <div className="col-12 header__content__signInLog" id="signInLog"><p>Witaj {userEmail}</p><Link to={"/givingForm"} className=" col-2 give"> Oddaj rzeczy</Link> <button className={`btn__logout btn col-1`} onClick={btnLogout}> Wyloguj</button></div>;
    } else {
        loginDiv = <div className="col-12 header__content__signInLog" id="signInLog"><Link to={"/signIn"} className=" header__content__log">Zaloguj </Link>
        <Link to={"/register"} className=" header__content__signIn"> Załóż konto </Link></div>
    }
    return (<>
            {loginDiv}
    </>)
}