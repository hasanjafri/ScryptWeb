import { combineReducers } from 'redux';
import user from './reducers/user.reducers';
import toast from './reducers/toast.reducers';

export default combineReducers({
    user,
    toast
});