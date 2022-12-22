import axios from "axios";
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {LOAD_FILES_FAILURE, LOAD_FILES_REQUEST, LOAD_FILES_SUCCESS} from "../actions/fileAction";


function loadFileListAPI(data) {
    return axios.get(`/upload-file/list/${data}`);
}

function* loadFileList(action) {
    try {
        const response = yield call(() => loadFileListAPI(action.data));
        console.log(response)
        yield put({
            type: LOAD_FILES_SUCCESS,
            payload: response.data,
        })
    } catch (err) {
        yield put({
            type: LOAD_FILES_FAILURE,
        });
    }
}

function* watchLoadFileList() {
    yield takeLatest(LOAD_FILES_REQUEST, loadFileList);
}

export default function* fileSaga() {
    yield all([
        fork(watchLoadFileList),
    ])
}