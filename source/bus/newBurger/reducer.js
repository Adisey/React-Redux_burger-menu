//Core
import { fromJS, List } from 'immutable';

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
                fromJS(action.payload.map((ingredient) => ingredient.id)));
        case type.ADD_INTENT:
            return state;
        case type.REMOVE_INTENT:
            return state;
        case type.ADD_PICTURE:
            return state;
        default:
            return state;
    }
};
