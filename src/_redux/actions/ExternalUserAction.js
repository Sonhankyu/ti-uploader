export const LOAD_EXT_USER_REQUEST = 'LOAD_EXT_USER_REQUEST';
export const LOAD_EXT_USER_SUCCESS = 'LOAD_EXT_USER_SUCCESS';
export const LOAD_EXT_USER_FAILURE = 'LOAD_EXT_USER_FAILURE';

export const CREATE_EXT_USER_REQUEST = 'CREATE_EXT_USER_REQUEST';
export const CREATE_EXT_USER_SUCCESS = 'CREATE_EXT_USER_SUCCESS';
export const CREATE_EXT_USER_FAILURE = 'CREATE_EXT_USER_FAILURE';

export const DELETE_EXT_USER_REQUEST = 'DELETE_EXT_USER_REQUEST';
export const DELETE_EXT_USER_SUCCESS = 'DELETE_EXT_USER_SUCCESS';
export const DELETE_EXT_USER_FAILURE = 'DELETE_EXT_USER_FAILURE';


export const loadExtUserAction = () => {
    return {
        type: LOAD_EXT_USER_REQUEST,
    }
}

export const createExtUserAction = (data) => {
    return {
        type: CREATE_EXT_USER_REQUEST,
        data
    }
}

export const deleteExtUserAction = () => {
    return {
        type: DELETE_EXT_USER_REQUEST,
    }
}