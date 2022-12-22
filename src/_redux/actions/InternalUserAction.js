export const LOAD_INT_USER_REQUEST = 'LOAD_INT_USER_REQUEST';
export const LOAD_INT_USER_SUCCESS = 'LOAD_INT_USER_SUCCESS';
export const LOAD_INT_USER_FAILURE = 'LOAD_INT_USER_FAILURE';

export const CREATE_INT_USER_REQUEST = 'CREATE_INT_USER_REQUEST';
export const CREATE_INT_USER_SUCCESS = 'CREATE_INT_USER_SUCCESS';
export const CREATE_INT_USER_FAILURE = 'CREATE_INT_USER_FAILURE';

export const DELETE_INT_USER_REQUEST = 'DELETE_INT_USER_REQUEST';
export const DELETE_INT_USER_SUCCESS = 'DELETE_INT_USER_SUCCESS';
export const DELETE_INT_USER_FAILURE = 'DELETE_INT_USER_FAILURE';


export const loadIntUserAction = () => {
    return {
        type: LOAD_INT_USER_REQUEST,
    }
}

export const createIntUserAction = (data, setShowModal) => {
    return {
        type: CREATE_INT_USER_REQUEST,
        data, setShowModal
    }
}

export const deleteIntUserAction = () => {
    return {
        type: DELETE_INT_USER_REQUEST,
    }
}