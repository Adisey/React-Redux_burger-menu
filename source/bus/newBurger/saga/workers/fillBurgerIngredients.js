// Core
import { put, apply } from 'redux-saga/effects';

//Components
import { newBburgersActions } from '../../actions';
import { ingredientsActions } from '../../../ingredients/actions';
import { uiActions } from '../../../ui/actions';

export function* fillBurgerIngredients () {
    // yield put(uiActions.startFetching());
    try {
        // yield put(ingredientsActions.fetchIngredientsAsync());

        // yield put(newBburgersActions.fillBurgerIngredients(['ID__006', 'ID__007']));

    } catch (error) {
        yield put(uiActions.emitError(error, 'fillBurgerIngredients worker'));
    } finally {
        // yield put(uiActions.stopFetching());
    }
}

