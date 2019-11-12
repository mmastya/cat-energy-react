import React from "react";
import "./Button.scss";

export function Button ({name, btnClassPL, btnProdList, ...other}) {
    let btnClassProgSec = "button";
    if (btnClassPL) {
        btnClassProgSec += " button--program-selection";
    }

    let btnClassProdList = "button";
    if (btnProdList) {
        btnClassProdList += " button--catalog"
    }
    return (
        <div className={ `${btnClassProgSec} ${btnClassProdList}`} {...other}>{name}</div>
    );
}
