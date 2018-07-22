import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

export function * helloSaga() {
    console.log("wait...")
    yield delay(1000);
    console.log("Hello")
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga()
  ])
}