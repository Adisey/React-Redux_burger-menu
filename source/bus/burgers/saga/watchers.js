// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { createBurger, fillBurgers } from './workers';

function* watcherCreateBurger () {
    yield takeEvery(type.CREATE_BURGER_ASYNC, createBurger);
}
function* watcherFetchBurgers () {
    yield takeEvery(type.FETCH_BURGERS_ASYNC, fillBurgers);
}

export function* watcherburgers () {
    yield all([call(watcherCreateBurger), call(watcherFetchBurgers)]);
}
