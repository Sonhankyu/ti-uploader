import {combineReducers} from 'redux';
import user from "./user";
import auth from "./auth";
import file from "./file";


const rootReducer = combineReducers({
    user, auth, file
})

export default rootReducer;