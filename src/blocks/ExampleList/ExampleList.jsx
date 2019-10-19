import React from "react";
import "./ExampleList.scss";

export function ExampleList() {
    return (
        <div>
            <ul className="example-list">
                <li className="example-list__item">
                    <div className="example-list__item-wrapper">
                        <p className="example-list__parameter example-list__parameter--weight">5 кг</p>
                        <p className="example-list__text">снижения веса</p>
                    </div>
                </li>
                <li className="example-list__item example-list__item--days">
                    <div className="example-list__item-wrapper">
                        <p className="example-list__parameter example-list__parameter--days">60 дней</p>
                        <p className="example-list__text example-list__text--time">затрачено времени</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}