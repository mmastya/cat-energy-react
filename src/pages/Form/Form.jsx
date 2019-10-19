import React from "react";
import "./Form.scss";
import { Header } from "../../blocks/Header/Header.jsx";
import { Questionnaire } from "../../blocks/Questionnaire/Questionnaire.jsx";
import { Footer } from "../../blocks/Footer/Footer.jsx";

export function Form() {
    return (
        <div>
            <Header form={true}/>
            <Questionnaire />
            <Footer contactsWrapGray={true} bcGray={true}/>
        </div>
    );
}