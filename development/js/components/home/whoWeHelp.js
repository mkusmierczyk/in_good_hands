import React, {Component, useEffect, useState} from "react";
import {ReactDOM, NavLink} from "react-dom";


export const WhoWeHelp = () => {

    const [orgTitle, setOrgTitle] = useState("W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.")


    const HandleClick = (e) => {
        e.preventDefault()
        if (e.target.innerText === "Fundacjom") {
            e.target.classList.add("active")
            e.target.nextElementSibling.classList.remove("active")
            e.target.nextElementSibling.nextElementSibling.classList.remove("active")
            setOrgTitle("W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.")


        } else if (e.target.innerText === "Organizacjom Pozarządowym") {
            e.target.classList.add("active")
            e.target.nextSibling.classList.remove("active")
            e.target.previousElementSibling.classList.remove("active")
            setOrgTitle("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet, consectetur culpa cum dignissimos distinctio dolor dolore ea eaque enim, esse impedit in libero modi molestiae odit quasi temporibus vel.")


        } else e.target.classList.add("active")
        e.target.previousElementSibling.classList.remove("active")
        e.target.previousElementSibling.previousElementSibling.classList.remove("active")
        setOrgTitle(" dolore ea eaque enim, esse impedit in libero modi molestiae odit quasi temporibus vel.")
    }


    return (<>
            <div className="row whoWeHelp">
                <div className="col-12 WhoWeHelp__header ">
                    <div className="aboutUs__header_title title">
                        <h1> Komu pomagamy ? </h1>
                        <span className="whoWeHelp__header__image decorationImage"> </span>
                    </div>
                    <div className="row whoWeHelp__content_organisations">
                        <div className=" col-2 whoWeHelp__content_organisations__fundations active"
                             onClick={HandleClick}>Fundacjom
                        </div>
                        <div className="col-2 whoWeHelp__content_organisations_ngo" onClick={HandleClick}>Organizacjom
                            Pozarządowym
                        </div>
                        <div className=" col-2 whoWeHelp__content_organisations__local" onClick={HandleClick}>Lokalnym
                            zbiórkom
                        </div>
                    </div>

                    <div className="row whoWeHelp__content__pagination">
                        <h1 className="col-5 whoWeHelp__content__pagination__title">{orgTitle}</h1>
                    </div>



                </div>

            </div>


        </>
    )
}