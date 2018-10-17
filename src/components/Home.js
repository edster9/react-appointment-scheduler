import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAppointment } from '../actions';
import Header from './Header';
import AppointmentList from './AppointmentList';
import AddAppointment from './AddAppointment';

class Home extends Component {

    constructor(props) {
        super(props);

        // minimal authenticaion check
        // this will move to a more common area
        if (props.user === null) {
            this.props.history.push('/login');
        }
    }

    onAddAppointment = (timeStamp, durration) => {
        this.props.addAppointment(timeStamp, durration);
    }

    renderError = () => {
        if (this.props.appointmentError) {
            return (
                <div className="alert alert-success alert-dismissible">
                    {/*
                    <button className="close" type="button" data-dismiss="alert">
                        <span>&times;</span>
                    </button>
                    */}
                    <strong>Error - </strong> {this.props.appointmentError}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <Header />

                <div role="main" className="container-fluid">

                    {this.renderError()}

                    <button className="btn btn-primary" data-toggle="modal" data-target="#add-appointment-model">Add Appointment</button>

                    <div className="card mt-3">

                        <div className="card-header">
                            My current appointments
                        </div>

                        <AppointmentList appointments={this.props.appointments} />
                    </div>

                </div>

                <AddAppointment onAddAppointment={this.onAddAppointment}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        appointments: state.appointments.items,
        appointmentError: state.appointments.error
    }
};

export default connect(mapStateToProps, {
    addAppointment
})(Home);