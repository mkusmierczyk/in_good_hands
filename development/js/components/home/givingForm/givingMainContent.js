import React, {Component} from "react";
import {HeaderSignInLog} from "../header/headerSignInLog";
import {HeaderMenu} from "../header/headerMenu";


export const GivingMainContent = () => {

    return (<>
            <div className=" giving__title col-12  title">
                <h1> Oddaj rzeczy, których już nie chcesz <span>POTRZEBUJĄCYM!</span></h1>
                <span className=" decorationImage"> </span>
                <h1 className="giving__title__subtext">Wystarczą cztery proste kroki:</h1>
            </div>
            <div className="giving__text col-12">
                <p className="col-2"><span>1</span> Wybierz rzeczy</p>
                <p className="col-2"><span>2</span> Spakuj je w worki</p>
                <p className="col-2"><span>3</span> Wybierz fundację</p>
                <p className="col-2"><span>4</span> Zamów kuriera</p>
            </div>
        </>
    )
}
