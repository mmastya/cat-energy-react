import React from "react";
import "./ProgramSelection.scss";
import { ProgramSelectionList } from "../ProgramSelectionList/ProgramSelectionList";
import { Button } from "../Button/Button";
import index_can_mobile from "./image/index-can-mobile@1x.png";
import index_can_tablet from "./image/index_can_tablet1.jpg";
import index_can_desktop from "./image/index-can-desktop@1x.png";

export function ProgramSelection() {
    return (
        <div>
            <section className="program-selection">
                <div className="program-selection__header">
                    <div className="program-selection__header-wrapper">
                        <h2 className="program-selection__intro">Функциональное питание для котов</h2>
                        <p className="program-selection__slogan">Занялся собой? Займись котом!</p>
                    </div>
                </div>
                <div className="program-selection__header-wrapper">
                    <picture>
                        <source media="(min-width: 1300px)" srcSet={index_can_desktop}/>
                        <source media="(min-width: 768px)" srcSet={index_can_tablet}/>
                        <img className="program-selection__image" src={index_can_mobile} width="280" height="270" alt="Кэт энерджи-курица"/>
                    </picture>
                    <a  className="program-selection__selection-link" href="/form">
                        <Button name="Подобрать программу" btnClassPL={true}></Button>
                    </a>
                </div>
            </section>
            <ProgramSelectionList />
        </div>  
    );
}