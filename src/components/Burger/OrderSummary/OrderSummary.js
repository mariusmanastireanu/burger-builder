import React, { Component } from "react";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
    
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(ingredientKey => {
            return ( 
                <li key={ingredientKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {this.props.ingredients[ingredientKey]}
                </li>
            )
        })

        return (
            <div>
                <h3>Your order</h3>
                <p>Burger configuration:</p>
                <ul>{ingredientSummary}</ul>
                <p>Total price: {this.props.price.toFixed(2)}</p>
                <p>Continue to Checkout?</p>
                <Button clickHandler={this.props.cancel} buttonType="Danger">Cancel</Button>
                <Button clickHandler={this.props.checkout} buttonType="Success">Continue</Button>
            </div>
        );
    }
    
};

export default OrderSummary;