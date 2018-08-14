// Core
import { put, apply } from 'redux-saga/effects';

// import { api } from '../../../../REST';
import { ingredientsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* createIngredient ({ payload: name }) {
    try {
        yield put(uiActions.startFetching());
        console.log(`createIngredient  ->`, name);
        // const response = yield apply(api, api.ingredients.create, [name]);
        // const { data: ingredient, message } = yield apply(response, response.json);
        //
        // if (response.status !== 200) {
        //     throw new Error(message);
        // }
        const ingredient = { id: '123', name };
        console.log(`ingredient ->`, ingredient);

        yield put(ingredientsActions.createIngredient(ingredient));
    } catch (error) {
        yield put(uiActions.emitError(error, 'createIngredient worker'));
    } finally {
        yield put(uiActions.stopFetching());

    }
}

// ToDo: Собрать название и цену ингредиента
// ToDo: Проверить валидацию Формы отправки
// ToDo: Собрать Node Server
