import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth.reducer';
import profile from '../reducers/profile';
import post from '../reducers/post';

export default combineReducers({
	alert,
	auth,
	profile,
	post
});
