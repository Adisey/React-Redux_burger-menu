import { type } from "./types";

export const ingredientsActions ={
    // Sync
    createIngredient: (ingredient) => {
        return {
            type:    type.CREATE_INGREDIENT,
            payload: ingredient,
        };
    },
    fillIngredients: (ingredients) => {
        return {
            type:    type.FILL_INGREDIENTS,
            payload: ingredients,
        };
    },

    // Async
    createIngredientAsync: (ingredient) => {
        return {
            type:    type.CREATE_INGREDIENT_ASYNC,
            payload: ingredient,
        };
    },
    fetchIngrediensAsync: (ingredients) => {
        return {
            type:    type.FETCH_INGREDIENTS_ASYNC,
            payload: ingredients,
        };
    },
};
