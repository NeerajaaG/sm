import { takeLatest, put, call } from 'redux-saga/effects'
// import moment from 'moment'

import {LOGIN, LOGIN_SUCCESS, LOGIN_FAIL,REG} from '../actions'
import {login} from '../../config/api'


function* handleSaveAccount(action) {
    const {email, password} = action.payload
    console.log("email in userSaga",action);

    if (email && password) {
        try {
            const response = yield call(login, email, password)
            const userInfo = response.token

            console.log("resp",userInfo);
            if (userInfo) {
                yield put({type: LOGIN_SUCCESS, payload: {userInfo, email, password}})
                // yield put({type: LOGIN, payload: {userInfo, email, password}})

            } else {
                yield put({type: LOGIN_FAIL, payload: 'No user info!'})
            }
           
        } catch (error) {
            console.log('login:', error)
            yield put({type: LOGIN_FAIL, payload: error.message})    
        }
    } else {
        yield put({type: LOGIN_FAIL, payload: ''})
    }
}


export function* watchLogin() {
  console.log("##")
//   yield all([handleSaveAccount(),handleReg()]);

    yield takeLatest(LOGIN, handleSaveAccount)

}