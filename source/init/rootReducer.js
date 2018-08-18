// Core
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// Reducers

import { uiReducer as ui } from '../bus/ui/reducer';
import { ingredientsReducer as ingredients } from '../bus/ingredients/reducer';

export const rootReducer = combineReducers({
    ingredients,
    router,
    ui,
});
