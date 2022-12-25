import { createStore, applyMiddleware, compose } from 'redux';
//import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import reducers from '../Reducer';
import { rootSaga } from '../Action';
// @ts-ignore
import reduxReset from 'redux-reset';

const sagaMiddleware = createSagaMiddleware();
// const loggerMiddleware = createLogger({ predicate: () => __DEV__ })

function configureStore(initialState: {}) {
    const enhancer = compose(
        applyMiddleware(
            sagaMiddleware,
        ),
        reduxReset(),
    );
    // @ts-ignore
    return createStore(reducers, initialState, enhancer);
}

const store = configureStore({});
sagaMiddleware.run(rootSaga);
export default store;