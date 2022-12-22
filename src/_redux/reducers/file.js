import {LOAD_FILES_FAILURE, LOAD_FILES_REQUEST, LOAD_FILES_SUCCESS} from "../actions/fileAction";

export const initialState = {
    fileList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_FILES_REQUEST:
            return {
                ...state,
            }
        case LOAD_FILES_SUCCESS:
            return {
                ...state,
                fileList: [...action.payload]
            }
        case LOAD_FILES_FAILURE:
            return {
                ...state,
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;

