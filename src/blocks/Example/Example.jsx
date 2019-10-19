import React, {useState, useRef, useEffect} from "react";
import "./Example.scss";
import { ExampleList } from "../ExampleList/ExampleList";
import before_mobile from "./image/before_mobile.png";
import before_tablet from "./image/before_tablet.png";
import before_desktop from "./image/before_desktop.png";
import after_mobile from "./image/after_mobile.png";
import after_tablet from "./image/after_tablet.png";
import after_desktop from "./image/after_desktop.png";

export function Example() {
    const runnerEl = useRef(null);

    const [catState, setCatState] = useState(false);
    const catBefore = () => {
      setCatState(false);
    }

    const catAfter = () => {
      setCatState(true);
    }

    useEffect(() => {
      console.log(runnerEl.current);

      // componentDidMount

      return function cleanUp() {
      // componentWillUnmount
      }
    });

    return(
        <div>
          <section className="example">
            <h2 className="example__title">Живой пример</h2>
            <div className="example__wrapper-desktop">
              <div className="example__center">
                <div  className="example__intro">
                  <p className="example__text">
                    Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim. Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек и по-прежнему спит по 16 часов в день.
                  </p>
                  <div className="example-list__wrapper">
                    <ExampleList />
                    <p className="example__cost">Затраты на питание: <span className="example__cost-price">15 000 руб.</span></p>
                  </div>
                </div>
                <div className="example__cat">
                  <div className="example__cat-wrapper">
                    <picture>
                      <source media="(min-width: 1300px)" srcSet={before_desktop}/>
                      <source media="(min-width: 768px)" srcSet={before_tablet}/>
                      <img className={`example__image ${catState ? "example__image--unvisible" : "example__image--visible"}`} src={before_mobile} width="320" height="241" alt="упитанный кот"/>
                    </picture>
                    <picture>
                      <source media="(min-width: 1300px)" srcSet={after_desktop}/>
                      <source media="(min-width: 768px)" srcSet={after_tablet}/>
                      <img className={`example__image ${catState ? "example__image--visible" : "example__image--unvisible"}`} src={after_mobile} width="320" height="241" alt="худой кот"/>
                    </picture>
                    <ul className="example__before-after-list">
                      <li className="example__before-after-list-item" onClick={catBefore}>
                        <p className="example__before-text example__before-text--tablet">Было</p>
                      </li>
                      <li className="example__before-after-list-item">
                        <div className="example__after-slider"></div>
                        <div ref={runnerEl} className="example__after-runner"></div>
                      </li>
                      <li className="example__before-after-list-item" onClick={catAfter}>
                        <p className="example__after-text example__after-text--tablet">Стало</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
}