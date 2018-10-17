import moment from 'moment';
import uuid from 'uuid';
import _ from 'lodash';

import {
    ADD_APPOINTMENT,
    DELETE_APPOINTMENT,
    APPOINTMENT_FAIL
} from '../actions/types';

// One default appointment item added as example
const INITIAL_STATE = {
    items: [
        {
            id: uuid.v4(),
            startTime: moment('2018-10-10T15:00:00Z').unix(),
            endTime: moment('2018-10-10T15:00:00Z').add('15', 'minutes').unix()
        }
    ],
    error: ''
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ADD_APPOINTMENT:
            // add the appointment to the store
            action.payload.id = uuid.v4();
            let items = state.items.slice(0);
            items.push(action.payload);
            
            return {
                ...state,
                items,
                error: ''
            };
        case APPOINTMENT_FAIL:
            // set the appointment store error
            return {
                ...state,
                error: action.payload
            };
        case DELETE_APPOINTMENT:
            // remove the appointment by id from store
            state.items = _.remove(state.items, (appointment) => {
                return appointment.id !== action.payload;
            });

            return {
                ...state,
                error: ''
            };
        default:
            return state;
    }
}