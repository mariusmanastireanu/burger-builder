import React from "react";
import { Link } from 'react-router-dom'
import "./Item.css"

const item = (props) => (
    <li className="Item">
        <Link to={props.link} className={props.active ? "active" : null}>{props.children}</Link>
    </li>
);

export default item;