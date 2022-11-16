export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const loginAction = (data) => {
    return {
        type: LOGIN_REQUEST,
        data
    }
}

export const logoutAction = (data) => {
    return {
        type: LOGOUT_REQUEST,
        data
    }
}

export const authAction = (data) => {
    return {
        type: AUTH_REQUEST,
        data
    }
}

