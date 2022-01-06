import React, { Component } from "react";
import classes from "./Layout.css"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/Toolbar/SideDrawer/SideDrawer";

class Layout extends Component {

    state = {
        sideDrawerVisible: false
    }

    sideDrawerOpenHandler = () => {
        this.setState({sideDrawerVisible: window.innerWidth < 500 ? true : false});
    }

    sideDrawerClosedHandler = () => {
        this.setState({sideDrawerVisible: false});
    }

    render() {
        return (
            <div>
                <Toolbar showSideDrawer={this.sideDrawerOpenHandler} />
                <SideDrawer open={this.state.sideDrawerVisible} closed={this.sideDrawerClosedHandler} />
                <main className="Content">
                    {this.props.children}
                </main>
            </div>
        );
    }
  
}

export default Layout;