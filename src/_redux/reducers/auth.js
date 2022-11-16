import {
    AUTH_FAILURE,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS
} from "../actions/authAction";

export const initialState = {
    auth: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
            };

        case LOGOUT_REQUEST:
            return {
                ...state,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                auth: ''
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
            };

        case AUTH_REQUEST:
            return {
                ...state,
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                auth: action.auth,
            }
        case AUTH_FAILURE:
            return {
                ...state,
            }
        default:
            return {
                ...state
            }
    }
};

export default reducer;