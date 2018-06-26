import { createStore, applyMiddleware, compose } from 'redux';
import { makeAllReducer } from './reducerUtil';
import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';
import { middleware } from './reduxRoute';
import sagas from './saga';
// middleware, 
export default (initialState = {}, initialReducer = {}) => {
  const sagaMiddleware = createSagaMiddleware();
    const middlewares = [middleware, sagaMiddleware];
    
    const enhancers = [];
    const creatEnhancer = composeWithDevTools({ realtime: true });
    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
      enhancers.push(creatEnhancer());
    }
    const store = createStore(
      makeAllReducer(initialReducer),
      initialState,
      compose(
        applyMiddleware(...middlewares),
        ...enhancers
      )
    );
    
    store.asyncReducers = {
      ...initialReducer
    };
    sagaMiddleware.run(sagas)
    return store;
  }