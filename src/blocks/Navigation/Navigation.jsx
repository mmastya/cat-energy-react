import React from "react";
import "./Navigation.css";

function Navigation() {
    return (
        <div>
            <nav class="main-nav main-nav--closed main-nav--nojs">
                <button class="main-nav__toggle" type="button"></button>
                <div class="main-nav__wrapper">
                    <ul class="main-nav__list site-list">
                        <li class="site-list__item">
                            <a class="site-list__item-link site-list__item-link--active site-list__item-link--white site-list__item-link--white-active" href="./index.html">Главная</a>
                        </li>
                        <li class="site-list__item">
                            <a class="site-list__item-link site-list__item-link--white" href="./catalog.html">Каталог продукции</a>
                        </li>
                        <li class="site-list__item">
                            <a class="site-list__item-link site-list__item-link--white" href="./form.html">Подбор программы</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;