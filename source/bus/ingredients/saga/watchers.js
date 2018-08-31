// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { createIngredient, fillIngredients } from './workers';

function* watcherCreateIngredient () {
    yield takeEvery(type.CREATE_INGREDIENT_ASYNC, createIngredient);
}
function* watcherFetchIngredients () {
    yield takeEvery(type.FETCH_INGREDIENTS_ASYNC, fillIngredients);
}

export function* watcherIngredients () {
    yield all([call(watcherCreateIngredient), call(watcherFetchIngredients)]);
}
