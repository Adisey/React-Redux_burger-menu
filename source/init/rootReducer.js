// Core
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// Reducers

import { uiReducer as ui } from '../bus/ui/reducer';
import { ingredientsReducer as ingredients } from '../bus/ingredients/reducer';
import { burgersReducer as burgers } from '../bus/burgers/reducer';

export const rootReducer = combineReducers({
    burgers,
    ingredients,
    router,
    ui,
});
