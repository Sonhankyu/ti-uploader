import {
    CREATE_INT_USER_FAILURE,
    CREATE_INT_USER_REQUEST, CREATE_INT_USER_SUCCESS,
    LOAD_INT_USER_FAILURE,
    LOAD_INT_USER_REQUEST, LOAD_INT_USER_SUCCESS
} from "../actions/InternalUserAction";
import {
    CREATE_EXT_USER_FAILURE,
    CREATE_EXT_USER_REQUEST,
    CREATE_EXT_USER_SUCCESS, LOAD_EXT_USER_FAILURE,
    LOAD_EXT_USER_REQUEST, LOAD_EXT_USER_SUCCESS
} from "../actions/ExternalUserAction";
import {message} from "antd";

export const initialState = {
    intUserList: [],
    extUserList: [],
    uploadURL: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_INT_USER_REQUEST:
            return {
                ...state,
            };
        case LOAD_INT_USER_SUCCESS:
            return {
                ...state,
                intUserList: [...action.payload],
            };
        case LOAD_INT_USER_FAILURE:
            return {
                ...state,
            };

        case CREATE_INT_USER_REQUEST:
            return {
                ...state,
            }
        case CREATE_INT_USER_SUCCESS:
            message.success({content: 'Complete create new user'}).then();
            action.setShowModal(false);
            return {
                ...state,
                intUserList: [...action.payload]
            }
        case CREATE_INT_USER_FAILURE:
            return {
                ...state,
            }

        case LOAD_EXT_USER_REQUEST:
            return {
                ...state,
            };
        case LOAD_EXT_USER_SUCCESS:
            return {
                ...state,
                extUserList: [...action.payload],
            };
        case LOAD_EXT_USER_FAILURE:
            return {
                ...state,
            };

        case CREATE_EXT_USER_REQUEST:
            return {
                ...state,
            }
        case CREATE_EXT_USER_SUCCESS:
            message.success({content: 'Complete create new user'}).then();
            action.setShowModal(false);
            return {
                ...state,
                extUserList: [...action.payload],
            }
        case CREATE_EXT_USER_FAILURE:
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