import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { deleteAppointment } from '../actions';

class AppointmentList extends Component {
    onDeleteAppointment = (appointmentId) => {
        this.props.deleteAppointment(appointmentId);
    }

    renderAppointment = (appointment) => {
        let startTime = moment.unix(appointment.startTime).format('MMMM Do, YYYY (hh:mm a)');
        let endTime = moment.unix(appointment.endTime).format('MMMM Do, YYYY (hh:mm a)');

        return (
            <li key={appointment.id} className="list-group-item">
                <strong>Starting Time: </strong>
                <span>{startTime}</span>
                <span> - </span>
                <strong>Ending Time: </strong>
                <span>{endTime}</span>
                <button onClick={this.onDeleteAppointment.bind(this, appointment.id)} className="btn btn-sm btn-warning float-right">delete</button>
            </li>
        );
    }

    render() {
        return (
            <ul className="list-group">
                {this.props.appointments.map(this.renderAppointment)}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

export default connect(mapStateToProps, {
    deleteAppointment
})(AppointmentList);