import React, {Component, useEffect, useState} from "react";
import {HashLink} from 'react-router-hash-link';
import Hamburger from '../../../../images/assets/icons8-menu.svg'

export const HeaderMenu = () => {
    const [menuOption, setMenuOption] = useState("");
    const [hamburger, setHamburger] =useState(true)

    const hideHamburger =()=>{
        setHamburger(!hamburger)
    }



    useEffect(() => {
        if (
            window.location.href === "https://mkusmierczyk.github.io/in_good_hands/build/#/signIn"
            || window.location.href === "https://mkusmierczyk.github.io/in_good_hands/build/#/register"
            || window.location.href === "https://https://mkusmierczyk.github.io/in_good_hands/build/#/givingForm"
            || window.location.href === "https://https://mkusmierczyk.github.io/in_good_hands/build/#/logOut") {
            setMenuOption("/")
        } else setMenuOption("");
    }, [menuOption]);



    return (<>
       <img className="hamburger" src={Hamburger} alt="hamburger" onClick={hideHamburger}/>
         <ul className={`col-12 header__content__menu hideHam  ${hamburger === true ?"hide":""}`} >
            <HashLink className="header__content__menu__link " to={`/`} smooth={true}
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

        <ul className={`col-12 header__content__menu hideMenu`} >
            <HashLink className="header__content__menu__link " to={`/`} smooth={true}
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