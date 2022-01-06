import React from "react";
import classes from "./Button.css"

const button = ( props ) => (

    <button
        className={["Button", props.buttonType].join(' ')} 
        onClick={props.clickHandler}>
            {props.children}
    </button>

);

export default button;