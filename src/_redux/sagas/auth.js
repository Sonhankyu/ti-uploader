import axios from "axios";
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
    AUTH_FAILURE,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS
} from "../actions/authAction";


//  Login

function loginAPI(data) {
    return axios.post('/login', data);
}

function* login(action) {
    try {
        window.localStorage.clear();
        const response = yield call(() => loginAPI(action.data));
        if (response.status === 200) {
            console.log(response)
            window.localStorage.setItem('token', response.data);
            window.location.href = window.location.origin + '/main';
        }
        yield put({
            type: LOGIN_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: LOGIN_FAILURE,
        });
    }
}

function* watchLogin() {
    yield takeLatest(LOGIN_REQUEST, login);
}

// Logout

function logoutAPI(data) {
    return axios.post('', data).then(() => {
        window.localStorage.clear();
        window.location.href = window.location.origin;
    });
}

function* logout(action) {
    try {
        yield call(() => logoutAPI(action.data));
        yield put({
            type: LOGOUT_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: LOGOUT_FAILURE,
        });
    }
}

function* watchLogout() {
    yield takeLatest(LOGOUT_REQUEST, logout);
}

//  Auth check

function authAPI(data) {
    return axios.post('/login/chk-jwt', data);
}

function* auth(action) {
    try {
        const response = yield call(() => authAPI(action.data));
        yield put({
            type: AUTH_SUCCESS,
            auth: response.data
        })
    } catch (err) {
        yield put({
            type: AUTH_FAILURE
        })
    }
}

function* watchAuth() {
    yield takeLatest(AUTH_REQUEST, auth);
}


export default function* authSaga() {
    yield all([
        fork(watchLogin),
        fork(watchAuth),
        fork(watchLogout),
    ])
}