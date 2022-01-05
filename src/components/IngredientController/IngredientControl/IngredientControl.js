import React from "react";
import classes from "./IngredientControl.css"

const ingredientControl = ( props ) => (
    <div className="IngredientControl">
        <div className="Label">{props.name}</div>
        <button className="Add" onClick={props.added}>Add</button>
        <button className="Remove" onClick={props.removed} disabled={props.disabled}>Remove</button>
    </div>
);

export default ingredientControl;