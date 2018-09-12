// Core
import { put, apply } from 'redux-saga/effects';

//Components
import { newBburgersActions } from '../../actions';
import { ingredientsActions } from '../../../ingredients/actions';
import { uiActions } from '../../../ui/actions';

export function* removeBurgerIngredients ({ payload: ingredentId }) {
    yield put(uiActions.startFetching());
    try {
        yield put(newBburgersActions.removeBurgerIngredient(ingredentId));
        yield put(newBburgersActions.addAvailableIngredient(ingredentId));


    } catch (error) {
        yield put(uiActions.emitError(error, 'removeBurgerIngredients worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}

