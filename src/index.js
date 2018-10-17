import React from 'react';
import ReactDOM from 'react-dom';

// 3rd party libraries
import 'bootstrap/dist/css/bootstrap.css';
import 'input-moment/dist/input-moment.css'
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

// app specific css
import './styles/app.css';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />
    , document.getElementById('root')
);

registerServiceWorker();