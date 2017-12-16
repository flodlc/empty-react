import React from 'react';
import reactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Promise from 'promise-polyfill';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App/App';

injectTapEventPlugin();

if (!window.Promise) {
    window.Promise = Promise;
}

reactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>,
    document.getElementById('root'));
