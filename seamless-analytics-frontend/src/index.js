import 'babel-polyfill'; // general ES2015 polyfill (e.g. promise)
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

ReactDOM.render(<AppWrapper />, document.getElementById('root'));