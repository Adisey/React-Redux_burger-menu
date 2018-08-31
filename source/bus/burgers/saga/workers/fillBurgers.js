// Core
import { put, apply } from 'redux-saga/effects';

//Components
import { api } from '../../../../api';
import { burgersActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* fillBurgers () {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.burger.fetch);
        const { data: burgers, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(burgersActions.fillBurgers(burgers));
    } catch (error) {
        yield put(uiActions.emitError(error, 'FillBurgers worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
