import React from "react";
import "./Toolbar.css"
import Logo from "../../Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";

const toolbar = ( props ) => (

    <header className="Toolbar">
        <Logo height="80%" clicked={props.showSideDrawer}/>
        <nav className="DesktopOnly">
            <NavigationItems/>
        </nav>
    </header>

);

export default toolbar;