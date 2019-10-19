import React from "react";
import "./CatalogPage.scss";
import { Header } from "./../../blocks/Header/Header.jsx";
import { Catalog } from "./../../blocks/Catalog/Catalog";
import { AdditionalGoods } from "./../../blocks/AdditionalGoods/AdditionalGoods";
import { Footer } from "./../../blocks/Footer/Footer";

export function CatalogPage() {
    return (
        <div>
            <Header catalog={true}/>
            <Catalog />
            <AdditionalGoods />
            <Footer contactsWrapGray={true} bcGray={true}/>
        </div>
    );
}