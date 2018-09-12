import { type } from "./types";

export const newBburgersActions ={
    // Sync
    fillBurgerIngredients: (ingredients) => {
        return {
            type:    type.FILL_BURGER_INGREDIENTS,
            payload: ingredients,
        };
    },
    addBurgerIngredient: (ingredentId) => {
        return {
            type:    type.ADD_BURGER_INTENT,
            payload: ingredentId,
        };
    },
    removeBurgerIngredient: (ingredentId) => {
        return {
            type:    type.REMOVE_BURGER_INTENT,
            payload: ingredentId,
        };
    },
    addAvailableIngredient: (ingredentId) => {
        return {
            type:    type.ADD_AVAILABLE_INTENT,
            payload: ingredentId,
        };
    },
    removeAvailableIngredient: (ingredentId) => {
        return {
            type:    type.REMOVE_AVAILABLE_INTENT,
            payload: ingredentId,
        };
    },
    // Async
    fetchBurgerIngredientsAsync: (ingredients) => {
        return {
            type:    type.FETCH_BURGER_INGREDIENTS_ASYNC,
            payload: ingredients,
        };
    },
    addIngredientAsync: (ingredentId) => {
        return {
            type:    type.ADD_INTENT_ASYNC,
            payload: ingredentId,
        };
    },
    removeIngredientAsync: (ingredentId) => {
        return {
            type:    type.REMOVE_INTENT_ASYNC,
            payload: ingredentId,
        };
    },

};
