// Core
import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../api';
import { burgersActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* createBurger ({ payload: name }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.burger.create, [name]);
        const { data: burger, message } = yield apply(response, response.json);

        if (response.status !== 201) {
            throw new Error(message);
        }
        yield put(burgersActions.createBurger(burger));
    } catch (error) {
        yield put(uiActions.emitError(error, 'createBurger worker'));
    } finally {
        yield put(uiActions.stopFetching());

    }
}
