//Core
import { all, call } from 'redux-saga/effects';

// Wathers
import { watcherBurgerIngredients } from '../bus/newBurger/saga/watchers';
import { watcherIngredients } from '../bus/ingredients/saga/watchers';
import { watcherburgers } from '../bus/burgers/saga/watchers';

export function* rootSaga () {
    yield all([call(watcherIngredients), call(watcherBurgerIngredients), call(watcherburgers)]);
}
