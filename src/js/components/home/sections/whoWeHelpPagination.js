import React from 'react'

export const Pagination = ({elemPerPage, totalElem, currentElem, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalElem / elemPerPage); i++) {
        pageNumbers.push(i);
    }
    return (<>
            <ul className="whoWeHelp__content__beneficiary__list">
                {currentElem.map((elem, index) => <li
                    className="col-11 whoWeHelp__content__beneficiary__list__elem" key={index}>
                    <h2 className="col-6 whoWeHelp__content__beneficiary__elem__name">{elem.name}<span
                        className="col-6 whoWeHelp__content__beneficiary__elem__things">{elem.things}</span>
                    </h2>
                    <p className="col-6 whoWeHelp__content__beneficiary__elem__mission">{elem.mission}</p>
                </li>)}
            </ul>
            <ul className="whoWeHelp__content__beneficiary">
                {pageNumbers.map(number => (
                        <li key={number}>
                            <a onClick={e => {
                                e.preventDefault();
                                return paginate(number)
                            }} href='#'>
                                {number}
                            </a>
                        </li>
                    )
                )}
            </ul>
        </>
    )};