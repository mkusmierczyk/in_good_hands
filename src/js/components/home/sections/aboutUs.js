import React, {Component} from "react";
import Signature from "../../../../images/assets/Signature.svg"
import People from "../../../../images/assets/People.jpg"

export const AboutUs = ({decoration}) => {
    const style = {
        backgroundImage: `url(${People})`
    }

    return (<>
        <div className="row aboutUs" id ="aboutUs">
            <div className="col-6 aboutUs__content">
                <div className="aboutUs__content_title title" >
                    <h1> O nas </h1>
                    <span className="aboutUs__content__image decorationImage" style={decoration}> </span>
                </div>
                <div className="row aboutUs__content__text">
                    <p> Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                        black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                </div>
                <div className="row aboutUs__signature">
                    <img src={Signature} alt="signature"/>
                </div>
            </div>
            <div className="col-6  aboutUs__picture" style={style}> </div>
        </div>
    </>)
}