// Core
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// Reducers

import { newBurgersReducer as newBurgers } from '../bus/newBurger/reducer';
import { burgersReducer as burgers } from '../bus/burgers/reducer';
import { ingredientsReducer as ingredients } from '../bus/ingredients/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';

export const rootReducer = combineReducers({
    router,
    newBurgers,
    burgers,
    ingredients,
    ui,
});
