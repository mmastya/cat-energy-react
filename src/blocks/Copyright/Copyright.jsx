import React from "react";
import "./Copyright.scss";
import icon_htmlacademy from "./image/icon_htmlacademy.svg";

export function Copyright() {
    return (
        <div>
            <div className="page-footer__copyright copyright">
                <a className="copyright__logo" href="https://htmlacademy.ru/intensive/adaptive">
                    <p className="copyright__logo-text">HTML Academy</p>
                    <img className="copyright__logo-image" src={icon_htmlacademy} width="35" height="40" alt="htmlacademy"/>
                </a>
            </div>
        </div>
    );
}