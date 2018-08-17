// Core
import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../api';
import { ingredientsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* createIngredient ({ payload: name }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.ingredient.create, [name]);
        const { data: ingredient, message } = yield apply(response, response.json);

        if (response.status !== 201) {
            throw new Error(message);
        }
        yield put(ingredientsActions.createIngredient(ingredient));
    } catch (error) {
        yield put(uiActions.emitError(error, 'createIngredient worker'));
    } finally {
        yield put(uiActions.stopFetching());

    }
}
