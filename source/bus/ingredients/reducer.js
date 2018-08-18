//Core
import { fromJS, List } from 'immutable';

// Instruments
import { type } from './types';

const initalState = List();

export const ingredientsReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.CREATE_INGREDIENT:
            return state.unshift(fromJS(action.payload));
        case type.FILL_INGREDIENTS:
            return fromJS(action.payload);
        default:
            return state;
    }
};
