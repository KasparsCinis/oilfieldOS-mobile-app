import { combineReducers } from 'redux';
import login from './user/Login/Login.reducer';
import session from './user/Session/Session.reducer';
import loader from './common/Loader/Loader.reducer';
import modal from './common/Modal/Modal.reducer';

const rootReducer = combineReducers({
    login,
    session,
    loader,
    modal
});

export default rootReducer;