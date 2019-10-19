import React from "react";
import "./Advantages.scss";
import { AdvantagesList } from "../../blocks/AdvantagesList/AdvantagesList";

export function Advantages() {
    return (
        <div>
            <section className="advantages">
                <div  className="advantages__wrapper">
                    <h2 className="advantages__title">Как это работает</h2>
                    <AdvantagesList />
                </div>
            </section>
        </div>
    );
}
