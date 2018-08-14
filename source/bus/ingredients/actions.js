import { type } from "./types";

export const ingredientsActions ={
    // Sync
    createIngredient: (ingredient) => {
        return {
            type:    type.CREATE_INGREDIENT,
            payload: ingredient,
        };
    },
    // Async
    createIngredientAsync: (ingredient) => {
        return {
            type:    type.CREATE_INGREDIENT_ASYNC,
            payload: ingredient,
        };
    },
};
