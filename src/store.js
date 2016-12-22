import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { DevTools } from './utils/index';

function _applyMiddleware() {
    const middleware = [

    ]

    return applyMiddleware(...middleware);
}

export default function configureStore(initialStore) {
    const store = compose(
        _applyMiddleware(),
        DevTools.instrument()
    )(createStore)(rootReducer, initialStore);

    return store;
}
