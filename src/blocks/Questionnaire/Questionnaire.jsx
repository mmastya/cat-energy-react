import React from "react";
import "./Questionnaire.scss";
import { CatInfo } from "../CatInfo/CatInfo";

export function Questionnaire() {
    return (
        <div className="form-page-main">
            <section className="questionnaire">
                <h2 className="questionnaire__title">Подбор программы</h2>
                <p className="questionnaire__intro">заполните анкету и мы подберем программу питания для вашего кота</p>
                <CatInfo />
            </section>
        </div>
    );
}