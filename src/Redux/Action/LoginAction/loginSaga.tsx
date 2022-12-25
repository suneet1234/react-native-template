import { put, takeLatest, call } from 'redux-saga/effects';

import {
    ActionType
} from '../../Type';
const { USER_LOGIN, USER_LOGIN_FAILURE, USER_LOGIN_LOADING } = ActionType

import Api from '../../../Network/Api';
import * as Config from '../../../Configration'

function* loginSaga(data: { payload: any }) {
    yield put({ type: USER_LOGIN_LOADING, payload: true });
    try {
        //@ts-ignore
        const res = yield call(Api.loginApi, data.payload)
        console.log("return data ====>", res)
        if (res.status) {
            yield put({ type: USER_LOGIN, payload: res });
            yield put({ type: USER_LOGIN_LOADING, payload: false });
        } else {
            yield put({ type: USER_LOGIN_FAILURE, payload: res.message });
            yield put({ type: USER_LOGIN_LOADING, payload: false });
        }
    } catch (error) {
        yield put({ type: USER_LOGIN_FAILURE, payload: error.toString() });
        yield put({ type: USER_LOGIN_LOADING, payload: false });

    }
}

function* LoginSagaAsync() {
    //@ts-ignore
    yield takeLatest(USER_LOGIN, loginSaga);
}

export default LoginSagaAsync;
