import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth.reducer';
import profile from '../reducers/profile';

export default combineReducers({
	alert,
	auth,
	profile
});
