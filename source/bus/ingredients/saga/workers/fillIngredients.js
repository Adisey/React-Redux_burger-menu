// Core
import { put, apply } from 'redux-saga/effects';

//Components
import { api } from '../../../../api';
import { ingredientsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';
import { newBburgersActions } from '../../../newBurger/actions';

export function* fillIngredients () {
    // yield put(uiActions.startFetching());
    try {
        const response = yield apply(api, api.ingredient.fetch);
        const { data: ingredients, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(ingredientsActions.fillIngredients(ingredients));
        // ToDo: Это не красиво, нужно разобраться как это грузить отдельно из списка ингредиентов.
        yield put(newBburgersActions.fillBurgerIngredients(ingredients));
    } catch (error) {
        yield put(uiActions.emitError(error, 'FillIngredients worker'));
    } finally {
        // yield put(uiActions.stopFetching());
    }
}
