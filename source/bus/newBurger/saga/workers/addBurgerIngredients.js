// Core
import { put, apply } from 'redux-saga/effects';

//Components
import { newBburgersActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* addBurgerIngredients ({ payload: ingredentId }) {
    yield put(uiActions.startFetching());
    try {

        yield put(newBburgersActions.removeAvailableIngredient(ingredentId));
        yield put(newBburgersActions.addBurgerIngredient(ingredentId));

    } catch (error) {
        yield put(uiActions.emitError(error, 'addBurgerIngredients worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
