import React, { Component } from "react"
import PropTypes from 'prop-types'
import classes from './Ingredient.css'

class Ingredient extends Component {

    render() {
        let currentIngredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                currentIngredient = <div className="BreadBottom"></div>;
                break;
            case ('bread-top'): 
                currentIngredient = (
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                );
                break;
            case ('meat'):
                currentIngredient = <div className="Meat"></div>;
                break;
            case ('cheese'):
                currentIngredient = <div className="Cheese"></div>;
                break;
            case ('salad'):
                currentIngredient = <div className="Salad"></div>;
                break;
            case ('bacon'):
                currentIngredient = <div className="Bacon"></div>;
                break;
            default: currentIngredient = null;
        }
    
        return currentIngredient;
    }
   
};

Ingredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default Ingredient