import { combineReducers } from 'redux';
import user from './user/Login/Login.reducer';
import session from './user/Session/Session.reducer';

const rootReducer = combineReducers({
    user,
    session,
});

export default rootReducer;