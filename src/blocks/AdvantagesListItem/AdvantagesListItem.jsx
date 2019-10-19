import React from "react";
import "./AdvantagesListItem.scss";

export function AdvantagesListItem(props) {
    let classLeaf = "advantages-list__image"
    if (props.leaf) {
        classLeaf += " dvantages-list__image--leaf";
    }

    let classOne = "advantages-list__number";
    if (props.one) {
        classOne += " advantages-list__number--one";
    }

    let classPowder = "advantages-list__image"
    if (props.powder) {
        classPowder += " dvantages-list__image--powder";
    }

    let classTwo = "advantages-list__number";
    if (props.two) {
        classTwo += " advantages-list__number--two";
    }

    let classDining = "advantages-list__image"
    if (props.dining) {
        classDining += " dvantages-list__image--dining";
    }

    let classThree = "advantages-list__number";
    if (props.three) {
        classThree += " advantages-list__number--three";
    }

    let classClock = "advantages-list__image"
    if (props.clock) {
        classClock += " dvantages-list__image--clock";
    }

    let classFour = "advantages-list__number";
    if (props.four) {
        classFour += " advantages-list__number--four";
    }
    return (
        <div className="advantages-list__item">
            <div className="advantages-list__image-wrapper">
                <picture>
                    <img className={`${classLeaf} ${classPowder} ${classDining} ${classClock}`} src={props.img} width="48" height="52" alt="питательные вещества"/>
                </picture>
            </div>
            <p className="advantages-list__description">
                {props.title}
            </p>
            <span className={`${classOne} ${classTwo} ${classThree} ${classFour}`}>{props.number}</span>
        </div>
    )
}