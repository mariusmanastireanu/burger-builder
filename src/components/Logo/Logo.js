import React from "react";
import burgerLogo from "../../images/burger-logo.png"
import classes from "./Logo.css"

const logo = (props) => (

    <div className="Logo" style={{height: props.height}}>
        <img src={burgerLogo} onClick={props.clicked}/>
    </div>

);

export default logo;