import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from "./index"
import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  );

// then run the saga
sagaMiddleware.run(mySaga);

export default store;