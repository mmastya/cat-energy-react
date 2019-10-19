import React from "react";
import "./AdvantagesList.scss";
import advantage_leaf from "./image/advantage_leaf.png";
import advantage_powder from "./image/advantage_powder.png";
import advantage_dining from "./image/advantage_dining.png";
import advantage_clock from "./image/advantage_clock.png";
import { AdvantagesListItem } from "../AdvantagesListItem/AdvantagesListItem";

export function AdvantagesList(props) {
    const advatagesListInfo = [
        {id: 1, img: advantage_leaf, title:"Функциональное питание содержит только полезные питательные вещества.", number:"1", leaf: true, one: true},
        {id: 2, img: advantage_powder, title:"Выпускается в виде порошка, который нужно лишь залить кипятком и готово.", number:"2", powder: true, two:true},
        {id: 3, img: advantage_dining, title:"Замените один-два приема обычной еды на наше функциональное питание.", number:"3", dining: true, three: true},
        {id: 4, img: advantage_clock, title:"Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца.", number:"4", clock: true, four: true}
    ]

    return (
        <div className="advantages-list">
            { 
                advatagesListInfo.map((advatagesInfo) => {
                    return (
                        <AdvantagesListItem key={advatagesInfo.id} img={advatagesInfo.img} title={advatagesInfo.title} number={advatagesInfo.number} leaf={advatagesInfo.leaf} powder={advatagesInfo.powder} dining={advatagesInfo.dining} clock={advatagesInfo.clock} one={advatagesInfo.one} two={advatagesInfo.two} three={advatagesInfo.three} four={advatagesInfo.four}/>
                    )
                })
             }
        </div>
    );
}