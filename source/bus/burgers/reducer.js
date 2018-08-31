//Core
import { fromJS, List } from 'immutable';

// Instruments
import { type } from './types';

const initalState = List();

export const burgersReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.CREATE_BURGER:
            return state.unshift(fromJS(action.payload));
        case type.FILL_BURGERS:
            return fromJS(action.payload);
        default:
            return state;
    }
};
