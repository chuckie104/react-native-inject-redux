import { fork } from 'redux-saga/effects';
import saga from './screen/Home/saga';


export default function* rootSaga() {
  yield [
    fork(saga),
  ];
}
