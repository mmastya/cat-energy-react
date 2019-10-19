import React from "react";
import "./CatalogList.scss";
import chiken_small_mobile from "./image/chicken_small_mobile.jpg";
import chiken_small_tablet from "./image/chicken_small_tablet.png";
import chiken_small_desktop from "./image/chicken_small_desktop.png";
import chiken_big_mobile from "./image/chicken_big_mobile.jpg";
import chiken_big_tablet from "./image/chicken_big_tablet.png";
import chiken_big_desktop from "./image/chicken_big_desktop.png";
import fish_small_mobile from "./image/fish_small_mobile.jpg";
import fish_small_tablet from "./image/fish_small_tablet.png";
import fish_small_desktop from "./image/fish_small_desktop.png";
import fish_big_mobile from "./image/fish_big_mobile.jpg";
import fish_big_tablet from "./image/fish_big_tablet.png";
import fish_big_desktop from "./image/fish_big_desktop.png";
import buckwheat_small_mobile from "./image/buckwheat_small_mobile.jpg";
import buckwheat_small_tablet from "./image/buckwheat_small_tablet.png";
import buckwheat_small_desktop from "./image/buckwheat_small_desktop.png";
import buckwheat_big_mobile from "./image/buckwheat_big_mobile.jpg";
import buckwheat_big_tablet from "./image/buckwheat_big_tablet.png";
import buckwheat_big_desktop from "./image/buckwheat_big_desktop.png";
import rice_small_mobile from "./image/rice_small_mobile.jpg";
import rice_small_tablet from "./image/rice_small_tablet.png";
import rice_small_desktop from "./image/rice_small_desktop.png";
import icon_plus_mobile from "./image/icon_plus_mobile.svg";
import icon_plus from "./image/icon_plus.svg";
import { CatalogListItem } from "../CatalogListItem/CatalogListItem";

export function CatalogList(props) {
  let catalogListInfo = [
    {id:"1", imgMobile: chiken_small_mobile, imgTablet: chiken_small_tablet, imgDesktop: chiken_small_desktop, listItemName:"Cat Energy Pro 500 г", size:"500 г", taste:"Курица", cost:"700 Р", imgClassSmall: true},
    {id:"2", imgMobile: chiken_big_mobile, imgTablet: chiken_big_tablet, imgDesktop: chiken_big_desktop, listItemName:"Cat Energy Pro 1000 г", size:"1000 г", taste:"Курица", cost:"1000 Р", imgClassBig: true},
    {id:"3", imgMobile: fish_small_mobile, imgTablet: fish_small_tablet, imgDesktop: fish_small_desktop, listItemName:"Cat Energy Pro 500 г", size:"500 г", taste:"Рыба", cost:"700 Р", imgClassSmall: true},
    {id:"4", imgMobile: fish_big_mobile, imgTablet: fish_big_tablet, imgDesktop: fish_big_desktop, listItemName:"Cat Energy Pro 1000 г", size:"1000 г", taste:"Рыба", cost:"1000 Р", imgClassBig: true},
    {id:"5", imgMobile: buckwheat_small_mobile, imgTablet: buckwheat_small_tablet, imgDesktop: buckwheat_small_desktop, listItemName:"Cat Energy Slim 500 г", size:"500 г", taste:"Гречка", cost:"400 Р", imgClassSmall: true},
    {id:"6", imgMobile: buckwheat_big_mobile, imgTablet: buckwheat_big_tablet, imgDesktop: buckwheat_big_desktop, listItemName:"Cat Energy Slim 1000 г", size:"1000 г", taste:"Гречка", cost:"700 Р", imgClassBig: true},
    {id:"7", imgMobile: rice_small_mobile, imgTablet: rice_small_tablet, imgDesktop: rice_small_desktop, listItemName:"Cat Energy Slim 500 г", size:"500 г", taste:"Рис", cost:"500 Р", imgClassSmall: true}
  ]

  let catalogListElements = catalogListInfo.map((catalogListInfo) => {
    return(
      <CatalogListItem key={catalogListInfo.id} imgMobile={catalogListInfo.imgMobile} imgTablet={catalogListInfo.imgTablet} imgDesktop={catalogListInfo.imgDesktop} listItemName={catalogListInfo.listItemName} size={catalogListInfo.size} taste={catalogListInfo.taste} cost={catalogListInfo.cost} imgClassSmall={catalogListInfo.imgClassSmall} imgClassBig={catalogListInfo.imgClassBig}/>
    )
  })
    return (
        <div>
            <ul className="catalog-list">
              { catalogListElements } 
              <li className="catalog-list__more-item">
                <picture>
                  <source media="(min-width: 768px)" srcSet={icon_plus}/>
                  <img className="catalog-list__image-more" src={icon_plus_mobile} width="30" height="30" alt="открыть больше вкусов"/>
                </picture>
                <p className="catalog-list__title-more">Показать еще 100500 товаров</p>
                <p className="catalog-list__text-more">На самом деле вкусов гораздо больше!</p>
                <a className="catalog-list__to-all catalog-list__button-more" href="/#">Показать все</a>
              </li>
            </ul>
          </div>
    );
}