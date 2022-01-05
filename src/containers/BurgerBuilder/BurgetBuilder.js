import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import IngredientController from "../../components/IngredientController/IngredientController";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.6,
    meat: 0.99,
    bacon: 0.6,
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {},
        totalPrice: 3.99
    }

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type] ? this.state.ingredients[type] : 0;
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceDelta = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceDelta;
        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        })
    }

    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type] ? this.state.ingredients[type] : 0;
        if (oldCount === 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceDelta = INGREDIENT_PRICES[type] * -1;
        const newPrice = this.state.totalPrice + priceDelta;
        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        })
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        }
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] === 0;
        }
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <IngredientController
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice}
                />
            </div>
        );
    }

}

export default BurgerBuilder