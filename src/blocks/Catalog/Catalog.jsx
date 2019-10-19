import React from "react";
import "./Catalog.scss";
import { CatalogList } from "../CatalogList/CatalogList";

export function Catalog() {
    return (
        <div>
            <section className="catalog">
                <h2 className="catalog__title">Каталог продукции</h2>
                <CatalogList />
            </section>
        </div>
    );
}