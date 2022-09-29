import {LOAD_USER_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS} from "../actions/userAction";

export const initialState = {
    userList: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER_REQUEST:
            return {
                ...state,
            };
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                userList: [...action.payload],
            };
        case LOAD_USER_FAILURE:
            return {
                ...state,
            };
        default:
            return {
                ...state
            }
    }
};

export default reducer;