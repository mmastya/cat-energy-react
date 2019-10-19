import React from "react";
import "./Social.scss";
import icon_vk from "./image/icon_vk.svg";
import icon_insta from "./image/icon_insta.svg";
import icon_fb from "./image/icon_fb.svg";

export function Social() {
    return (
        <div>
            <div className="page-footer__social social">
                <ul className="social__list">
                    <li className="social__item">
                        <a className="social__link" href="https://vk.com/htmlacademy">
                            <img className="social__link-vkontakte" src={icon_vk} width="65" height="40" alt="vk"/>
                        </a>
                    </li>
                    <li className="social__item">
                        <a className="social__link" href="https://www.instagram.com/htmlacademy/">
                            <img className="social__link-instagram" src={icon_insta} width="54" height="39" alt="inst"/>
                        </a>
                    </li>
                    <li className="social__item">
                        <a className="social__link" href="https://www.facebook.com/htmlacademy">
                            <img className="social__link-facebook" src={icon_fb} width="40" height="40" alt="fb"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}