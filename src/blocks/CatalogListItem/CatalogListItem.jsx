import React from "react";
import "./CatalogListItem.scss";
import {Button} from "../Button/Button";

export function CatalogListItem (props) {
    let imgClassS = "catalog-list__image";
    if (props.imgClassSmall) {
        imgClassS += " catalog-list__image--small-size";
    }

    let imgClassB = "catalog-list__image";
    if (props.imgClassBig) {
        imgClassB += " catalog-list__image--big-size"
    }

    return (
        <div>
            <li className="catalog-list__item">
                <a className="catalog-list__item-link" href="/#">
                    <picture>
                        <source media="(min-width: 1300px)" srcSet={props.imgDesktop}/>
                        <source media="(min-width: 768px)" srcSet={props.imgTablet}/>
                        <img className={`${imgClassS} ${imgClassB}`} src={props.imgMobile} width="140" height="144" alt="Кэт энерджи"/>
                    </picture>
                </a>
                <a className="catalog-list__item-link" href="/#">
                    <p className="catalog-list__title-name">{props.listItemName}</p>
                </a>
                <ul className="catalog__list catalog-info-list">
                    <li className="catalog-info-list__item">
                        <div className="catalog-info-list__name">Объем</div>
                        <div className="catalog-info-list__field">{props.size}</div>
                    </li>
                    <li className="catalog-info-list__item">
                        <div className="catalog-info-list__name">Вкус</div>
                        <div className="catalog-info-list__field">{props.taste}</div>
                    </li>
                    <li className="catalog-info-list__item">
                        <div className="catalog-info-list__name">Цена</div>
                        <div className="catalog-info-list__field">{props.cost}</div>
                    </li>
                </ul>
                <a className="catalog-list__item-link catalog-list__button" href="/#">
                    <Button name="Заказать"/>
                </a>
            </li>    
        </div>
    );
} 