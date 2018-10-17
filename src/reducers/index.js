import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AppointmentsReducer from './AppointmentsReducer';

export default combineReducers({
    auth: AuthReducer,
    appointments: AppointmentsReducer
});