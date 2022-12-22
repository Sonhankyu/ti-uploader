import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import axios from "axios";
import {
    CREATE_INT_USER_FAILURE, CREATE_INT_USER_REQUEST,
    CREATE_INT_USER_SUCCESS,
    LOAD_INT_USER_FAILURE, LOAD_INT_USER_REQUEST,
    LOAD_INT_USER_SUCCESS

} from "../actions/InternalUserAction";
import {
    CREATE_EXT_USER_FAILURE, CREATE_EXT_USER_REQUEST,
    CREATE_EXT_USER_SUCCESS,
    createExtUserAction,
    LOAD_EXT_USER_FAILURE,
    LOAD_EXT_USER_REQUEST,
    LOAD_EXT_USER_SUCCESS
} from "../actions/ExternalUserAction";

// 내부 사용자
function loadIntUserAPI() {
    return axios.get('/user/list');
}

function* loadIntUser() {
    try {
        const response = yield call(loadIntUserAPI);
        yield put({
            type: LOAD_INT_USER_SUCCESS,
            payload: response.data
        })
    } catch (err) {
        yield put({
            type: LOAD_INT_USER_FAILURE
        })
    }
}

function* watchLoadIntUser() {
    yield takeLatest(LOAD_INT_USER_REQUEST, loadIntUser)
}

function createIntUserAPI(data) {
    return axios.post('/user/create', data);
}

function* createIntUser(action) {
    try {
        let user;
        const response = yield call(() => createIntUserAPI(action.data));
        if (response.status === 200) {
            // 이부분 여기서 콜하지말고 reducer 에서 payload 받고 업데이트
            user = yield call(loadIntUserAPI);
        }
        yield put({
            type: CREATE_INT_USER_SUCCESS,
            payload: user.data,
            setShowModal: action.setShowModal
        })
    } catch (err) {
        yield put({
            type: CREATE_INT_USER_FAILURE,
        })
    }
}

function* watchCreateIntUser() {
    yield takeLatest(CREATE_INT_USER_REQUEST, createIntUser);
}

// 외부 사용자
function loadExtUserAPI() {
    return axios.get('/upload-url/list');
}

function* loadExtUser() {
    try {
        const response = yield call(loadExtUserAPI);
        yield put({
            type: LOAD_EXT_USER_SUCCESS,
            payload: response.data
        })
    } catch (err) {
        yield put({
            type: LOAD_EXT_USER_FAILURE,
        })
    }
}

function* watchLoadExtUser() {
    yield takeLatest(LOAD_EXT_USER_REQUEST, loadExtUser);
}

function createExtUserAPI(data) {
    return axios.post('/upload-url/info', data);
}

function* createExtUser(action) {
    try {
        let user;
        const response = yield call(() => createExtUserAPI(action.data));
        console.log(response);
        if (response.status === 200) {
            user = yield call(loadExtUserAPI);
            // console.log(response.data)
        }
        yield put({
            type: CREATE_EXT_USER_SUCCESS,
            payload: user.data,
            setShowModal: action.setShowModal
        })
    } catch (err) {
        yield put({
            type: CREATE_EXT_USER_FAILURE,
        })
    }
}

function* watchCreateExtUser() {
    yield takeLatest(CREATE_EXT_USER_REQUEST, createExtUser);
}

export default function* userSaga() {
    yield all([
        fork(watchLoadIntUser),
        fork(watchCreateIntUser),
        fork(watchLoadExtUser),
        fork(watchCreateExtUser),
    ])
}