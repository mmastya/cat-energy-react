import React from "react";
import "./ProgramSelectionList.scss";
import icon_cat_slim from "./image/icon_cat_slim.svg";
import icon_cat_pro from "./image/icon_cat_pro.svg";

export function ProgramSelectionList() {
    return (
        <div>
            <ul className="program-selection-list">
                <li className="program-selection-list__item">
                    <div className="program-selection-list__image-wrapper">
                        <img className="program-selection-list__image program-selection-list__image--slim-size" src={icon_cat_slim} width="50" height="70" alt="slim"/>
                    </div>
                    <p className="program-selection-list__name program-selection-list__name--slim-size">Похудение</p>
                    <p className="program-selection-list__promo">
                        Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.
                    </p>
                    <a className="program-selection-list__toggle" href="./">
                        <div className="program-selection-list__toggle-name">Каталог Slim</div>
                    </a>
                </li>
                <li className="program-selection-list__item">
                    <div className="program-selection-list__image-wrapper program-selection-list__image-wrapper--pro">
                        <img className="program-selection-list__image program-selection-list__image--pro-size" src={icon_cat_pro} alt="pro" width="75" height="80"/>
                    </div>
                    <p className="program-selection-list__name program-selection-list__name--pro-size">Набор массы</p>
                    <p className="program-selection-list__promo program-selection-list__promo--pro-size">
                        Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту наростить необходимые мышцы!
                    </p>
                    <a className="program-selection-list__toggle" href="./">
                        <div className="program-selection-list__toggle-name program-selection-list__toggle-name--pro">
                            Каталог Pro
                        </div>
                    </a>
                </li>
            </ul>
         </div>
    );
}
