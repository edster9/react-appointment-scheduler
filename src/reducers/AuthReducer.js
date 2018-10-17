import { 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT_USER,
    LOGOUT_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = { 
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case LOGIN_USER:
            return { 
                ...state, 
                loading: true, 
                error: '' 
            };
        case LOGIN_USER_SUCCESS:
            return { 
                ...state,
                ...INITIAL_STATE, 
                user: action.payload
            };
        case LOGIN_USER_FAIL:
            return { 
                ...state, 
                loading: false, 
                error: 'Authentication Failed.' 
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: null,
                error: ''
            };
        case LOGOUT_USER_FAIL:
            return { 
                ...state, 
                error: 'Logout Failed.' 
            };
        default:
            return state;
    }
}