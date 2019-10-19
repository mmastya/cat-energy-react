import React from "react";
import "./AdditionalGoods.scss";
import { ProductList } from "../ProductList/ProductList";
import icon_gift from "./image/icon_gift.svg";

export function AdditionalGoods() {
    return (
        <div>
            <section className="additional-goods">
                <h2 className="additional-goods__title">Дополнительные товары</h2>
                <ProductList />
                <div className="additional-goods__gift">
                    <img className="additional-goods__gift-image" src={icon_gift} alt="подарок" width="55" height="60"/>
                    <p className="additional-goods__gift-promo">Закажите все и&nbsp;получите чехол для кота в подарок</p>
                </div>
            </section>    
        </div>
    );
}
