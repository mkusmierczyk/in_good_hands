import React, {Component, useEffect, useState} from "react";
import {ReactDOM, NavLink} from "react-dom";


export const WhoWeHelp = () => {

    const[toogleClass, setToggleClass]=useState({fund:"active",ngo:"",local:""})


    const [pagination, setPagination] = useState({
        pagination: {
            title: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
            organization: {
                name: ["Fundacja “Dbam o Zdrowie”", "Fundacja “Dbam dla Dzieci”", "Fundacja “Bez domu”"],
                mission: ["Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",],
                things: ["ubrania, meble, zabawki", "ubrania, jedzenie, sprzęt AGD, meble, zabawki", "ubrania, jedzenie, ciepłe koce"]
            }
        }
    })


    const HandleClick = (e) => {
        e.preventDefault()
        if (e.target.innerText === "Fundacjom") {
           setToggleClass({fund: "active", ngo: "", local: ""})

            setPagination({
                pagination: {
                    title: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
                    organization: {
                        name: ["Fundacja “Dbam o Zdrowie”", "Fundacja “Dbam dla Dzieci”", "Fundacja “Bez domu”"],
                        mission: ["Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",],
                        things: ["ubrania, meble, zabawki", "ubrania, jedzenie, sprzęt AGD, meble, zabawki", "ubrania, jedzenie, ciepłe koce"]
                    }
                }
            })


        } else if (e.target.innerText === "Organizacjom Pozarządowym") {
            setToggleClass({fund: "", ngo: "active", local: ""})
            setPagination({
                pagination: {
                    title: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
                    organization: {
                        name: ["Fundacja “Dbam o Zdrowie”", "Fundacja “Dbam dla Dzieci”", "Fundacja “Bez domu”"],
                        mission: ["Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",],
                        things: ["ubrania, meble, zabawki", "ubrania, jedzenie, sprzęt AGD, meble, zabawki", "ubrania, jedzenie, ciepłe koce"]
                    }
                }
            })


        } else
        setToggleClass({fund: "", ngo: "", local: "active"})
        setPagination({
            pagination: {
                title: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
                organization: {
                    name: ["Fundacja “Dbam o Zdrowie”", "Fundacja “Dbam dla Dzieci”", "Fundacja “Bez domu”"],
                    mission: ["Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",],
                    things: ["ubrania, meble, zabawki", "ubrania, jedzenie, sprzęt AGD, meble, zabawki", "ubrania, jedzenie, ciepłe koce"]
                }
            }
        })
    }




    return (<>
            <div className="row whoWeHelp">
                <div className="col-12 WhoWeHelp__header ">
                    <div className="aboutUs__header_title title">
                        <h1> Komu pomagamy ? </h1>
                        <span className="whoWeHelp__header__image decorationImage"> </span>
                    </div>
                    <div className="row whoWeHelp__content_organisations" >
                        <div className={`col-2 whoWeHelp__content_organisations__fundations  ${toogleClass.fund}`}
                             onClick={HandleClick}>Fundacjom
                        </div>
                        <div className={`col-2 whoWeHelp__content_organisations_ngo ${toogleClass.ngo}`} onClick={HandleClick}>Organizacjom
                            Pozarządowym
                        </div>
                        <div className={ `col-2 whoWeHelp__content_organisations__local ${toogleClass.local}`} onClick={HandleClick}>Lokalnym
                            zbiórkom
                        </div>
                    </div>

                    <div className="row whoWeHelp__content__pagination">
                        <h1 className="col-5 whoWeHelp__content__pagination__title">{pagination.title}</h1>
                    </div>


                </div>

            </div>


        </>
    )
}