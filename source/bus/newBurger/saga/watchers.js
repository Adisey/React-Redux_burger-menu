// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { fillBurgerIngredients, addBurgerIngredients, removeBurgerIngredients } from './workers';

function* watcherFetchBurgerIngredients () {
    yield takeEvery(type.FETCH_BURGER_INGREDIENTS_ASYNC, fillBurgerIngredients);
}

function* watcherAddBurgerIngredients () {
    yield takeEvery(type.ADD_INTENT_ASYNC, addBurgerIngredients);
}

function* watcherRemoveBurgerIngredients () {
    yield takeEvery(type.REMOVE_INTENT_ASYNC, removeBurgerIngredients);
}

export function* watcherBurgerIngredients () {
    yield all([
        call(watcherFetchBurgerIngredients),
        call(watcherAddBurgerIngredients),
        call(watcherRemoveBurgerIngredients)
    ]);
}
