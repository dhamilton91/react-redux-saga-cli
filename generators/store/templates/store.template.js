import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import rootSaga from './rootSaga';


const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

export default function configureStore(initialState = {}) {
	const store = {
		...createStore(
			rootReducer,
			initialState,
			applyMiddleware(sagaMiddleware, loggerMiddleware)
		)
	};

	sagaMiddleware.run(rootSaga);

	return store;
};
