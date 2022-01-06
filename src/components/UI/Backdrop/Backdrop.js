import React from "react";
import "./Backdrop.css"

const backdrop = ( props ) => {
    return props.show ? <div className="Backdrop" onClick={props.backdropClicked}></div> : null
};

export default backdrop;