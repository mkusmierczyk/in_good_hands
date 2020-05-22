import React, {Component, useState} from "react";
import {HeaderSignInLog} from "../home/header/headerSignInLog";
import {HeaderMenu} from "../home/header/headerMenu";
import useInput from "../hooks/useInput";


export const Register = () => {

    const [email, setEmail] = useInput("")
    const [password, setPassword] = useInput("")
    const [repeatPassword, setRepeatPassword] = useInput("")


    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")



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


            if (checkEmail(email) === false) {
                setErrorEmail("Email powinien być poprawny");
            } else
                setErrorEmail("")


            if (password.length < 6) {
                setErrorPassword("Hasło jest za krótkie");
            } else
                setErrorPassword("")


    }


    return (<>
        <div className="container">

            <HeaderSignInLog/>
            <HeaderMenu/>


            <div className="row">
                <div className="col-12  title">
                    <h1> Załóż konto!</h1>
                    <span className=" decorationImage"> </span>
                </div>
            </div>
            <form className=" register" onClick={validation}>
                <div className="row registerForm ">
                    <label className="col-3 registerForm__data">
                        Email:
                        <input type="email" name="email" placeholder="abc@xyz.pl" {...setEmail}/>
                        {errorEmail.length > 0 && <p className="error">{errorEmail}</p>}

                    </label>
                    <label className=" col-3 registerForm__data">
                        Hasło :
                        <input type="password" name="password" {...setPassword}/>
                        {errorPassword.length > 0 && <p className="error">{errorPassword}</p>}

                    </label>
                    <label className=" col-3 registerForm__data" {...setRepeatPassword}>
                        Powtórz Hasło :
                        <input type="password" name="repeatPassword"/>
                        {password !== repeatPassword && <p className="error">Hasła są różne</p>}

                    </label>
                </div>


                <div className="row registerForm__btns  ">
                    <input className=" col-1 registerForm__btn__log btn " type="submit" value="Zaloguj się"/>
                    <input className="col-1 registerForm__btn__signIn btn" type="submit" value="Załóż konto"/>
                </div>
            </form>
        </div>


    </>)
}
