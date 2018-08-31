// Core
import { put, apply } from 'redux-saga/effects';

//Components
import { api } from '../../../../api';
import { ingredientsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* fillIngredients () {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.ingredient.fetch);
        const { data: ingredients, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        // console.log(`ingredients fillIngredients->`, ingredients);
        yield put(ingredientsActions.fillIngredients(ingredients));
    } catch (error) {
        yield put(uiActions.emitError(error, 'FillIngredients worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
