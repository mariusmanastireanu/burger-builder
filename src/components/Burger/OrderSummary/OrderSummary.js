import React from "react";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingredientKey => {
        return ( 
            <li key={ingredientKey}>
                <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
            </li>
        )
    })
    
    return (
    <div>
        <h3>Your order</h3>
        <p>Burger configuration:</p>
        <ul>{ingredientSummary}</ul>
        <p>Total price: {props.price.toFixed(2)}</p>
        <p>Continue to Checkout?</p>
        <Button clickHandler={props.cancel} buttonType="Danger">Cancel</Button>
        <Button clickHandler={props.checkout} buttonType="Success">Continue</Button>
    </div>
    );
};

export default orderSummary;