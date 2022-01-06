import React, { Component } from "react"
import Ingredient from "./Ingredient/Ingredient";
import classes from './Burger.css'

const burger = ( props ) => {

    let ingredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
                return <Ingredient key={ingredientKey + index} type={ingredientKey} />
            });
        })
        .reduce((array, element) => {
            return array.concat(element)
        }, []);

    if (ingredients.length === 0) {
        ingredients = <div>Please add ingredients...</div>;
    }

    return (
        <div className="Burger">
            <Ingredient type="bread-top"/>
            {ingredients}
            <Ingredient type="bread-bottom"/>
        </div>
    );
}

export default burger