import { combineReducers } from 'redux';
import AuthReducers from './authReducers';

const rootReducer = combineReducers({
    auth: AuthReducers,
});

export default rootReducer;
