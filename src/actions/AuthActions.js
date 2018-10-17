import history from '../modules/history';

import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT_USER,
    LOGOUT_USER_FAIL
} from './types';

export const loginUser = () => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_USER });

        try {
            // normally some asyn logic goes here to login a user from a database
            // but for now it will simply fall through to a fake user

            let user = {
                username: 'default'
            }

            loginUserSuccess(dispatch, user);
        } catch (error) {
            //console.log('Failed to login user', error);
            dispatch({ type: LOGIN_USER_FAIL });
        }
    };
};

export const logoutUser = () => {
    return async (dispatch) => {
        try {
            // normally some asyn logic goes here to logout a user from a database
            dispatch({
                type: LOGOUT_USER
            });

            history.push('/login');
        
        } catch (error) {
            //console.log('Failed to logout user', error);
            dispatch({ type: LOGOUT_USER_FAIL });
        }
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    history.push('/home');
};