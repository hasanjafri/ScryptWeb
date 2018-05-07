import { userConstants } from '../constants';
import url from '../helpers/url';
import { postData } from '../helpers/request';

export function userLogin({ email, password }) {
    const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } = userConstants;

    return dispatch => {
        dispatch(request());
        postData(url.login, {
            email,
            password
        }).then(
            user => {
                dispatch(success(user));
                // history.push('/');
            },
            error => {
                dispatch(failure(error));
            }
        );
    };

    function request() { return { type: LOGIN_REQUEST }}
    function success(user) { return { type: LOGIN_SUCCESS, user } }
    function failure(error) { return { type: LOGIN_FAILURE, error } }
}