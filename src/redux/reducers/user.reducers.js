import { userConstants } from '../constants';

const initialState = {
	// Login states
	isAuthenticated : false,
	isLoading: false,
	error: null,

	// User
	user: null
};

export default (state = initialState, action) => {
	const { type } = action;
	const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } = userConstants;
	switch (type) {
		case LOGIN_REQUEST:
			return {
				...state,
				isLoading: true,
				isAuthenticated: false,
				error: null
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoading: false,
				isAuthenticated: true,
				error: null,
				user: action.user
			};
		case LOGIN_FAILURE:
			return {
				...state,
				isLoading: false,
				isAuthenticated: false,
				error: action.error,
				user: null
			};
		default:
			return state;
	}
};