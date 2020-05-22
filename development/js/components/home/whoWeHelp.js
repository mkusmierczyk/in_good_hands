import React, {Component, useEffect, useState} from "react";
import {ReactDOM, NavLink} from "react-dom";
import {Pagination} from "./whoWeHelpPagination";


export const WhoWeHelp = () => {


    //Start Zmian
    const alternateSection = {
        whoWeHelp: [
            {
                title: "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
                fund: "active",
                ngo: "",
                local: "",
                organizations: [

                    {
                        name: "Fundacja “Dbam ",
                        mission: "Cel i misja:  w trudnej sytuacji życiowej.",
                        things: " meble, zabawki",
                    },

                    {
                        name: "Fundacja “Dbam bardzo”",
                        mission: "Cel i misja: ubogich rodzin.",
                        things: "ubrania, jedzenie, sprzęt AGD, zabawki",
                    },

                    {
                        name: "Fundacja bardzo bardzo",
                        mission: "Cel i misja: posiadających miejsca zamieszkania.",
                        things: " jedzenie, "
                    },
                    {
                        name: "Fundacja Bezradni",
                        mission: "Cel i misja:  Pomoc w trudnej sytuacji.",
                        things: "ubrania, jedzenie, sprzęt AGD, zabawki",
                    },
                    {
                        name: "Fundacja Bezradni",
                        mission: "Cel i misja:  Pomoc w trudnej sytuacji.",
                        things: "ubrania, jedzenie, sprzęt AGD, zabawki",
                    },
                    {
                        name: "Fundacja Bezradni",
                        mission: "Cel i misja:  Pomoc w trudnej sytuacji.",
                        things: "ubrania, jedzenie, sprzęt AGD, zabawki",
                    },
                    {
                        name: "Fundacja Bezradni",
                        mission: "Cel i misja:  Pomoc w trudnej sytuacji.",
                        things: "ubrania, jedzenie, sprzęt AGD, zabawki",
                    },
                    {
                        name: "Fundacja Bezradni",
                        mission: "Cel i misja:  Pomoc w trudnej sytuacji.",
                        things: "ubrania, jedzenie, sprzęt AGD, zabawki",
                    },
                ]
            },
            {
                title: "W naszej bazie znajdziesz listę zweryfikowanych NGO, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
                fund: "",
                ngo: "active",
                local: "",
                organizations: [

                    {
                        name: "Fundacja “Zdrowie ",
                        mission: "Cel i misja: Zdrowie.",
                        things: [" meble, zabawki", "ubrania, jedzenie, sprzęt AGD, zabawki", " jedzenie, "]
                    },

                    {
                        name: "Fundacja “Dzieci”",
                        mission: "Cel i misja: Lorem Ipsum Dolor.",
                        things: " meble, zabawki",
                    },

                    {
                        name: "Fundacja Bezradni",
                        mission: "Cel i misja:  Pomoc w trudnej sytuacji.",
                        things: "ubrania, jedzenie, sprzęt AGD, zabawki",
                    },
                    {
                        name: "Fundacja Bezradni",
                        mission: "Cel i misja:  Pomoc w trudnej sytuacji.",
                        things: "ubrania, jedzenie, sprzęt AGD, zabawki",
                    },
                    {
                        name: "Fundacja Bezradni",
                        mission: "Cel i misja:  Pomoc w trudnej sytuacji.",
                        things: "ubrania, jedzenie, sprzęt AGD, zabawki",
                    },
                    {
                        name: "Fundacja Bezradni",
                        mission: "Cel i misja:  Pomoc w trudnej sytuacji.",
                        things: "ubrania, jedzenie, sprzęt AGD, zabawki",
                    },
                    {
                        name: "Fundacja Bezradni",
                        mission: "Cel i misja:  Pomoc w trudnej sytuacji.",
                        things: "ubrania, jedzenie, sprzęt AGD, zabawki",
                    },
                ]
            },
            {
                title: "W naszej bazie znajdziesz listę zweryfikowanych osób zbierających, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
                fund: "",
                ngo: "",
                local: "active",
                organizations: [

                    {
                        name: "Fundacja “Dbam bardzo”",
                        mission: "Cel i misja:  Pomoc",
                        things: " meble, zabawki",
                    },

                    {
                        name: ["Fundacja “Dbam ", "Fundacja “Dbam bardzo”", "Fundacja bardzo bardzo"],
                        mission: ["Cel i misja:  w trudnej sytuacji życiowej.", "Cel i misja: ubogich rodzin.", "Cel i misja: posiadających miejsca zamieszkania."],
                        things: [" meble, zabawki", "ubrania, jedzenie, sprzęt AGD, zabawki", " jedzenie, "]
                    },

                    {
                        name: "Fundacja “Zdrowie ",
                        mission: "Cel i misja: Zdrowie.",
                        things: [" meble, zabawki", "ubrania, jedzenie, sprzęt AGD, zabawki", " jedzenie, "]
                    },

                ]

            },

        ]
    }


    const [organizationSection, setOrganizationSection] = useState(alternateSection.whoWeHelp[0])
    const [currentPage, setCurrentPage] = useState(2)
    const [elemPerPage] = useState(6)


useEffect(()=>{


},[])

    const HandleClick = (e) => {
        e.preventDefault()
        if (e.target.innerText === "Fundacjom") {


            setOrganizationSection(alternateSection.whoWeHelp[0])

        } else if (e.target.innerText === "Organizacjom Pozarządowym") {

            setOrganizationSection(alternateSection.whoWeHelp[1])

        } else

            setOrganizationSection(alternateSection.whoWeHelp[2])
    }


    const {title, fund, ngo, local} = organizationSection;

    const allBeneficiary = organizationSection.organizations;

    //Get current page

    const indexOfLastElem = currentPage * elemPerPage;
    const indexOfFirstElem = indexOfLastElem - elemPerPage
    const currentElem = allBeneficiary.slice(indexOfFirstElem-indexOfLastElem)


    //Change PAge
    const paginate= pageNumber=> setCurrentPage(pageNumber)


    console.log(currentElem)
    return (<>
            <div className="row whoWeHelp" id="fund">
                <div className="col-12 WhoWeHelp__header ">
                    <div className="aboutUs__header_title title">
                        <h1> Komu pomagamy ? </h1>
                        <span className="whoWeHelp__header__image decorationImage"> </span>
                    </div>
                    <div className="row whoWeHelp__content_organisations">
                        <div
                            className={`col-2 whoWeHelp__content_organisations__fundations  ${fund}`}
                            onClick={HandleClick}>Fundacjom
                        </div>
                        <div className={`col-2 whoWeHelp__content_organisations_ngo ${ngo}`}
                             onClick={HandleClick}>Organizacjom Pozarządowym
                        </div>
                        <div className={`col-2 whoWeHelp__content_organisations__local ${local}`}
                             onClick={HandleClick}>Lokalnym
                            zbiórkom
                        </div>
                    </div>
                    <div className="row whoWeHelp__content__beneficiary">
                        <h1 className="col-5 whoWeHelp__content__beneficiary__title">{title}</h1>
                    </div>

                   <Pagination elemPerPage={elemPerPage} totalElem={allBeneficiary.length} currentElem={currentElem} paginate={paginate}/>


                </div>

            </div>
        </>
    )
}