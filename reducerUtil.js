import { combineReducers } from 'redux';
export const makeAllReducer = (asyncReducers) => {
  console.log(asyncReducers);
  return combineReducers({
    ...asyncReducers
  })};
  
  export const injectReducer = (store, key, reducer) => {
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;
    console.log(key);
    store.asyncReducers[key] = reducer;
    const all = makeAllReducer(store.asyncReducers);
    console.log(store);
    console.log(store.replaceReducer);
    // store.replaceReducer(makeAllReducer(store.asyncReducers));
    store.replaceReducer(all);
  }
  
