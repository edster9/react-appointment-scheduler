import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

class LogIn extends Component {

    onLogIn = (e) => {
        e.preventDefault();

        // normally you would pass in the login credentials to the login action
        this.props.loginUser();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <form onSubmit={this.onLogIn} className="form-signin">
                        <div className="text-center mb-4 mt-5">
                            <h1 className="h3 mb-3 font-weight-normal">Appointment Manager</h1>
                            <p>Please enter your email address or username and click Log in</p>
                        </div>

                        <div className="form-label-group mb-2">
                            <input type="email" id="inputEmail" className="form-control" placeholder="Username (anything will do)" autoFocus />
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        error: state.auth.error,
        loading: state.auth.loading
    }
};

export default connect(mapStateToProps, { 
    loginUser
})(LogIn);