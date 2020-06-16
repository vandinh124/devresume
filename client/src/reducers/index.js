import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth.reducer';

export default combineReducers({
    alert,
    auth
});