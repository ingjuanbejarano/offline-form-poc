import { all, fork, takeEvery, call } from 'redux-saga/effects'
import { Alert } from 'react-native'
import { Toast } from 'native-base'
import { networkSaga } from 'react-native-offline'

function* doSideEffect({ type }) {
  //yield call([Alert, Alert.alert], type, 'Message sent')
  yield call([Toast, Toast.show], {
    text: 'Message sent',
    type: 'success',
    duration: 2000,
  })
}

export function* rootSaga() {
  yield all([yield takeEvery(['SUBMIT_FORM'], doSideEffect), fork(networkSaga)])
}
