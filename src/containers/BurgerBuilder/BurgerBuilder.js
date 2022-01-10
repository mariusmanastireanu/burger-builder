import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import IngredientController from "../../components/Burger/IngredientController/IngredientController";
import Modal from "../../components/UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"
import Spinner from "../../components/UI/Spinner/Spinner";

const INGREDIENT_PRICES = {
    salad: 0.3,
    cheese: 0.5,
    meat: 0.99,
    bacon: 0.6,
}

export const BASE_PRICE = 3.99

class BurgerBuilder extends Component {

    state = {
        ingredients: {},
        totalPrice: BASE_PRICE,
        checkoutMode: false,
        loading: false,
    }

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type] ? this.state.ingredients[type] : 0;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] =  oldCount + 1;

        const priceDelta = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceDelta;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
    }

    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type] ? this.state.ingredients[type] : 0;
        if (oldCount === 0) {
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = oldCount - 1;

        const priceDelta = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice - priceDelta;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
    }

    checkoutHandler = () => {
        this.setState({checkoutMode: true});
    }

    checkoutCanceledHandler = () => {
        this.setState({checkoutMode: false});
    }

    checkoutSuccessHandler = () => {
        this.setState({loading: true});
        setTimeout(() => {
            // mock method
            this.setState({checkoutMode: false, loading: false});
            alert("Burger ordered");
        }, 2000);
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        }
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] === 0;
        }
        let orderSummary = (<OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice} 
            cancel={this.checkoutCanceledHandler}
            checkout={this.checkoutSuccessHandler} />);
        if (this.state.loading === true) {
            orderSummary = <Spinner />
        }
        return (
            <div>
                <Modal 
                    show={this.state.checkoutMode}
                    modalClosed={this.checkoutCanceledHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <IngredientController
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice}
                    checkout={this.checkoutHandler}
                />
            </div>
        );
    }

}

export default BurgerBuilder