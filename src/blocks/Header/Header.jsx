import React from "react";
import "./Header.scss";
import { Navigation } from "../Navigation/Navigation";
import logo_mobile from "./image/logo_mobile.svg";
import logo_tablet from "./image/logo_tablet.svg";
import logo_desktop from "./image/logo_desktop.svg";
import "../../vendors/scaffolding.scss";

export function Header (props) {
    let headerClassName = "page-header";
    if (props.hasBcGreen) {
        headerClassName += " page-header--bc-green-desktop";
    }
    return (
        <div> 
            <header className={ headerClassName }>
                <div className="page-header__wrapper">
                    <div className="page-header__logo-wrapper">
                        <a className="page-header__logo" href="/">
                            <picture>
                                <source media="(min-width: 1300px)" srcSet={logo_desktop}/>
                                <source media="(min-width: 768px)" srcSet={logo_tablet}/>
                                <img className="page-header__logo-image" src={logo_mobile} width="190" height="40" alt="Кэт энерджи"/>
                            </picture>
                        </a>
                    </div>
                    <Navigation activeLinkMain={props.main} activeLinkCatalog={props.catalog} activeLinkForm={props.form} linkWhite={props.mainFormAndCatalog}/>
                </div>
            </header>
        </div>
    );
  }
  