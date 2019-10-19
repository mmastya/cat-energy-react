import React from "react";
import "./ProductListItem.scss";
import {Button} from "../Button/Button";

export function ProductListItem(props) {
    let classWater = "additional-goods__list info-list";
    if (props.water) {
        classWater += " info-list--water";
    }

    let classInfoWater = "info-list__count";
    if (props.infoCountWater) {
    classInfoWater = " info-list__count--water";
    }

    let classMilk = "additional-goods__list info-list";
    if (props.milk) {
        classMilk += " info-list--milk";
    }

    let classInfoMilk = "info-list__count";
    if (props.infoCountMilk) {
        classInfoMilk = " info-list__count--milk";
    }

    let classVitamin = "additional-goods__list info-list";
    if (props.vitamin) {
        classVitamin += " info-list--vitamin";
    }

    let classInfoVitamin = "info-list__count";
    if (props.infoCountVitamin) {
        classInfoVitamin = " info-list__count--vitamin";
    }
    return (
        <div>
            <li className="product-list__item">
                <p className="product-list__name">{props.product}</p>
                <div className={`${classWater} ${classMilk} ${classVitamin}`}>
                    <div className={`${classInfoWater} ${classInfoMilk} ${classInfoVitamin}`}>{props.size}</div>
                    <div className="info-list__cost">{props.cost}</div>
                </div>
                <a className="product-list__link product-list__button" href="/#">
                    <Button btnProdList={true} name="Заказать"/>
                </a>
            </li>
        </div>
    );
}