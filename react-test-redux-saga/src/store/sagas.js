import { put, takeEvery } from 'redux-saga/effects'
import {getinitlist} from './actionTypes'
import { initAxiosObjData } from './actionCreator'
import axios from 'axios'

function* getinitlistSagaCarry() { // 在generator中不能使用promise这种，
  try {
    const res = yield axios.get('http://api.github.com')
    const action = initAxiosObjData(res.data)
    yield put(action)
  } catch(e){
    console.log('http error')
  }
}

function* mySaga() {
  yield takeEvery(getinitlist, getinitlistSagaCarry);
}

export default mySaga