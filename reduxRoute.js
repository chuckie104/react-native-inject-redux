// reduxRoute 配置redux集成
// console.log('route 触发了');
import {
    createStackNavigator,
  } from 'react-navigation';
  import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';
  import { connect } from 'react-redux';
  const Home = () => import('./screen/Home')  
  const Person = () => import('./screen/Person')  
  // import Home from './screen/Home/Loadable';
  // import Person from './screen/Person/Loadable';
  // import Reducer from './screen/Home/reducer';
  // console.log(Home); //undefined
  // console.log(Reducer); //reducer
  // console.log(abc);
export const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

// 注册导航
export const RootNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Person: {
    screen: Person,
  },

});
// const RootNavigator = createStackNavigator({
//     Home: { screen: Home },
//     Person: { screen: Person },
// });

 export const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');
  // 拿到props.nav
  const mapStateToProps = state => ({
    state: state.nav,
  });
  // 集成到组件
const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

// route reducer

const secondAction = RootNavigator.router.getActionForPathAndParams('Home');
const initialNavState = RootNavigator.router.getStateForAction(
  secondAction,
);
export function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'TO_NEW_PERSONAL':
    nextState = RootNavigator.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'Person' }),
      state
    );
    break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
