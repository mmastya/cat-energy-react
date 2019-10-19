import React from "react";
import "./Footer.scss";
import { Contacts } from "../Contacts/Contacts";
import { Social } from "../Social/Social";
import { Copyright } from "../Copyright/Copyright";
import logo_footer from "./image/logo_footer.svg";

export function Footer(props) {
    let contactsWrap = "page-footer__contacts-wrapper-desktop";
    if (props.contactsWrapGray) {
        contactsWrap += " page-footer__contacts-wrapper-desktop--bc-grey";
    }
    return (
        <div>
            <footer className="page-footer">
               <div className={ contactsWrap }>
                    <Contacts contactsBcGray={props.bcGray}/>
                </div>
                <iframe className="page-footer__map" title="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad935344573b7990b2d4b20446213f999b124a9f604c18eccf9e3b054f6c91c68&amp;source=constructor" width="320" height="360"></iframe>
                <div className="page-footer__bottom">
                    <div className="page-footer__bottom-logo">
                        <a className="page-footer__bottom-logo-link" href="/">
                            <img className="page-footer__bottom-logo-image" src={logo_footer} width="128" height="24" alt="Cat energy"/>
                        </a>
                    </div>
                    <Social />
                    <Copyright />
                </div>
            </footer>
        </div>    
    );
}