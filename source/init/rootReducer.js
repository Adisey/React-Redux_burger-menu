// Core
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// Reducers

import { uiReducer as ui } from '../bus/ui/reducer';
import { ingredientsReducer } from '../bus/ingredients/reducer';

export const rootReducer = combineReducers({
    ingredientsReducer,
    router,
    ui,
});
