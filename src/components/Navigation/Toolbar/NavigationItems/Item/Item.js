import React from "react";
import "./Item.css"

const item = (props) => (
    <li className="Item">
        <a href={props.link} className={props.active ? "active" : null}>{props.children}</a>
    </li>
);

export default item;