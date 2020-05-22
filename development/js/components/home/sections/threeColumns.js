import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";


export const ThreeColumns = () => {

    return (<>
        <div className="row threeColumns">
            <div className="col-4 threeColumns__content">
                <span className="threeColumns__content_counter">10 </span>
                <h1 className="threeColumns__content_title"> ODDANYCH WORKÓW</h1>
                <p className="threeColumns__content_text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat. </p>
            </div>

            <div className="col-4 threeColumns__content">
                <span className="threeColumns__content_counter">5 </span>
                <h1 className="threeColumns__content_title"> WSPARTYCH ORGANIZACJI</h1>
                <p className="threeColumns__content_text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat. </p>
            </div>

            <div className="col-4 threeColumns__content">
                <span className="threeColumns__content_counter">7 </span>
                <h1 className="threeColumns__content_title"> ZORGANIZOWANYCH ZBIÓREK</h1>
                <p className="threeColumns__content_text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat. </p>
            </div>

        </div>
    </>)
}