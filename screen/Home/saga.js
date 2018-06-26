  
  import { takeLatest } from 'redux-saga';
  import { put } from 'redux-saga/effects';
  import * as navigation from 'react-navigation';
  const { NavigationActions } = navigation;
  export function* loginSagas() {
      try {
        // const result = yield call(loginApi, payload);
        // 这里走登陆成功。但是这样拿不到this.props.navigation
        // yield put(loginSuccess());
        yield put(NavigationActions.navigate('Person'));
      } catch (e) {
        console.log(e);
      }
  }
  export default function* saga() {
    yield takeLatest('POST', loginSagas);
  }