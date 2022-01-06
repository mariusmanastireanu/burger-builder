import React from "react"
import IngredientControl from "../IngredientControl/IngredientControl"
import classes from './IngredientController.css'
import { BASE_PRICE}  from "../../../containers/BurgerBuilder/BurgerBuilder"

const controls = [
    {name: 'Salad', type: 'salad'},
    {name: 'Bacon', type: 'bacon'},
    {name: 'Cheese', type: 'cheese'},
    {name: 'Meat', type: 'meat'},
]

const ingredientController = ( props ) => {
    return <div className="IngredientController">
        <p>Price: <strong>${props.price.toFixed(2)}</strong></p>
        {
            controls.map(control => (
                <IngredientControl 
                    key={control.name} 
                    name={control.name}
                    added={() => props.ingredientAdded(control.type)}
                    removed={() => props.ingredientRemoved(control.type)}
                    disabled={props.disabled[control.type] != undefined ? props.disabled[control.type] : true}
                    /> 
            ))
        }
        <button 
            className="OrderButton"
            disabled={props.price === BASE_PRICE}
            onClick={props.checkout}>Order
        </button>
    </div>
}

export default ingredientController;