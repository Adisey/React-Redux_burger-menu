//Core
import { fromJS, List, Map } from 'immutable';

// Instruments
import { type } from './types';

const initalState = fromJS({
    availableIngredients: [],
    selectedIngredients:  [],
    burgerPriceCent:      0,
});

export const newBurgersReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.FILL_BURGER_INGREDIENTS:
            //раньше собирал все свойства ингредиента
            // const newState =  state.set('availableIngredients', fromJS(action.payload));
            // теперь только ID
            return state.set('availableIngredients',
                fromJS(action.payload.map((ingredient) => {
                    return { id: ingredient.id };
                })));
        case type.ADD_BURGER_INTENT:
            return state.set(
                'selectedIngredients',
                state.get('selectedIngredients')
                    .unshift(Map({ id: action.payload }))
            );
        case type.REMOVE_BURGER_INTENT:
            return state.set(
                'selectedIngredients',
                state.get('selectedIngredients')
                    .filter((igredient) => igredient.get('id') !== action.payload)
            );
        case type.ADD_AVAILABLE_INTENT:
            return state.set(
                'availableIngredients',
                state.get('availableIngredients')
                    .unshift(Map({ id: action.payload }))
            );
        case type.REMOVE_AVAILABLE_INTENT:
            return state.set(
                'availableIngredients',
                state.get('availableIngredients')
                    .filter((igredient) => igredient.get('id') !== action.payload)
            );
        default:
            return state;
    }
};
