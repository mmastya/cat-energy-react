import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";

export function Navigation(props) {

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
        <nav className="main-nav main-nav--closed main-nav--nojs">
            <button className="main-nav__toggle" type="button"></button>
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