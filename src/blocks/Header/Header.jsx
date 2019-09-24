import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header () {
    return (
        <div className="header"> 
            <header class="page-header page-header--bc-green-desktop">
                <div class="page-header__wrapper">
                    <div class="page-header__logo-wrapper">
                        <a class="page-header__logo" href="index.html">
                            <picture>
                                <source media="(min-width: 1300px)" srcset="./image/logo-desktop.svg"/>
                                <source media="(min-width: 768px)" srcset="./image/logo-tablet.svg"/>
                                <img class="page-header__logo-image" src="./image/logo-mobile.svg" width="190" height="40" alt="Кэт энерджи"/>
                            </picture>
                        </a>
                    </div>
                    <Navigation/>
                </div>
            </header>
        </div>
    );
  }
  
  export default Header;
  