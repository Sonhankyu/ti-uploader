import {
    AUTH_FAILURE,
    AUTH_REQUEST,
    AUTH_SUCCESS, CHANGE_PW_FAILURE, CHANGE_PW_REQUEST, CHANGE_PW_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS
} from "../actions/authAction";
import {message} from "antd";

export const initialState = {
    auth: '',
    info: {}
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
                info: action.info
            }
        case AUTH_FAILURE:
            return {
                ...state,
            }

        case CHANGE_PW_REQUEST:
            return {
                ...state,
            }
        case CHANGE_PW_SUCCESS:
            message.success({content: 'Change Password Completed'}).then();
            action.setVisible(false);
            return {
                ...state,
                info: action.payload
            }
        case CHANGE_PW_FAILURE:
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