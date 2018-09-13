import { combineReducers } from 'redux';
import login from './user/Login/Login.reducer';
import session from './user/Session/Session.reducer';

const rootReducer = combineReducers({
    login,
    session,
});

export default rootReducer;