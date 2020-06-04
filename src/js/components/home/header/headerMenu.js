import React, {Component, useEffect, useState} from "react";
import {HashLink} from 'react-router-hash-link';

export const HeaderMenu = () => {
    const [menuOption, setMenuOption] = useState("");
    useEffect(() => {
        if (
            window.location.href === "https://mkusmierczyk.github.io/in_good_hands/build/#/signIn"
            || window.location.href === "https://mkusmierczyk.github.io/in_good_hands/build/#/register"
            || window.location.href === "https://https://mkusmierczyk.github.io/in_good_hands/build/#/givingForm"
            || window.location.href === "https://https://mkusmierczyk.github.io/in_good_hands/build/#/logOut") {
            setMenuOption("/build")
        } else setMenuOption("");
    }, []);

    return (<>
        <ul className="col-12 header__content__menu">
            <HashLink className="header__content__menu__link " to={`${menuOption}#signInLog`} smooth={true}
                      duration={1000}>Start</HashLink>
            <HashLink className="header__content__menu__link " to={`${menuOption}#simpleSteps`} smooth={true}
                      duration={1000}>O co
                chodzi?</HashLink>
            <HashLink className="header__content__menu__link" to={`${menuOption}#aboutUs`} smooth={true}
                      duration={1000}>O
                nas</HashLink>
            <HashLink className="header__content__menu__link" to={`${menuOption}#fund`} smooth={true} duration={1000}>Fundacja
                i
                Organizacje</HashLink>
            <HashLink className="header__content__menu__link" to={`${menuOption}#contact`} smooth={true}
                      duration={1000}>Kontakt</HashLink>
        </ul>
    </>)
}