import React from "react";
import "./Button.scss";

export function Button (props) {
    let btnClassProgSec = "button";
    if (props.btnClassPL) {
        btnClassProgSec += " button--program-selection";
    }

    let btnClassProdList = "button";
    if (props.btnProdList) {
        btnClassProdList += " button--catalog"
    }
    return (
        <div className={ `${btnClassProgSec} ${btnClassProdList}` }>{props.name}</div>
    );
}
