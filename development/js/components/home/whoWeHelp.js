import React, {Component, useEffect, useState} from "react";
import {ReactDOM, NavLink} from "react-dom";


export const WhoWeHelp = () => {


    const [pagination, setPagination] = useState({
        pagination: {
            title: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
            fund: "active",
            ngo: "",
            local: "",
            organization: {
                name: ["Fundacja “Dbam o Zdrowie”", "Fundacja “Dbam dla Dzieci”", "Fundacja “Bez domu”"],
                mission: ["Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", "Cel i misja: Pomoc dzieciom z ubogich rodzin.", "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania."],
                things: ["ubrania, meble, zabawki", "ubrania, jedzenie, sprzęt AGD, meble, zabawki", "ubrania, jedzenie, ciepłe koce"]
            }
        }
    })


    const HandleClick = (e) => {
        e.preventDefault()
        if (e.target.innerText === "Fundacjom") {


            setPagination({
                pagination: {
                    title: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
                    fund: "active",
                    ngo: "",
                    local: "",
                    organization: {
                        name: ["Fundacja “Dbam o Zdrowie”", "Fundacja “Dbam dla Dzieci”", "Fundacja “Bez domu”"],
                        mission: ["Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", "Cel i misja: Pomoc dzieciom z ubogich rodzin.", "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania."],
                        things: ["ubrania, meble, zabawki", "ubrania, jedzenie, sprzęt AGD, meble, zabawki", "ubrania, jedzenie, ciepłe koce"]
                    }
                }
            })


        } else if (e.target.innerText === "Organizacjom Pozarządowym") {

            setPagination({
                pagination: {
                    title: "W naszej bazie znajdziesz listę zweryfikowanych NGO, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
                    fund: "",
                    ngo: "active",
                    local: "",
                    organization: {
                        name: ["Fundacja “ Zdrowie”", "Fundacja “Dzieci”", "Fundacja “W domu”"],
                        mission: ["Cel i misja: Pomoc osobom znajdującym się w .", "Cel i misja: Pomoc dzieciom .", "Cel i misja: Pomoc dla osób nie posiadających ."],
                        things: ["ubrania,  zabawki", "ubrania, jedzenie,  meble, zabawki", "ubrania, jedzenie"]
                    }
                }
            })


        } else

            setPagination({
                pagination: {
                    title: "W naszej bazie znajdziesz listę zweryfikowanych osób zbierających, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
                    fund: "",
                    ngo: "",
                    local: "active",
                    organization: {
                        name: ["Fundacja “Dbam ", "Fundacja “Dbam bardzo”", "Fundacja bardzo bardzo"],
                        mission: ["Cel i misja:  w trudnej sytuacji życiowej.", "Cel i misja: ubogich rodzin.", "Cel i misja: posiadających miejsca zamieszkania."],
                        things: [" meble, zabawki", "ubrania, jedzenie, sprzęt AGD, zabawki", " jedzenie, "]
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
                    <div className="row whoWeHelp__content_organisations">
                        <div
                            className={`col-2 whoWeHelp__content_organisations__fundations  ${pagination.pagination.fund}`}
                            onClick={HandleClick}>Fundacjom
                        </div>
                        <div className={`col-2 whoWeHelp__content_organisations_ngo ${pagination.pagination.ngo}`}
                             onClick={HandleClick}>Organizacjom Pozarządowym
                        </div>
                        <div className={`col-2 whoWeHelp__content_organisations__local ${pagination.pagination.local}`}
                             onClick={HandleClick}>Lokalnym
                            zbiórkom
                        </div>
                    </div>

                    <div className="row whoWeHelp__content__pagination">
                        <h1 className="col-5 whoWeHelp__content__pagination__title">{pagination.pagination.title}</h1>
                    </div>
                    <ul>
                        {pagination.pagination.organization.name.map((name, index) => <li key={index}> {name}</li>)}
                        {pagination.pagination.organization.mission.map((mission, index) => <li key={index}
                        > {mission}</li>)}
                        {pagination.pagination.organization.things.map((things, index) => <li key={index}
                        > {things} </li>)}

                    </ul>


                </div>

            </div>


        </>
    )
}