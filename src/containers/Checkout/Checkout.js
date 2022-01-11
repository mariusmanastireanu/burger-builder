import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import withNavigationHook from "../../hoc/WithHook/WithNavigationHook";
import withLocationHook from "../../hoc/WithHook/WithLocationHook";

class Checkout extends Component {

    state = {
        ingredients: {},
        totalPrice: 0
    }

    componentDidMount() {
        if (this.props.loc.state && this.props.loc.state.totalPrice && this.props.loc.state.ingredients) {
            this.setState({
                ingredients: this.props.loc.state.ingredients,
                totalPrice: this.props.loc.state.totalPrice
            });
        }
    }

    onCancelHandler = () => {
        this.props.nav("/", {
            state: this.state
        });
    }

    onSubmitHandler = () => {
        this.props.nav("/checkout/contact");
    }

    render() {
        return (
            <CheckoutSummary ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                cancel={this.onCancelHandler}
                submit={this.onSubmitHandler}/>
        );
    }

}

export default withLocationHook(withNavigationHook(Checkout));