
import createStore from './store';
import reducer from './reducer';
import { NavigationActions } from 'react-navigation';
import { fromJS } from 'immutable';
import { nav } from './reduxRoute';
// import homeReducer from './screen/Home/reducer';
// export const store = createStore({}, { global: reducer, location: nav });
export const store = createStore({}, { global: reducer, nav });