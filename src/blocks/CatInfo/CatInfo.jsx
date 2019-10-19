import React from "react";
import "./CatInfo.scss";

export function CatInfo() {
    return (
        <div>
            <form class="cat-info" action="https://echo.htmlacademy.ru" method="post">
                <ul class="cat-info__list">
                    <li class="cat-info__list-item">
                        <label class="cat-info__cat-text cat-info__cat-text--name" for="id-name">Имя:*</label>
                        <input class="cat-info__cat-box cat-info__cat-box--name" id="id-name" name="name" type="text" placeholder="барсик" required/>
                    </li>
                    <li class="cat-info__list-item">
                        <label class="cat-info__cat-text cat-info__cat-text--weight" for="id-weight">Вес(кг):*</label>
                        <input class="cat-info__cat-box cat-info__cat-box--weight" id="id-weight" name="weight" type="text" placeholder="7" required/>
                    </li>
                    <li class="cat-info__list-item">
                        <label class="cat-info__cat-text cat-info__cat-text--age" for="id-age">Возраст(лет):</label>
                        <input class="cat-info__cat-box cat-info__cat-box--age" id="id-age" name="age" type="text" placeholder="7"/>
                    </li>
                </ul>
                <ul class="cat-info__choice-list">
                    <li class="cat-info__choice-list-item cat-info__choice-list-item--programm">
                        <input class="cat-info__choice-box" id="id-loss-weight" name="programm" value="loss-weight" type="radio" checked/>
                        <label class="cat-info__choice-text" for="id-loss-weight">похудение</label>
                    </li>
                    <li class="cat-info__choice-list-item cat-info__choice-list-item--weight-gain">
                        <input class="cat-info__choice-box" id="id-weight-gain" name="programm" value="weight-gain" type="radio"/>
                        <label class="cat-info__choice-text" for="id-weight-gain">набор массы</label>
                    </li>
                    <li class="cat-info__choice-list-item cat-info__choice-list-item--help">
                        <input class="cat-info__choice-box" id="id-help" name="programm" value="help" type="radio"/>
                        <label class="cat-info__choice-text" for="id-help">не знаю(нужен ваш совет)</label>
                    </li>
                </ul>
                <p class="cat-info__owner-title">Контактные данные (владельца кота)</p>
                <ul class="cat-info__owner-list">
                    <li class="cat-info__owner-list-item">
                        <label class="cat-info__owner-text cat-info__owner-text--email" for="id-email">E-mail:*</label>
                        <input class="cat-info__owner-box cat-info__owner-box--email" id="id-email" name="email" type="email" placeholder="kuklachev@gmail.com" required/>
                    </li>
                    <li class="cat-info__owner-list-item">
                        <label class="cat-info__owner-text cat-info__owner-text--tel" for="id-tel">Телефон:*</label>
                        <input class="cat-info__owner-box cat-info__owner-box--tel" id="id-tel" name="tel" type="tel" placeholder="8 (960) 900-60-90" required/>
                    </li>
                </ul>
                <label class="cat-info__comment-title" for="id-comment">Комментарий</label>
                <textarea class="cat-info__comment" id="id-comment" rows="7" cols="1" placeholder="расскажите обо всех повадках кота"></textarea>
                <p class="cat-info__add-title">Дополнительно</p>
                <ul class="cat-info__add-product-list">
                    <li class="cat-info__add-product-list-item">
                        <input class="cat-info__add-product-box" id="id-sugar-free" name="sugar-free" type="checkbox" checked/>
                        <label class="cat-info__add-product-text" for="id-sugar-free">сахарозаменитель</label>
                    </li>
                    <li class="cat-info__add-product-list-item">
                        <input class="cat-info__add-product-box" id="id-water" name="water" type="checkbox"/>
                        <label class="cat-info__add-product-text" for="id-water">питьевая вода</label>
                    </li>
                    <li class="cat-info__add-product-list-item">
                        <input class="cat-info__add-product-box" id="id-milk" name="milk" type="checkbox"/>
                        <label class="cat-info__add-product-text" for="id-milk">молоко</label>
                    </li>
                    <li class="cat-info__add-product-list-item">
                        <input class="cat-info__add-product-box" id="id-vitamin" name="vitamin" type="checkbox"/>
                        <label class="cat-info__add-product-text" for="id-vitamin">витамины</label>
                    </li>
                </ul>
                <div class="cat-info__button-box">
                    <button class="button button--form" type="submit" name="cat-request" value="отправить заявку">отправить заявку</button>
                    <p class="cat-info__must">* — Обязательные поля</p>
                </div>
            </form>
        </div>
    );
}
