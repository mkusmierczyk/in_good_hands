import React, {Component} from "react";
import { Link} from "react-router-dom";
import Icon1 from "../../../../images/assets/Icon-1.svg"
import Icon2 from "../../../../images/assets/Icon-2.svg"
import Icon3 from "../../../../images/assets/Icon-3.svg"
import Icon4 from "../../../../images/assets/Icon-4.svg"

export const SimpleSteps = ({decoration}) => {
    return (<>
        <div className="row simpleSteps" id="simpleSteps">
            <h1 className="col-12 simpleSteps__title title "> Wystarczą 4 proste kroki</h1>
            <span className="col-12 decorationImage"style={decoration}> </span>
        </div>
        <div className="row simpleSteps--all">
            <div className=" col-12 simpleSteps__content">
                <img src={Icon1} alt="icon1"/>
                <p className="simpleSteps__content_text"> Wybierz rzeczy</p>
                <span > </span>
                <p className="simpleSteps__content_description">skorzystaj z worków na śmieci</p>
            </div>
            <div className="col-12 simpleSteps__content icon2">
                <img src={Icon2} alt="icon2"/>
                <p className="simpleSteps__content_text" > Spakuj je </p>
                <span></span>
                <p className="simpleSteps__content_description">skorzystaj z worków na śmieci</p>
            </div>
            <div className="col-12 simpleSteps__content">
                <img src={Icon3} alt="icon3"/>
                <p className="simpleSteps__content_text"> Zdecyduj komu chcesz pomóc</p>
                <span></span>
                <p className="simpleSteps__content_description">wybierz zaufane miejsce</p>
            </div>
            <div className="col-12 simpleSteps__content">
                <img src={Icon4} alt="icon4"/>
                <p className="simpleSteps__content_text"> Zamów kuriera</p>
                <span></span>
                <p className="simpleSteps__content_description">kurier przyjedzie w dogodnym terminie</p>
            </div>
        </div>
        <div className="row simpleSteps--btn">
            <button className="btn"><Link to={"/register"}> ODDAJ RZECZY </Link></button>
        </div>
    </>)
}