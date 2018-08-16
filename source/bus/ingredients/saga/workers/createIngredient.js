// Core
import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../api';
import { ingredientsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* createIngredient ({ payload: name }) {
    try {
        yield put(uiActions.startFetching());
        console.log(`createIngredient  ->`, name);
        const response = yield apply(api, api.ingredient.create, [name]);
        console.log(`response ->`, response);
        console.log(`response.data ->`, response.data);
        const { data: ingredient, message } = yield apply(response, response.json);

        if (response.status !== 201) {
            throw new Error(message);
        }
        // const ingredient = { id: '123', name };
        console.log(`ingredient ->`, ingredient);

        yield put(ingredientsActions.createIngredient(ingredient));
    } catch (error) {
        yield put(uiActions.emitError(error, 'createIngredient worker'));
    } finally {
        yield put(uiActions.stopFetching());

    }
}
