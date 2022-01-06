import React from "react";
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import classes from "./SideDrawer.css"

const sideDrawer = (props) => {
    const attachedClasses = ["SideDrawer", props.open ? "Open" : "Close"].join(' ');
    return (
        <div className={{}}>
            <Backdrop show={props.open} backdropClicked={props.closed}/>
            <div className={attachedClasses}>
                <Logo height="9%"/>
                <nav><NavigationItems /></nav>
            </div>
        </div>
    );
};

export default sideDrawer;