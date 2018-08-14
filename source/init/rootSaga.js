//Core
import { all, call } from 'redux-saga/effects';

// Wathers
import { watcherIngredien } from '../bus/ingredients/saga/watchers';

export function* rootSaga () {
    yield all([call(watcherIngredien)]);
}
