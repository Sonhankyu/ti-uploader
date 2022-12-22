export const LOAD_FILES_REQUEST = 'LOAD_FILES_REQUEST';
export const LOAD_FILES_SUCCESS = 'LOAD_FILES_SUCCESS';
export const LOAD_FILES_FAILURE = 'LOAD_FILES_FAILURE';

export const loadFileList = (data) => {
    return {
        type: LOAD_FILES_REQUEST,
        data
    }
}