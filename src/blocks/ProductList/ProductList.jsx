import React from "react";
import "./ProductList.scss";
import { ProductListItem } from "../ProductListItem/ProductListItem";

export function ProductList(props) {
    let productListInfo =[
        {id: "1", product:"Сахарозаменитель", size:"1 упаковка (100 г)", cost:"200 Р."},
        {id: "2", product:"Питьевая вода", size:"5 литров", cost:"50 Р.", water: true, infoCountWater: true},
        {id: "3", product:"Молоко", size:"1 литр", cost:"100 Р.", milk: true, infoCountMilk: true},
        {id: "4", product:"Витамины", size:"1 упаковка (30 г)", cost:"300 Р.", vitamin: true, infoCountVitamin: true},
    ]

    let productlistElements = productListInfo.map((productListInfo) => {
        return (
        <ProductListItem key={productListInfo.id} product={productListInfo.product} size={productListInfo.size} cost={productListInfo.cost} water={productListInfo.water} milk={productListInfo.milk} vitamin={productListInfo.vitamin} infoCountWater={productListInfo.infoCountWater} infoCountMilk={productListInfo.infoCountMilk} infoCountVitamin={productListInfo.infoCountVitamin}/>
        )
    })
    return (
        <div>
            <ul className="additional-goods__list product-list">
                {productlistElements}
            </ul>
        </div>
    );
}