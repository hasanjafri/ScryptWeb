import { List } from 'immutable';
import { toastConstants } from '../constants';

const { CLEAR_TOASTS, ENQUEUE_TOAST  } = toastConstants;

const initialState = {
	toastQueue: List([]),
};

const reducer = (state = initialState, payload) => {
	const { type, toast } = payload;
	
	switch (type) {
		case CLEAR_TOASTS:
			return {
				...state,
				toastQueue: List([]),
			};
		case ENQUEUE_TOAST:
		const toastQueue = state.toastQueue.push(toast);
			return {
				...state,
				toastQueue,
			};
		default:
			return state;
	}
};

export default reducer;