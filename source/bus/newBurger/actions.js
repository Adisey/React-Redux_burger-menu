import { type } from "./types";

export const newBburgersActions ={
    // Sync
    fillBurgerIngredients: (ingredients) => {
        return {
            type:    type.FILL_BURGER_INGREDIENTS,
            payload: ingredients,
        };
    },
    addIngredient: (ingredentId) => {
        return {
            type:    type.ADD_INTENT,
            payload: ingredentId,
        };
    },
    removeIngredient: (ingredentId) => {
        return {
            type:    type.REMOVE_INTENT,
            payload: ingredentId,
        };
    },
    addPictire: (ingredentId) => {
        return {
            type:    type.ADD_PICTURE,
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

};
