import { toastConstants } from '../constants';
const { CLEAR_TOASTS, ENQUEUE_TOAST } = toastConstants;

export function clearToasts() {
    return dispatch => {
        return dispatch({ type: CLEAR_TOASTS })
    }
}

export function toast(toastObject) {
    return dispatch => {
        return dispatch({
            type: ENQUEUE_TOAST,
            toast: toastObject,
        });
    }
}