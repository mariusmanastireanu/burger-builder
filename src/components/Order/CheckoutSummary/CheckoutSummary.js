import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import './CheckoutSummary.css'

const checkoutSummary = ( props ) => {

    return (
        <div className="CheckoutSummary">
            <h1>Enjoy your custom made burger.</h1>
            <div style={{width: '100%', height: '300px', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <p>Total price: <strong>${props.price.toFixed(2)}</strong></p>
            <Button buttonType="Danger" clickHandler={props.cancel}>Cancel</Button>
            <Button buttonType="Success" clickHandler={props.submit}>Submit</Button>
        </div>
    );

}

export default checkoutSummary;