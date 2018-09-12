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
                fromJS(action.payload.map((ingredient) => {
                    return { id: ingredient.id };
                })));
        case type.ADD_INTENT:
            // const newState = state;

            // newState.set('availableIngredients', state.get('availableIngredients').filter((igredient) => {
            //     console.log(`I-> `, igredient.get('id'), ` P ->`, action.payload, igredient.get('id') !== action.payload);
            //
            //     return igredient.get('id') !== action.payload;
            // }));
            // const selectedIngredients = state.get('selectedIngredients');

            // console.log(`Reduser -> State ->`, state);
            // console.log(`Reduser -> action.payload ->`, action.payload);
            // console.log(`Reduser -> availableIngredients ->`, availableIngredients);
            // console.log(`Reduser -> selectedIngredients ->`, selectedIngredients);
            // newState.set('availableIngredients', availableIngredients);
            // newState.set('availableIngredients', availableIngredients);
            // console.log(`Reduser -> newState ->`, newState);

            return state.set(
                'availableIngredients',
                state.get('availableIngredients')
                    .filter((igredient) => igredient.get('id') !== action.payload)
            );
        case type.REMOVE_INTENT:
            return state;
        case type.ADD_PICTURE:
            return state;
        default:
            return state;
    }
};
