import React from "react";
import "./Main.scss";
import { Header } from "./../../blocks/Header/Header.jsx";
import { ProgramSelection } from "./../../blocks/ProgramSelection/ProgramSelection.jsx";
import { Advantages } from "./../../blocks/Advantages/Advantages.jsx";
import { Example } from "./../../blocks/Example/Example.jsx";
import { Footer } from "./../../blocks/Footer/Footer.jsx";

export function Main() {
    return (
        <div>
            <Header hasBcGreen={ true } main={true} wLink={true} mainFormAndCatalog={true}/>
            <ProgramSelection />
            <Advantages />
            <Example />
            <Footer />  
        </div>
    );
}