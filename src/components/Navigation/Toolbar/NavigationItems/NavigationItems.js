import React from "react";
import "./NavigationItems.css"
import Item from "./Item/Item";

const navigationItems = ( props ) => (

    <ul className="NavigationItems">
        <Item link="/">Burger Builder</Item>
        <Item link="/checkout">Checkout</Item>
    </ul>

);

export default navigationItems;