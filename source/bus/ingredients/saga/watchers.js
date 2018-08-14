// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { createIngredient } from './workers';

function* watcherCreateIngredient () {
    yield takeEvery(type.CREATE_INGREDIENT_ASYNC, createIngredient);
}

export function* watcherIngredien () {
    yield all([call(watcherCreateIngredient)]);
}
