//Core
import { all, call } from 'redux-saga/effects';

// Wathers
import { watcherIngrediens } from '../bus/ingredients/saga/watchers';

export function* rootSaga () {
    yield all([call(watcherIngrediens)]);
}
