import React, { useState } from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";

export function Navigation(props) {

    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open); 
    }

    let normalLinkMain = "site-list__item-link";
    if (props.activeLinkMain) {
        normalLinkMain += " site-list__item-link--active site-list__item-link--white site-list__item-link--white-active";
    }

    let normalLinkCatalog = "site-list__item-link";
    if (props.activeLinkCatalog) {
        normalLinkCatalog += " site-list__item-link--active";
    }

    let normalLinkForm = "site-list__item-link";
    if (props.activeLinkForm) {
        normalLinkForm += " site-list__item-link--active";
    }

    let whitelLink = "site-list__item-link";
    if (props.linkWhite) {
        whitelLink += " site-list__item-link--white";
    }

    return (
        <nav className={`main-nav ${ open? "main-nav--closed" : "main-nav--opened"}`} >
            <button className="main-nav__toggle" type="button" onClick={handleOpen}></button>
            <div className="main-nav__wrapper">
                <ul className="main-nav__list site-list">
                    <li className="site-list__item">
                        <Link className={ normalLinkMain } to="/">Главная</Link>
                    </li>
                    <li className="site-list__item">
                        <Link className={`${normalLinkCatalog} ${whitelLink}`} to="/catalog">Каталог продукции</Link>
                    </li>
                    <li className="site-list__item">
                        <Link className={`${normalLinkForm} ${whitelLink}`} to="/form">Подбор программы</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}