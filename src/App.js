import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import history from './modules/history';
import Home from './components/Home';
import LogIn from './components/LogIn';

class App extends Component {
    
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/login" component={LogIn} />
                        <Redirect from="/" to="login" />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;