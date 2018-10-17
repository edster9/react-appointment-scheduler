import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';

class Header extends Component {

    onLogOut = () => {
        this.props.logoutUser();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <a className="navbar-brand" href="/#"><span className="text-warning">Appointment Manager</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Contact</a>
                        </li>
                    </ul>
                    <button onClick={this.onLogOut} className="btn btn-success my-2 my-sm-0" type="submit">Logout</button>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        error: state.auth.error
    }
};

export default connect(mapStateToProps, { 
    logoutUser
})(Header);
