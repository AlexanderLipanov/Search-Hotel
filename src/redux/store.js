import { createStore, applyMiddleware  } from 'redux';
import rootReducer from './combinedReducer';
import createSagaMiddleware from 'redux-saga';
import rootWatcher from './saga';

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => (
    createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    )
);

const store = configureStore({});

export default store;

sagaMiddleware.run(rootWatcher);

window.store = store;
