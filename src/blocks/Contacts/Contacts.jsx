import React from "react";
import "./Contacts.scss";

export function Contacts(props) {
    let contactsBcWhite = "page-footer__contacts contacts";
    if (props.contactsBcGray) {
        contactsBcWhite += " contacts--bc-gray";
    }

    return (
        <div>
            <div className={ contactsBcWhite }>
                <p className="contacts__title">Приглашаем к&nbsp;сотрудничеству Дилеров!</p>
                <p className="contacts__text">
                    ул.Большая Конюшенная, д. 19/8 <span className="contacts__text-spb">Санкт-Петербург</span>
                </p>
            </div>
        </div>
    );
}