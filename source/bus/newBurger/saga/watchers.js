// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { fillBurgerIngredients } from './workers';

function* watcherFetchBurgerIngredients () {
    yield takeEvery(type.FETCH_BURGER_INGREDIENTS_ASYNC, fillBurgerIngredients);
}

export function* watcherBurgerIngredients () {
    yield all([call(watcherFetchBurgerIngredients)]);
}
