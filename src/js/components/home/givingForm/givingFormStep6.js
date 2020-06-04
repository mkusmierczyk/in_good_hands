import React, {Component} from "react";

export const Step6 = ({decoration}) => {
    return (<>
            <div className="giving__title col-12  title step6">
                <h1> Dziękujemy za przesłanie formularza  <span>Na maila prześlemy wszelkie </span><span> informacje o odbiorze.</span></h1>
                <span className=" decorationImage" style={decoration}> </span>
            </div>
        </>
    )
};