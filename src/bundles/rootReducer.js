import { combineReducers } from 'redux';
import login from './user/Login/Login.reducer';
import session from './user/Session/Session.reducer';
import loader from './common/Loader/Loader.reducer';

const rootReducer = combineReducers({
    login,
    session,
    loader
});

export default rootReducer;