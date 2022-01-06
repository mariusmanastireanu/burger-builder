import React from "react";
import classes from "./NavigationItems.css"
import Item from "./Item/Item";

const navigationItems = ( props ) => (

    <ul className="NavigationItems">
        <Item link="/" active>Burger Builder</Item>
        <Item link="/">Checkout</Item>
    </ul>

);

export default navigationItems;